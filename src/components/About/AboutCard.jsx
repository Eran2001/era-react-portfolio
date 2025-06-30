import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eran Hasarali</span> from
            <span className="purple"> Horana, Sri Lanka</span>.
            <br />
            I'm a passionate and self-driven full-stack developer in training,
            currently focusing on building real-world projects while freelancing
            on various web development gigs.
            <br />
            <br />I hold a <b>Diploma in Information Technology</b> and have
            successfully completed courses such as
            <i>
              {" "}
              <b className="purple">"Python for Beginners"</b>{" "}
            </i>{" "}
            and
            <i>
              {" "}
              <b className="purple">"Python Programming"</b>{" "}
            </i>{" "}
            conducted by the University of Moratuwa (UOM).
            <br />
            I’m also diving deep into the <b className="purple">
              MERN stack
            </b>{" "}
            and <b className="purple">GoLang</b> to strengthen both frontend and
            backend skills.
            <br />
            <br />
            When I’m not coding, you’ll probably find me enjoying a few of my
            favorite hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Competitive and Casual Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Tech Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places and Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Also I'd like to sleep long term 😂
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} className="mt-4">
            &quot;The magic you are looking for is in the work you're
            avoiding!&quot;
          </p>
          <footer className="blockquote-footer">Eran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
