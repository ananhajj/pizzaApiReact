

export default function Navbar(){

    return(
        <>
     <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand  " href="#"><h1>Pizaa API</h1></a>
    <div className="navbarList" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
        <li className="nav-item dropdown  ">
          <a className="nav-link   active" href="index.html" role="button" aria-expanded="false">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
         <a className="nav-link    " href="index.html" role="button" aria-expanded="false">
            Pages
          </a>
       
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link    " href="index.html" role="button" aria-expanded="false">
            Restaurants
          </a>
       
        </li>
      
      
        <li className="nav-item">
          <a className="nav-link " href="#" role="button">Contact Us</a>
        </li>
      </ul>
    </div>
  
         

   <div className="auth d-flex">
  <button className="btn  "> <i className="fa-regular fa-user " /> Register</button>
  <button className="btn "><i className="fa-solid fa-lock" />Login</button>
</div>

    </div>
</nav>

        
        
        </>
    )
}