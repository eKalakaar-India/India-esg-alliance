import React, { useState, useEffect, useRef } from "react";

import logo from "../../assets/logo.jpeg";

import "./Navbar.css";

import { FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import { searchableContent } from "../../data/searchIndex";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState("Eng");

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [showResults, setShowResults] = useState(false);

  const dropdownRef = useRef(null);

  const searchContainerRef = useRef(null);

  const navigate = useNavigate();

  // Close menus when clicking outside

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }

      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter content across titles and keywords

  const handleSearchChange = (e) => {
    const query = e.target.value;

    setSearchQuery(query);

    if (query.trim().length > 1) {
      const filtered = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      );

      setSearchResults(filtered);

      setShowResults(true);
    } else {
      setSearchResults([]);

      setShowResults(false);
    }
  };

  const handleSelectResult = (item) => {
    setShowResults(false);

    setSearchQuery("");

    if (item.external) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else if (item.path.includes("#")) {
      // HashLink-compatible route

      navigate(item.path);
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-upper-section">
        <div
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            gap: "10px",

            cursor: "pointer",
          }}
        >
          <img
            src={logo}
            onClick={() => navigate("/")}
            width={90}
            height={70}
            className="nav-logo"
            alt="India ESG Alliance"
          />
        </div>

        <div className="nav-btns">
          {/* Global Search Container */}

          <div className="searchbar-wrapper" ref={searchContainerRef}>
            <div className="searchbar">
              <input
                type="text"
                className="search-input"
                placeholder="Search pages, solutions, guides..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() =>
                  searchQuery.trim().length > 1 && setShowResults(true)
                }
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => {
                    setSearchQuery("");

                    setShowResults(false);
                  }}
                >
                  <FaTimes />
                </button>
              )}

              <FaSearch className="search-icon" />
            </div>

            {/* Live Search Results Modal/Dropdown */}

            {showResults && (
              <div className="search-results-box">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <div
                      key={item.id}
                      className="search-result-item"
                      onClick={() => handleSelectResult(item)}
                    >
                      <div className="result-text">
                        <span className="result-title">{item.title}</span>

                        <span className="result-cat">{item.category}</span>
                      </div>

                      {item.external && (
                        <FaExternalLinkAlt className="ext-icon" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="no-search-results">
                    No matching pages or resources found.
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "center",

              width: "30%",

              gap: "12px",
            }}
          >
            <div className="language-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="language-btn"
                onClick={() => setOpen(!open)}
              >
                <div className="left">
                  <span className="icon">🌐</span>

                  <span>{selected}</span>
                </div>

                <span className={`arrow ${open ? "rotate" : ""}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${open ? "show" : ""}`}>
                <div
                  className={`dropdown-item ${selected === "Eng" ? "active" : ""}`}
                  onClick={() => {
                    setSelected("Eng");

                    setOpen(false);
                  }}
                >
                  Eng
                </div>

                <div
                  className={`dropdown-item ${selected === "Hin" ? "active" : ""}`}
                  onClick={() => {
                    setSelected("Hin");

                    setOpen(false);
                  }}
                >
                  Hin
                </div>
              </div>
            </div>

            <button type="button" className="dashboard-btn">
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="nav-items">
        <ul type="none" className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li className="nav-item about-dropdown">
            <Link to="/about" className="about-link">
              About
              <span className="aboutarrow">▼</span>
            </Link>

            <ul className="about-dropdown-menu">
              <li>
                <HashLink smooth to="/about#vision">
                  Vision
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/about#mission">
                  Mission
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/about#board-of-advisors">
                  Board of Advisors
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/about#board-of-advisors">
                  Board of Directors
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/about#board-of-advisors">
                  Team
                </HashLink>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/solutions">Our Services</Link>
          </li>

          <li>
            <a
              href="https://www.indiaesgsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
          </li>

          <li>
            <Link to="/knowledgehub">Knowledge Hub</Link>
          </li>

          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
