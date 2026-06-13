import './Navbar.css'
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false)

  return(
    <>
      <nav>
        <div className='nav-logo'>
          <a href="/">أفق</a>
        </div>
        <div 
          className='nav-toggle' 
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <RiMenu2Line size={35} />
        </div>
        <div className='nav-links'>
          <NavLink 
            to='/'
            className={( { isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            الرئيسية
          </NavLink>
          <NavLink 
            to='/jobs'
            className={( { isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            الوظائف
          </NavLink>
          <NavLink 
            to='/companies'
            className={( { isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            الشركات
          </NavLink>
          <NavLink 
            to='/dashboard'
            className={( { isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            لوحة البيانات
          </NavLink>
        </div>

        {isOpen && (

          <div className="mobile-menu">
            <IoMdClose 
              className="close-menu" 
              size={35} 
              onClick={() => setIsOpen(false)}
            />
            <div className="mobile-menu-links">
              <a href="#">الرئيسية</a>
              <a href="#">الوظائف</a>
              <a href="#">الشركات</a>
              <a href="#">لوحة البيانات</a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar