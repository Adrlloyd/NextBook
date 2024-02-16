import { Link } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { faHome, faBook, faUser } from "@fortawesome/free-solid-svg-icons"
export default function Navbar(){
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Books",
      path: "/books",
      icon: faBook
    },
    {
      name: "Authors",
      path: "/authors",
      icon: faUser
    }
  ]

  function closeSidebar(){
    setShowSidebar(false)
  }

  return(
   <>
     <div className="navbar container">
      <Link to="/" className="logo">NextBook</Link>
      <div className="nav-links">
        {links.map(link => (
          <Link to={link.path} key={link.name}>{link.name}</Link>
        ))}
       </div>
      <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    { showSidebar && <Sidebar close={closeSidebar} links={links} />}
   </>
  )
};