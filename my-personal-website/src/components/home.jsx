import React from "react";

function Home() {
  return (
    <div className="mainComponent">
      <div className="image">
        <div>
          <img src="goat.avif" alt="Goat AKA ME" />
        </div>
      </div>
      <p>
        Hello! My name is Azmi and I am a software engineering student at
        Concordia University. Currently, I am in my second year of studies and I
        am searching for an internship. Welcome to my personal website! you can
        contact me via the following platforms.
        <div className="buttonsContainer">
          <a href="https://github.com/Azmi-21" target="_blank">
            <button className="button" id="gitHub"></button>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
          >
            <button className="button" id="Linkedin"></button>
          </a>
          <a href="mailto:azmiabidi2003@gmail.com">
            <button className="button" id="mail"></button>
          </a>
        </div>
      </p>
    </div>
  );
}

export default Home;
