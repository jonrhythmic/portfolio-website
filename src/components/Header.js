import React from 'react';
import './Header.css';

// const searchField = document.getElementsByClassName("searchbar");

let screen_width = window.matchMedia("(max-width: 900px)");
let current_size = window.matchMedia("width");

const showWidth = () => {
    console.log(current_size);
};

const fitSearchbar = (screen_width) => {
    if (screen_width.matches) {
        // Shit impl. of display screen-size on resize, only shows once
        showWidth();

    } else {
        console.log("screen is bigger than 900");

    }
};

fitSearchbar(screen_width);

const Header = ({ config }) => {
    return (
        <React.Fragment>
            <section className="navigation">
                <img 
                    src="https://cdn4.iconfinder.com/data/icons/mono-color-web-mobile/250/Home-512.png"
                    alt="Home"
                    className="home-icon" />
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#portfolio">Portfolio</a>
            </section>

            <section className="search-bar">
                <label for="site-search" />
                <input type="search" id="site-search" name="site-search" required/>  
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhTTRaqh7MW8Q6VsVKbKJVmhuHyEFyrHgGw&usqp=CAU"
                    alt="search the site"
                    className="magnifying-glass" />              
            </section>
            
            <section className="--login-menu">
                <details className="--login-button">
                    <summary>Login</summary>
                    <u>Hamburger Menu</u>
                    <br/>
                    <li>Action 1</li>
                    <li>Action 2</li>
                </details>
            </section>

            <p className="tc bg-light-green md-5dib br3 grow shadow-5">Id: {config.id} </p>
            
        </React.Fragment>
    );
};

screen_width.addListener(fitSearchbar);

export default Header;