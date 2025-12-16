import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drive_lk from "../../Assets/Drive Lanka.png";
import hotel_form from "../../Assets/hotel_form.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drive_lk}
              isBlog={false}
              title="Drive Lanka - Vehicle Rental"
              description="The platform features a responsive design, dynamic navigation with hover effects, and a streamlined booking process, ensuring a hassle-free experience for tourists and locals alike. Showcasing a diverse fleet, transparent pricing, and 24/7 customer support, Drive Lanka is the go-to choice for reliable and affordable transportation."
              ghLink="https://github.com/Eran2001/tourism-sri-lanka"
              demoLink="https://drive-lanka.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/dumi-web.png"
              isBlog={false}
              title="Graphic Designer Portfolio"
              description="A modern and dynamic portfolio website built to highlight the talent and versatility of a graphic designer. The project focuses on creating an engaging online presence that attracts potential clients and collaborators by showcasing a curated selection of design works and professional achievements."
              ghLink="https://github.com/Eran2001/new-neo-port"
              demoLink="https://new-neo-port.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/chan-web.png"
              isBlog={false}
              title="Graphic Designer Portfolio"
              description="This project involved designing and developing a responsive and visually captivating portfolio website for a graphic designer. The website showcases the designer's skills, creativity, and expertise in branding, interaction design, and social media banners. The goal was to attracts potential clients and collaborators."
              ghLink="https://github.com/Eran2001/rumesh-portfolio"
              demoLink="https://rumesh-portfolio-gilt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel_form}
              isBlog={false}
              title="Hotel Registration Form"
              description="This is simple user registration form for hotels that can easily get user info in to their databases. So don't need to fill user registration forms manually and also this have solid form validation that only add respective infos."
              ghLink="https://github.com/Eran2001/new-user-form"
              demoLink="https://new-user-form-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/inc-exp.png"
              isBlog={false}
              title="Income and Expenses Tracker"
              description="A simple yet efficient app designed to help users track their income and expenses effortlessly. This app enables users to manage their finances with ease and gain better control over their budget. This lightweight app provides a straightforward solution for personal finance management, making it ideal for individuals who want to keep their finances organized without complexity."
              ghLink="https://github.com/Eran2001/income-expenses-react"
              demoLink="https://income-expenses-react.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
