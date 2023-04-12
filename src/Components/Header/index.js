import React from "react"

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">"Authentic Jamaican Cuisine and More..."</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end opacity-75" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Big Bear Bar & Grilled</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">SOCIAL MEDIA</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#menu" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    MENU
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#jamaican-food">Jamaican Food</a></li>
                    <li><a className="dropdown-item" href="#canadian-food">Canadian Food</a></li>
                    <li><a className="dropdown-item" href="#italian-foodr">Italian Food</a></li>
                    <li><a className="dropdown-item" href="#latin-food">Latin Food</a></li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#something-else">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header