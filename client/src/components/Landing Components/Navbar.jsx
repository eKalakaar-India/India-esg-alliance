import React, {useState, useEffect, useRef} from 'react'
import logo from '../../assets/logo.jpeg'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

   const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("English");
    const dropdownRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleSelect = (lang) => {
      setSelected(lang);
      setOpen(false);
    };


  return (
    <nav className='navbar'>

        <div className='nav-upper-section'>
          <div style={{display:'flex', alignItems:"center", justifyContent:'center',gap:"10px", cursor:"pointer"}}>
            <img src={logo} onClick={()=> navigate('/')} width={90} height={70} className='nav-logo' /> 
            {/* <p> INDIA ESG ALLIANCE </p> */}
          </div>

            <div className="nav-btns">
              <div className='searchbar'>
                <FaSearch style={{color:'#cccaca'}} />
              </div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"30%"}}>
               <div className="language-dropdown" ref={dropdownRef}>
                  <button
                    className="language-btn"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="left">
                      <span className="icon">🌐</span>
                      <span>{selected}</span>
                    </div>

                    <span className={`arrow ${open ? "rotate" : ""}`}>
                      ▼
                    </span>
                  </button>

                  <div className={`dropdown-menu ${open ? "show" : ""}`}>
                    
                      <div
                        className="dropdown-item"
                        // onClick={() => handleSelect(lang)}
                      >
                        English
                      </div>
                      <div
                        className="dropdown-item"
                        // onClick={() => handleSelect(lang)}
                      >
                        Hindi
                      </div>
                  </div>
                </div>
                <button className='dashboard-btn'>
                  Dashboard
                </button>
              </div>
            </div>        
        </div>

        <div className="nav-items">
          <ul type='none' className='nav-list'>
              <li><a  href ="/about"  >About</a></li>
              <li><a  href ="/solutions"  >Solution</a></li>
              <li><a  href ="/knowledgehub"  >Knowledege hub</a></li>
              <li><a  href ="https://www.indiaesgsummit.com/" target="_blank"  >Events</a></li>
              {/* <li><a  href ="#About"  >Resources</a></li> */}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar