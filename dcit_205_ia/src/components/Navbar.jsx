import './Navbar.css';
import brand from '../images/brand.png'
import { useState } from 'react';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    console.log(click)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img src={brand} alt="logo" />
                </a>
                <button className='hamburger' onClick={ handleClick }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>

                </button>
                <div className="nav-menu">
                    <ul className={ click ? "nav-list active" : "nav-list"}>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Catalog</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Events</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default Navbar