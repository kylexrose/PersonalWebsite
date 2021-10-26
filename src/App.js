import Nav from './Components/Nav/Nav';
import './App.css';
import bb_preview from './Components/pictures/bb_preview.png'
import weather_preview from './Components/pictures/weather_preview.png'

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
      </section>
      <div id="experience" className="pimg2">
        <div className="summary-text">
          <div className="experience text-background">
            <span className="title">Full Stack (MERN) Web Developer</span>
            <p>My skillset includes <b>Full Stack Engineering</b> using JavaScript. I have built fully-deployable websites, designing the user interface using <b>ReactJS</b>. I have experience using <b>Bootstrap</b> as a framework, but I am also very good with just vanilla CSS. Although I can more than handle myself in UX/UI, my background in logic and math has built a passion for developing APIs and data engineering. <br/><br/>
            Regarding the backend, my experience is in working with <b>MongoDB</b>, <b>Express</b>, and <b>NodeJS</b>. Although I have a strong expertise in these areas, I have worked with Python, MySQL, and php in a small capacity. I am a highly motivated programmer, quick learner, and I love to see the impact I have on every project that I work on.</p>
          </div>
        </div>
      </div>
      <section className="section section-dark">
      </section>
      <div className="pimg3">
        <div className="">
          <div className="projects">
            <a className="project-window" href="https://brutalbudget.kylexrose.com/signup" target="_blank">
              <img className="project-preview bb-preview" src={bb_preview} alt="budgeting app preview"/>
              <div className="project-text">
                <p className="project-title">Brutal Budget</p>
                <p className="project-summary">A fully deployed budgeting application for desktop browser using MERN stack. (Mobile interface coming soon)</p>
                {/* <div className="gitlinks">
                  <a href="https://github.com/kylexrose/brutal-budget-frontend" target="_blank">
                    Frontend
                    <img className="git" alt="github link" src={gitImage}/>
                  </a>
                  <a href="https://github.com/kylexrose/budgetingApp-backend" target="_blank">
                    Backend
                    <img className="git" alt="github link" src={gitImage}/>
                  </a>
                </div> */}
              </div>
            </a>
            <a className="project-window" href="#" target="_blank">
              <img className="project-preview" src={weather_preview} alt="weather app preview"/>
              <div className="project-text">
                <p className="project-title">Weather.com Facsimile</p>
                <p className="project-summary">A copy of a weather.com page using only JavaScript, html, some Bootstrap, and CSS.</p><br/>
                <p>Preview Coming Soon</p>
                {/* <img className="git" alt="github link" src={gitImage}/> */}
              </div>
            </a>
          </div>
        </div>
      </div>
      <section className="section section-dark">
          <h2>My Story...</h2>
          <p className="story">I have a nag for logic. Following some time in the US Army, I graduated with a BA from university with a desire to utilize my studies immediately. I worked at an international school in China teaching AP Psychology and Statistics. After the worldwide pandemic, I decided to revisit an old love of mine in programming. I ended up loving it. Now I use my interest in creating and problem-solving to hone my craft as I pursue full-time employment at a company I know will be glad they hired me. </p>
      </section>
      <div className="pimg4">
        <div className="ptext">
          <div className="projects">

          </div>
        </div>
      </div>
      <section className="section section-dark">
          <h2>Think I'd be a good fit?</h2>
          <p className="contactInfo">
            Kyle Rose<br/>
            Email: kylexrose@gmail.com<br/>
            Phone: (+1) 913 210 9431
          </p>
      </section>
    </div>
  );
}

export default App;
