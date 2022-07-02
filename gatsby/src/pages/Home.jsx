import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { SubText, VFlex, MHeading } from "../helpers/styles";
import { Hidden } from '@mui/material';
import RubberBand from "../components/RubberBand";
import LineContainer from "../components/LineContainer";
import { Grid, Paper } from "@mui/material";
import TagCloud from "../components/TagCloud";
import CustomButton from "../components/CustomButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BlogCard from "../components/BlogCard";
import { tmpData, companies } from "../helpers/data";
import Fade from "../components/Fade";
import Aos from 'aos'

import SkillBar from "../components/SkillBar";

const HeroSection = styled(VFlex)({
  height: "45vh",
  width: "100%",
});

const Title = styled("h1")(({ theme }) => ({
  color: theme.palette.main,
  fontSize: "3rem",
  fontFamily:"Poppins"
}));
const SubHeading = styled(SubText)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "10px",
  marginLeft: "4px",
  fontFamily:"Poppins"
}));
const ObjectiveText = styled(SubText)(({ theme,fontSize,marginTop }) => ({
  fontSize: fontSize ? fontSize : "1rem",
  lineHeight: "1.3rem",
  marginTop:marginTop ? marginTop : "10px",
  fontFamily:"Poppins",
  fontWeight:"400"
}));
const Bar = styled('span')(({theme}) => ({
  color:theme.palette.blue,
  fontFamily:"Poppins"
}))

const TextLink = styled('a')(({theme}) => ({
  color:theme.palette.blue,
  fontFamily:"Poppins",
  textDecoration:"none",
  cursor:"pointer"
}))

const SocialLinkContainer = styled("div")(({ theme,marginTop }) => ({
  width: "200px",
  height: "25px",
  display: "flex",
  columnGap: "10px",
  marginTop:marginTop,
  fontFamily:"Poppins"
}));
const SocialLink = styled("a")(({ theme }) => ({
  listStyle: "none",
  backgroundColor: "transparent",
  fontFamily:"Poppins",
  "&:active": {
    outline: 0,
    border: "none",
    boxShadow: "none",
  },
  "&:focus": {
    outline: 0,
    border: "none",
    boxShadow: "none",
  },
  "& svg": {
    fontSize: "1.8rem",
    fill: "#909096",
    transition: "fill 0.3s",
    "&:hover": {
      fill: theme.palette.blue,
    },
  },
}));

