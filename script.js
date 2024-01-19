function Container() {
  return (
    <div className="flexbox">
      <div className="container">
        <img src="./my-pic.jpeg" className="box-image"></img>
        <div className="box-des">
          <h3>Devarshee Gaunekar</h3>
          <h4>Frontend Developer</h4>
          <h6>Goa, India</h6>
        </div>
        <div className="box-buttons">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <button>
              <img src="./email-icon.png"></img>
              Email
            </button>
          </a>
          <a href="https://www.linkedin.com/in/devarshee-gaunekar-a06441257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiQPIUDF7RkK88tp3MKwsWw%3D%3D">
            <button id="linked-in">
              <img src="./linkedin-icon.png"></img>
              LinkedIn
            </button>
          </a>
        </div>
        <div className="box-content">
          <div className="box-about">
            <h5>About</h5>
            <p>
              My name is Devarshee Gaunekar and i am budding Fullstack
              Developer. I am currently in 2nd year in IT branch. I am currently
              learning Frontend Dev
            </p>
          </div>
          <div className="box-interests">
            <h5>Interest</h5>
            <p>Coding</p>
            <p>Cricket</p>
            <p>Traveling</p>
            <p>Technology</p>
          </div>
        </div>
        <footer>
          <div className="footer-logo">
            <a href="https://instagram.com/devarsheegaunekar">
              <img src="instagram-logo.png"></img>
            </a>
            <a href="https://twitter.com/devarsheecodess">
              <img src="twitter-logo.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/devarshee-gaunekar-a06441257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiQPIUDF7RkK88tp3MKwsWw%3D%3D">
              <img src="linkedin-icon.png"></img>
            </a>
            <a href="https://github.com/devarsheecodess">
              <img src="github-logo.png"></img>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function MainPage() {
  return (
    <div>
      <Container />
    </div>
  );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));