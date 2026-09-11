import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { searchableContent } from "../../data/searchIndex";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");
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
            width={150}
            height={60}
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
                  className={`dropdown-item ${selected === "English" ? "active" : ""}`}
                  onClick={() => {
                    setSelected("English");
                    setOpen(false);
                  }}
                >
                  English
                </div>

                <div
                  className={`dropdown-item ${selected === "Hindi" ? "active" : ""}`}
                  onClick={() => {
                    setSelected("Hindi");
                    setOpen(false);
                  }}
                >
                  Hindi
                </div>
              </div>
            </div>

            <button type="button" className="dashboard-btn">
              Sign-in
            </button>
          </div>
        </div>
      </div>

      <div className="nav-items">
        <ul type="none" className="nav-list">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          {/* About Dropdown */}
          <li className="nav-item about-dropdown">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `about-link ${isActive ? "active" : ""}`
              }
            >
              About
              <span className="aboutarrow">▼</span>
            </NavLink>

            <ul className="about-dropdown-menu">
              <li>
                <HashLink
                  smooth
                  to="/about#vision"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Vision
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/about#mission"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Mission
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/about#board-of-directors"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Team
                </HashLink>
              </li>

            </ul>
          </li>

          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Business Opportunties
            </NavLink>
          </li>

          {/* Our Services Dropdown */}
          <li className="nav-item about-dropdown">
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `about-link ${isActive ? "active" : ""}`
              }
            >
              Our Services
              <span className="aboutarrow">▼</span>
            </NavLink>

            <ul className="about-dropdown-menu">
              <li>
                <HashLink
                  smooth
                  to="/solutions#board-cxo"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Leadership Training
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#foundational"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  ESG Foundational Training
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#roundtables"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Roundtables
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#reporting-solutions"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Reporting solutions
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#reverse-buyer-seller"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Buyers-Sellers Meet
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#business-innovation"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  MDP for Founders
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#esg-summit-awards"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  ESG Summit
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/solutions#women-founders-mdp"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                 Management Development Program for MSME's
                </HashLink>
              </li>
            </ul>
          </li>

          {/* Events Dropdown */}
          <li className="nav-item about-dropdown">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `about-link ${isActive ? "active" : ""}`
              }
            >
              Events
              <span className="aboutarrow">▼</span>
            </NavLink>

            <ul className="about-dropdown-menu">
              <li>
                <HashLink
                  smooth
                  to="/events#training-programs"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Training programs
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/events#national-summit"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  India ESG (National) Summit
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/events#state-summits"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  India ESG (State) Summit
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/events#awards"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Awards and Recognition
                </HashLink>
              </li>
            </ul>
          </li>

          <li className="nav-item knowledge-dropdown">
            <NavLink to="/knowledgehub" className={({ isActive }) => `knowledge-link ${isActive ? "active" : ""}`}>Knowledge Hub <span className="knowledgearrow">▼</span></NavLink>
            <ul className="knowledge-dropdown-menu">
              <li>
                <HashLink smooth to="/knowledgehub#handbook" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                  IEA Hand Book
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/knowledgehub#research" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                 IEA Research Papers
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/knowledgehub#policy" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                  Govt. Policies
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/knowledgehub#blogs" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                  IEA Blogs
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/knowledgehub#newsletter" scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                  IEA NewsLetter
                </HashLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
