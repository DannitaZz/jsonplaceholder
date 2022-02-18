function NavBar({dispatch, filter}) {
  const handleClick = (e) => {
      const type = e.target.innerText;
      dispatch({type: 'setType', value: type})
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex container-fluid">
        <a className="navbar-brand p-2 flex-grow-1"><i className="bi bi-filetype-json"></i> JSON Placeholder</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Buscar por
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={handleClick}><a className={`dropdown-item ${filter === "id" ? "active" : ""}`}>id</a></li>
                  <li onClick={handleClick}><a className={`dropdown-item ${filter === "userId" ? "active" : ""}`}>userId</a></li>
                  <li onClick={handleClick}><a className={`dropdown-item ${filter === "title" ? "active" : ""}`}>title</a></li>
                </ul>
              </li>
            </ul>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => dispatch({type: 'search', value: e.target.value })}></input>
        </div>
      </div>
    </nav>
  )
}

export default NavBar