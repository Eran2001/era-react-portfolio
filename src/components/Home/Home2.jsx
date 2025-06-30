import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              className="home-res-new"
              style={{ fontSize: "2.6em", marginLeft: "-380px" }}
            >
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              My journey into the tech world began with a deep interest in{" "}
              <b className="purple">Python</b>, which helped me build a strong
              foundation in programming logic. Over time, I expanded my skills
              into
              <i>
                {" "}
                <b className="purple">JavaScript</b>{" "}
              </i>{" "}
              and explored both the frontend and backend sides of development.
              <br />
              <br />
              I'm currently focusing on becoming a{" "}
              <b className="purple">Full-Stack JavaScript Developer</b>, with
              hands-on experience using tools like
              <i>
                <b className="purple">
                  {" "}
                  React.js, Tailwind CSS, Node.js, Express.js
                </b>
              </i>
              , and working with databases such as{" "}
              <b className="purple">PostgreSQL ,</b>{" "}
              <b className="purple">MySQL</b> and{" "}
              <b className="purple">MongoDB</b>.
              <br />
              <br />I also have working knowledge of{" "}
              <i>
                <b className="purple">PHP</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Laravel</b>
              </i>
              , and I’m learning <b className="purple">GoLang</b> and{" "}
              <b className="purple">Java</b> for backend development.
              <br />
              <br />
              My passion lies in creating dynamic and user-friendly{" "}
              <i>
                <b className="purple">Web Pages and Web Applications</b>
              </i>
              . I'm also fascinated by emerging technologies like{" "}
              <i>
                <b className="purple">Artificial Intelligence</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Blockchain</b>
              </i>
              , and I aim to explore these fields further.
              <br />
              <br />
              I'm always eager to take on new challenges and apply my knowledge
              in practical projects. Whether it's designing clean UIs or
              building scalable APIs, I strive to improve every day as a
              developer and problem-solver.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eran2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eran-hasarali-11073021b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/m__eran__h/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
