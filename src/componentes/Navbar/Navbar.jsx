import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => { 
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid"> 
        {/* {Brand} */}
        <a className="navbar-brand" >ViveroArteVerde</a>
        
    {/* {Links} */}
            <ul className="navbar-nav" >
            <li className="nav-item"><a className="nav-link active" href="">Plantas</a></li>
            <li className="nav-item"><a className="nav-link active" href="">Macetas</a></li>
            <li className="nav-item"><a className="nav-link active" href="">Árboles</a></li>
            <li className="nav-item"><a className="nav-link active" href="">Suculentas</a></li>
            <li className="nav-item"><a className="nav-link active" href="">Decoración</a></li>
            </ul>


        {/* {CartWidget } */}
        <CartWidget />
        </div>
        </nav>
    );
}; 

export default NavBar;