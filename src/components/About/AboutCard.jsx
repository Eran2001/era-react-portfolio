
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eran Hasareli </span>
            from <span className="purple"> Horana, Sri Lanka.</span>
            <br />
            I am currently unemployed and work with freelancing web projects.
            <br />
            I have completed the &apos;Python for Beginners&apos; and &apos;Python Programming&apos; courses conducted by UOM.
            <br />
            I also have a Diploma in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;The Magic You Are Looking For Is In The Work You&apos;re Avoiding!&quot;{" "}
          </p>
          <footer className="blockquote-footer">Eran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
