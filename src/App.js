import Nav from './Components/Nav/Nav';
import './App.css';
import Divider from './Components/SectionDivider/Divider'


function App() {
  return (
    <div>
      <Nav/>
      <div className="pimg1">
        <div className="ptext">
          <span className="welcome">
            Hi, I'm Kyle Rose.
          </span><br/>
          Full-Stack Engineer
        </div>
      </div>
      <section className="section section-dark">
          <h2>Experience</h2>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="aboutMe">
            Your blurb about your experience
          </span>
        </div>
      </div>
      <section className="section section-dark">
          <h2>Projects</h2>
      </section>
      <div className="pimg3">
        <div className="ptext">
          <div className="projects">
            Input project links here.
          </div>
        </div>
      </div>
      <section className="section section-dark">
          <h2>My Story...</h2>
          <p>Put a blurb about your life</p>
      </section>
    </div>
  );
}

export default App;
