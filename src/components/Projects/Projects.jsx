import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath="/fine-app.png"
              isBlog={false}
              title="Fine Payment App"
              description="A user-friendly and secure fine payment system designed to streamline the process of issuing and paying fines. The application allows users to manage their fines efficiently and enables officers to issue fines digitally, reducing paperwork and enhancing operational efficiency."
              ghLink="https://github.com/Eran2001/fine-payment"
              demoLink="https://fine-pay.vercel.app/"
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
              imgPath="/tin-dog.png"
              isBlog={false}
              title="Tin Dog App"
              description="TinDog – Dog Friendship and Matchmaking App. TinDOg is a unique and engaging app designed to help dogs find companions, whether for friendship or love. The app creates a fun and social platform where dog owners can connect, arrange playdates, or even find the perfect match for their furry friends. Find the love of your dog's life or your money back."
              ghLink="https://github.com/Eran2001/tin-dog-project"
              demoLink="https://eran2001.github.io/tin-dog-project/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/blog.png"
              isBlog={false}
              title="Blog App"
              description="A blog platform designed for programmers to share knowledge, tutorials, and insights about various programming languages and technologies. and A hub for developers to learn, share, and grow. CodeSphere focuses on programming languages, tools, and frameworks, providing a space for both beginners and advanced coders."
              ghLink="https://github.com/Eran2001/blog-app"
              demoLink="https://blog-app-nine-red.vercel.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/blog-stack.png"
              isBlog={false}
              title="Blogger"
              description="A blog platform for diverse content creators to share insights, stories, and knowledge about technology, lifestyle, travel, and personal development. LifePixels is a versatile blogging platform that caters to content creators from all walks of life. From tech enthusiasts to travel junkies, it provides a space for sharing insights and inspirations."
              ghLink="https://github.com/Eran2001/blogger"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/age-app.png"
              isBlog={false}
              title="Age Calculator"
              description="The Age Calculator App is a highly intuitive and user-friendly React-based application designed to help users calculate their exact age down to years, months, days, hours, minutes, and even seconds. Whether you want to know how long you’ve been on this planet or how much time has passed since a specific event, this app provides detailed insights and visualizations for a deeper understanding of time."
              ghLink="https://github.com/Eran2001/age-calculator-react"
              demoLink="https://eran2001.github.io/age-calculator-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/sample.png"
              isBlog={false}
              title="Sample Project"
              description="This is a sample blog project that I used to check how can we use hooks like useNavigate to navigate one to another route. and in here I checked some tailwind css compo styles for each section. and want to add much more things like using map to fetch all blog posts, and in the future I wanna add database to store post and share them with every users in this web app."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/cap-1.png"
              isBlog={false}
              title="Capstone Project 1"
              description="In this Capstone Project I used HTML for building this page, and I want to ignore CSS in this tutorial. all I'm try to add only html and create a simple portfolio to show my skills, exp and etc, I think this is good one to have because it is so simple and much readable."
              ghLink="https://github.com/Eran2001/capstone-pro-1"
              demoLink="https://eran2001.github.io/capstone-pro-1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/cap-2.png"
              isBlog={false}
              title="Capstone Project 2"
              description="This is another capstone project that I created using html, and in this one I want to add some css for styling, and I use some of images for look this little bit beautiful, and use some positioning to show some of por langs that I used to build web apps. and I think this is good one to have in my projects because this is simple and with simple css it looks nice"
              ghLink="https://github.com/Eran2001/capstone-project-2"
              demoLink="https://eran2001.github.io/capstone-project-2/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/arc-app.png"
              isBlog={false}
              title="Architecture Website"
              description="I create this for showcase of architectural website, but this is still ongoing project, I don't have enough info and resources to end this one, but I think this is going to be a good one, instead of just HTML and CSS I used React in this web app to give smooth routing for users. in the end I think this is gonna be so good and wonderful web app with server side for handle apis and db to store users data."
              ghLink="https://github.com/Eran2001/architecture-react"
              demoLink="https://architecture-react.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
