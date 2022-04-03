import logo from '../assets/logo.svg';
import { useState } from 'react';
import illustrationWorking from '../assets/illustration-working.svg';
import './Header.css';



export default function header() {
    const [isActive, setActive] = useState(false);

    function toggleNav() {
        if (!isActive) {
            setActive(true);
        } else {
            setActive(false);
        }
    }


    return(
        <header className='Header'>
            <nav className='flex'>
                <div className="logo">
                    <a href=""><img src={logo} alt=""/></a>
                </div>
            
                <ul className={isActive ? "active nav-links flex" : "nav-links flex"}>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>

                    <li><a href="#">Login</a></li>
                    <li><a href="#" className='btn'>Sign Up</a></li>
                </ul>
                <button className="btn-nav" onClick={toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>
            <section className="header-content">
                <div>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div>
                    <img src={illustrationWorking} alt="illustration working"/>
                </div>
            </section>
        </header>
    )
}