import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import 'tachyons';
import { config } from '../config';

/* Add a removable notification about something regaring the page */
/* Add a notification about cookie usage */

// Declare a new date (as elapsed in ms since 01.01.70)
const today = new Date();
// Return the date, day and year
today.getDate();        // Returns 0-11     jan-des
today.getDay();         // Returns 0-6      sun-sat
today.getFullYear();    
today.getYear();        
// Return the hour, min, sec
today.getHours();       
today.getMinutes();
today.getSeconds();     // Returns 0-59
console.log(today.getDay(), today.getDate(), today.getFullYear());
console.log(today.getHours(), today.getMinutes(), today.getSeconds());


const buttonTheme = document.getElementsByClassName("theme-button");
const container = document.getElementsByClassName("div.container");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
} 
else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
}

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}

const darkTheme = [
    'background: black'
    , 'color: white'
].join(";");

const lightTheme = [
    'background: white'
    , 'color: black'
].join(";");

class App extends Component {
    constructor() {
        super()
        this.state = {
            /*
            Add this to the top of the file
            import 'let robots = [ {}, x n ]'
            
            declare the content of the js file robots as an empty array 
            robot: [], */
            theme: config.theme, 
            id: config.id
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        /* 
        With robots: [], set the content to point to the 
        robots array here: 
        this.setState({robot: robots}); */
    }
    
    switchTheme = () => {
        if (this.state.theme === 'light-theme') {
            return 'dark-theme';
        } else {
            return 'light-theme';
        } 
    }

    updateTheme = () => {
        if (this.state.theme === 'light-theme') {
            console.log("light");
            buttonTheme.style = lightTheme;
            container.style = "white";
            document.body.classList.toggle("light-theme");
            document.body.classList.remove("dark-theme");
        }
        else if (this.state.theme === 'dark-theme') {
            console.log("dark");
            buttonTheme.style = darkTheme;
            container.style = "black";
            //document.body.classList.toggle("dark-theme");
            document.body.classList.add("dark-theme");
        }
    };
    
    onThemeChange = (event) => {
        this.setState({ theme: this.switchTheme() });
        /* SearchBox example: this.setState({ event.target.value }) */
    };

    checkIfBrowserSupportsThemes = () => {
        if (window.matchMedia("(prefers-color-scheme)").media !== 'not all') {
            // console.log("🎉 Dark mode is supported");
        }
    };

    render() {
        // Destructoring variables
        const { theme, id } = this.state;
        console.log(theme, id);
        this.updateTheme();
        this.checkIfBrowserSupportsThemes();

        return (
            /* Shorthand notation of <React.Fragment> tags */
            <>
                <div className="container">
                    <aside>
                        <div className="shape">
                            <fieldset><legend>One</legend></fieldset>
                            <fieldset><legend>Two</legend></fieldset>
                            <fieldset><legend>Three</legend></fieldset>
                            <fieldset><legend>Four</legend></fieldset>
                            <fieldset><legend>Five</legend></fieldset>
                            <fieldset><legend>Six</legend></fieldset>
                            <fieldset><legend>Seven</legend></fieldset>
                            <fieldset><legend>Eight</legend></fieldset>
                            <fieldset><legend>Nine</legend></fieldset>
                        </div>
                    </aside>
                    <header>
                        <Header config={config} />

                        <label className="switch">
                            <input type="checkbox" onClick={ this.onThemeChange }/>
                            <span className="slider round" />
                        </label>
                    </header>
                    <nav>
                        <Sidebar />
                    </nav>
                    <main>
                        <Main />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </>
        );
    }
}

export default App;