const skills = [
  "React",
  ".Net",
  "Nodejs",
  "Javscript",
  "HTML",
  "CSS",
  "ES5/ES6",
  "Elastic search",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "AzureDevOps",
  "DevOps",
  "AzurePortal",
  "Material",
  "Bootstrap",
  "Styled-Components",
  "Typescript",
  "REST",
  "SQL",
  "NoSQL",
];
const Home = ({tab}) => {
  const footerRef = useRef(null)
  const blogRef = useRef(null)
  const skillsRef = useRef(null)
  const executeScrollToFooter = () => footerRef.current.scrollIntoView() 
   const executeScrollToBlog = () => blogRef.current.scrollIntoView() 
  const executeScrollToSkills = () => skillsRef.current.scrollIntoView()
  useEffect(() => {
    Aos.init({duration:1000,once:true})
  },[])
  useEffect(() => {
    if(tab==="Contact") executeScrollToFooter()
    if(tab==="Blog") executeScrollToBlog()
    if(tab==="Skills") executeScrollToSkills()
  },[tab])
   
  const [data, setData] = useState(tmpData);
  return (
    <>
      <HeroSection>
        <Title>
          <div data-aos="fade-down" >
          <RubberBand text={"Your Friendly Neighborhood Software Engineer"} />
          </div>
          <SubHeading data-aos="fade-right">
            Full stack Web Developer/ DevOps Consultant / Cyber Security
            Enthusiastic
          </SubHeading>
          <SocialLinkContainer data-aos="fade-up">
            <SocialLink
              href="https://www.linkedin.com/in/muhammad-aahad-568aaa179/"
              target="_blank"
            >
              <LinkedInIcon className={"icon"} />
            </SocialLink>
            <SocialLink href="https://github.com/staz6/" target="_blank">
              <GitHubIcon className={"icon"} />
            </SocialLink>
          </SocialLinkContainer>
        </Title>
      </HeroSection>
      <LineContainer aos={"fade-right"}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <MHeading>
              <Bar><RubberBand text={"/"} /></Bar>
              <RubberBand text={"Objective"} />
            </MHeading>
            <ObjectiveText>To provide solution</ObjectiveText>
          </Grid>
          <Grid item lg={6}>
            <MHeading>
              <Bar><RubberBand text={"/"} /></Bar>
              <RubberBand text={"Theory behind my work"} />
            </MHeading>
            <ObjectiveText >
              Hello beautiful people! I'm your programmer guy with a vast array
              of knowledge in many different front-end and back-end languages,
              Microservices and Monolithic architectures, Dockers/Kubernetes
              containers, Databases, DevOps and Cybersecurity. I love everything
              coding. So, if there is problem that could be solve through it
              then I can provide you the solution for it.
            </ObjectiveText>
          </Grid>
        </Grid>
      </LineContainer>
      <Grid container style={{ marginTop: "10vh" }} data-aos="flip-left">
        <Grid item lg={5}>
          <ObjectiveText>Software Engineer</ObjectiveText> <br />
          <MHeading fontSize={"2.8rem"} type={"blue"}>
            <RubberBand text={"Me, Myself & I"} />
          </MHeading>{" "}
          <br />
          <MHeading fontSize={"1.1rem"}>
            <Bar>/</Bar>A Passionate Software Engineer
          </MHeading>
          <ObjectiveText>
          I am a last year university student currently doing my BSCS from <TextLink target="_blank" href="https://www.iba.edu.pk/">Institute of Business Administration</TextLink>. 
          I’m also an <TextLink target="_blank" href="https://www.aptechlearning.com/it/" >Aptech Certified Software Engineer</TextLink>. 
          It's a 3 year diploma in which we learn everything about software development.
          </ObjectiveText>
          <ObjectiveText>
          Over my 2 years of experience I have many opportunities to work in a vast spectrum of <TextLink onClick={executeScrollToSkills}>technologies</TextLink> that let me gather 
          a significant amount of various experiences. 
          </ObjectiveText>
          <ObjectiveText>
          I’m currently working remotely as a Full-stack web developer and DevOps consultant. 
          You can find more about me on my <TextLink target="_blank"  href="https://www.linkedin.com/in/muhammad-aahad-568aaa179/">Linkedin </TextLink>
          or can <TextLink  onClick={executeScrollToFooter}>Contact</TextLink> me directly.
          </ObjectiveText>
          <CustomButton text={"Contact me!"} onClick={executeScrollToFooter}/>
        </Grid>
        <Hidden lgDown={true}>
        <Grid item lg={7} style={{ overflow: "hidden", marginTop: "5vh" }}>
          <TagCloud tagName={skills} speed={1} raduis={400} />
        </Grid>
        </Hidden>
      </Grid>
      <MHeading fontSize={"2.8rem"} marginTop={"8vh"} type={"blue"} ref={blogRef} data-aos={"fade-right"}>
        <RubberBand text={"Blogs,"} />
      </MHeading>
      <br />
      <br />
      <Grid container spacing={3} style={{ position: "relative" }} >
        {data.map((val, index) => {
          return <BlogCard val={val} index={index} />;
        })}
        <Fade parentId={"parent-div"} />
      </Grid>
       
      <LineContainer marginTop={"8vh"} aos={"fade-right"} >
        <Grid container spacing={2} ref={skillsRef}>
          <Grid item lg={6}>
            <MHeading fontSize={"2.8rem"} type={"blue"}>
              <RubberBand text={"Skills & Experience"} />
            </MHeading>
            <div style={{ width: "80%" }}>
              <ObjectiveText>
              I started my journey as a .NET Backend developer. My first project as a .Net Developer was to
               create a School ERP based on microservices architecture.
               I achieved this using RabbitMQ as my message broker and deploying the application using 
               docker then later transitioning into Kubernetes cluster.
              </ObjectiveText>
              <ObjectiveText>
              After that I quickly transition into a Full-stack developer learning React and 
              Angular and handling various project development and assisting in any way I can.
              The main area of my expertise is in web development I excel at creating web application of complex architecture   
              </ObjectiveText>
              <ObjectiveText>
              I officially started my DevOps journey at the end of 2021. Throughout my DevOps journey I have become proficient 
              in the usage of various platforms Like AWS, AzureDevOps and Azure Portal and have familiarized myself with different 
              automation concepts and practices.
              </ObjectiveText>
            </div>
          </Grid>
          <Grid item lg={6} style={{width:"100%"}}>
            <br />
            <SkillBar
              text={"Back-end"}
              color={"rgb(255, 34, 83)"}
              width={"85%"}
            />
            <SkillBar text={"Front-end"} color={"#08fdd8"} width={"75%"} />
            <SkillBar
              text={"DevOps"}
              color={"rgb(210, 108, 213)"}
              width={"70%"}
            />
            <SkillBar text={"Cyber Security"} color={"#bbff34"} width={"50%"} />
          </Grid>

          <Grid item lg={12}>
            <MHeading fontSize={"2.8rem"} type={"blue"}>
              <RubberBand text={"Companies who helped me grow"} />
            </MHeading>
            <Grid container spacing={2} style={{ marginTop: "2vh" }}>
              {companies.map((val, key) => {
                return (
                  <Grid item lg={4} key={key}>
                    <MHeading fontSize={"1.4rem"}><Bar>/</Bar>{val.position}</MHeading>
                    <ObjectiveText>{val.name}</ObjectiveText>
                    <ObjectiveText>{val.desc}</ObjectiveText>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </LineContainer>

      <Grid container style={{ marginTop: "8vh" }} spacing={2} ref={footerRef} data-aos="fade-up">
        <MHeading fontSize={"3.5rem"} type={"blue"}>
          <RubberBand text={"Get in touch"} />
        </MHeading>
        <Grid container spacing={2} style={{marginTop:"2vh"}}>
        <Grid item lg={4}>
        <MHeading fontSize={"2rem"} letterSpacing={"1px"}>/Address</MHeading>
          <ObjectiveText fontSize="1.2rem" marginTop="2vh">Tariq-bin-zyad Karachi Pakistan</ObjectiveText>
        </Grid>
        <Grid item lg={4}>
        <MHeading fontSize={"2rem"} letterSpacing={"1px"}>/Email</MHeading>
          <ObjectiveText fontSize="1.2rem" marginTop="2vh">muhammad.aahad81@gmail.com</ObjectiveText>
        </Grid>
        <Grid item lg={4}>
        <MHeading fontSize={"2rem"} letterSpacing={"1px"}>/Social Media</MHeading>
        <SocialLinkContainer marginTop="10px">
            <SocialLink
              href="https://www.linkedin.com/in/muhammad-aahad-568aaa179/"
              target="_blank"
            >
              <LinkedInIcon className={"icon"} />
            </SocialLink>
            <SocialLink href="https://github.com/staz6/" target="_blank">
              <GitHubIcon className={"icon"} />
            </SocialLink>
          </SocialLinkContainer>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
