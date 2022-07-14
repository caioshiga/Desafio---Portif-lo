import { useState } from 'react'
import './style.css'
import '../../global-style/style.css'
import mapPin from "../assets/map-pin.svg"
import briefcase from '../assets/briefcase.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import globe from '../assets/globe.svg'
import mail from '../assets/mail.svg'
import folder from '../assets/folder.svg'
import stars from '../assets/star.svg'
import gitbranch from '../assets/git-branch.svg'

export function Home() {

  return (

    <div className='main'>

      <body>

        <div className="leftInformation">
          <div className="perfil">
            <img src="https://picsum.photos/100/100" alt="" />
            <h1>Name</h1>
            <p>Descrição</p>
          </div>

          {/* CONTACT */}
          <div className="contact">

            <div className="local">
              <img src={mapPin} alt="" />
              Local
            </div>

            <div className="localWork">
              <img src={briefcase} alt="" />
              Local Work
            </div>

            <div className="github">
              <img src={github} alt="" />
              GitHub
            </div>

            <div className="linkedIn">
              <img src={linkedin} alt="" />
              LinkedIn
            </div>

            <div className="twitter">
              <img src={twitter} alt="" />
              Twitter
            </div>

            <div className="website">
              <img src={globe} alt="" />
              Website
            </div>

            <div className="email">
              <img src={mail} alt="" />
              E-mail
            </div>

          </div>  {/* <-- FINAL */}

          <div className="techs">
            <h1>Tecnologias</h1>
            <div className="js">JavaScript</div>
            <div className="reactjs">REACTJS</div>
            <div className="node">nodeJS</div>
            <div className="git">GIT</div>
            <div className="github">GitHub</div>
            <div className="html">HTML</div>
            <div className="css">CSS</div>
            <div className="reactnative">REACT NATIVE</div>
            <div className="elixir">ELIXIR</div>
          </div> {/* <-- FINAL */}

          {/* EXPERIENCE */}
          <div className="experience">

            <h1>Experiências</h1>

            <ul>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - Atualmente</p>
                <p>Community Experience</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - Atualmente</p>
                <p>Community Experience</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - Atualmente</p>
                <p>Community Experience</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - Atualmente</p>
                <p>Community Experience</p>
              </li>

            </ul>

          </div> {/* <-- FINAL */}

          {/* STUDY */}
          <div className="study">

            <h1>Educação</h1>

            <ul>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - 2019</p>
                <p>GoStack</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - 2020</p>
                <p>Discover</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2020 - 2021</p>
                <p>Ignite</p>
              </li>

              <li>
                <h1>Rocketseat</h1>
                <p>2019 - 20121</p>
                <p>Ignite Pro</p>
              </li>

            </ul>

          </div> {/* <-- FINAL */}
        </div> {/* <-- FINAL leftInformation */}

        <div className='mainContent'>

          <div className="linkProject">
            <h1>My Project</h1>
            <button>Veja todos</button>
          </div>
          {/* CARD PROJECT */}
          <div className="cards">

            <button className="cardProjects">

              <h1>
                <img src={folder} alt="" />
                title
              </h1>
              <p>description</p>

              <div className="buttons">
                <button><img src={stars} alt="" />100</button>
                <button><img src={gitbranch} alt="" />100</button>
              </div>

            </button>

            
            <button className="cardProjects">

              <h1>
                <img src={folder} alt="" />
                title
              </h1>
              <p>description</p>

              <div className="buttons">
                <button><img src={stars} alt="" />100</button>
                <button><img src={gitbranch} alt="" />100</button>
              </div>

            </button>

          </div> {/* <-- Final cardProject*/}

          <div className="recent">
            <h1>Recent Posts</h1>
          </div>

          <button className="post">

            <img src="https://picsum.photos/100/100" alt="" />

            <div className="postContent">

              <h1>Titulo do post</h1>

              <div className="postTime">
                hora do post
              </div>
              
              <p>Descrição do post</p>

              <div className="hashtags">

                <p>#react-native</p>
                <p>#genimotion</p>

              </div>

            </div> {/* <-- Final postContent */}

            
            
          </button>

        </div> {/* <-- FINAL mainContent*/}

      </body>

    </div>

  )
}
