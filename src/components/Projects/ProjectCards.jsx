import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Define prop types
ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired, // Path to the image
  title: PropTypes.string.isRequired, // Title of the project
  description: PropTypes.string.isRequired, // Description of the project
  ghLink: PropTypes.string.isRequired, // GitHub link
  isBlog: PropTypes.bool, // Whether it's a blog or not (default is false)
  demoLink: PropTypes.string, // Demo link (optional)
};

// Define default props for optional props
ProjectCards.defaultProps = {
  isBlog: false,
  demoLink: null,
};

export default ProjectCards;
