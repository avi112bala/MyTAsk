import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    function handlenavigate() {
      localStorage.removeItem("user-info");
      navigate("/signin");
    }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="nav-link active" aria-current="page">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/data" class="nav-link active" aria-current="page">
                  Data
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signin" class="nav-link active" aria-current="page">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/signin"
                  class="nav-link active"
                  aria-current="page"
                  onClick={handlenavigate}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar
