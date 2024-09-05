import React from "react";
const Navbar=()=>{
    return(
        <>
          <nav className="navbar nav bg-dark text-white navbar-expand-md">
  {/* add navigation toggler button */}
  <button
    type="button"
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#togg"
  >
    <span className="bi bi-grid-3x3-gap-fill text-white fs-1" />
  </button>
  <div className="collapse navbar-collapse" id="togg">
    <ul className="float-end">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
          Our services
        </a>
        <ul className="dropdown-menu bg-dark">
          <li>
            <a href="#">Punjabi Food</a>
          </li>
          <li>
            <a href="#">Chinease Food</a>
          </li>
          <li>
            <a href="#">Punjabi Food</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
      <li>
        <a href="feedback.html">Feedback</a>
      </li>
      <li>
        <a href="gallery.html">gallery</a>
      </li>
      <li>
        <a href="#" data-bs-toggle="modal" data-bs-target="#lg">
          Account
        </a>
      </li>
    </ul>
  </div>
</nav>
 
        </>
    )
}

export default Navbar