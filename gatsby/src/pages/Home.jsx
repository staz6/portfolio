import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { SubText, VFlex, MHeading } from "../helpers/styles";
import RubberBand from "../components/RubberBand";
import LineContainer from "../components/LineContainer";
import { Grid, Paper } from "@mui/material";
import TagCloud from "../components/TagCloud";
import CustomButton from "../components/CustomButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BlogCard from "../components/BlogCard";
import {tmpData} from "../helpers/tmpData"
import Fade from "../components/Fade";
import SkillBar from "../components/SkillBar";



const HeroSection = styled(VFlex)({
  height: "45vh",
  width: "100%",
});

const Title = styled("h1")(({ theme }) => ({
  color: theme.palette.main,
  fontSize: "3rem",
}));
const SubHeading = styled(SubText)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "10px",
  marginLeft: "4px",
}));
const ObjectiveText = styled(SubText)(({ theme }) => ({
  fontSize: "0.9rem",
  lineHeight: "1.3rem",
}));

const SocialLinkContainer = styled('div')(({theme}) => ({
  width:"200px",
  height:"25px",
  display:"flex",
  columnGap:"10px"
}))
const SocialLink = styled('a')(({theme}) => ({
  listStyle:"none",
  backgroundColor: "transparent",
  "&:active":{
    outline: 0,
    border: "none",
    boxShadow:"none"
  },
  "&:focus":{
    outline: 0,
    border: "none",
    boxShadow:"none"
  },
  "& svg":{
    fontSize:"1.8rem",
    fill:"#909096",
    transition:"fill 0.3s",
    "&:hover":{
      fill:theme.palette.blue
    }
  }
}))

const skills=["React",".Net","Nodejs","Javscript","HTML","CSS",
            "ES5/ES6","Git","Docker","Kubernetes","AWS","AzureDevOps","DevOps","AzurePortal",
            "Material","Bootstrap","Styled-Components","Typescript","REST","SQL","NoSQL"]
const Home = () => {
  const [data,setData]=useState(tmpData)
  return (
    <>
      <HeroSection>
        <Title>
          <RubberBand text={"Your Friendly Neighborhood Software Engineer"} />
          <SubHeading>
            Full stack Web Developer/ DevOps Consultant / Cyber Security
            Enthusiastic
          </SubHeading>
          <SocialLinkContainer>
            <SocialLink href="https://www.linkedin.com/in/muhammad-aahad-568aaa179/" target="_blank">
              <LinkedInIcon className={"icon"}/>
            </SocialLink>
            <SocialLink href="https://github.com/staz6/" target="_blank">
              <GitHubIcon className={"icon"}/>
            </SocialLink>
        </SocialLinkContainer>
        </Title>
      </HeroSection>
      <LineContainer>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <MHeading>
              <RubberBand text={"/Objective"} />
            </MHeading>
            <ObjectiveText>To provide solution</ObjectiveText>
          </Grid>
          <Grid item lg={6}>
            <MHeading>
              <RubberBand text={"/Theory behind my work"} />
            </MHeading>
            <ObjectiveText>
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
      <Grid container style={{ marginTop: "10vh" }}>
        <Grid item lg={5}>
          <ObjectiveText>Software Engineer</ObjectiveText> <br/>
          <MHeading fontSize={"2.8rem"} type={'blue'}>
            <RubberBand text={"Me, Myself & I"} />
          </MHeading> <br/>
          
          <MHeading fontSize={"1.1rem"}>A Passionate Software Engineer</MHeading>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </ObjectiveText>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </ObjectiveText>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </ObjectiveText>
          <CustomButton text={"Contact me!"}/>
        </Grid>
        <Grid item lg={7} style={{overflow:"hidden",marginTop:"5vh"}}>
          <TagCloud tagName={skills} speed={1} raduis={400}/>
        </Grid>
      </Grid>
      <MHeading fontSize={"2.8rem"} marginTop={"8vh"} type={'blue'}>
            <RubberBand text={"Blogs,"} />
      </MHeading>
      <br/><br/>
      <Grid container spacing={3} style={{position:"relative"}} >
          
          {data.map((val,key) => {
            return(
              <BlogCard val={val} key={key}/>
            )
          })}
          <Fade parentId={"parent-div"}/>
      </Grid>
      
      <LineContainer marginTop={"8vh"}>
      <Grid container  spacing={2}>
          <Grid item lg={6}>
          <MHeading fontSize={"2.8rem"} type={'blue'}>
            <RubberBand text={"Skills & Experience"} />
          </MHeading>
          <div style={{width:"80%"}}>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </ObjectiveText>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </ObjectiveText>
          <ObjectiveText>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
          quo minus id quod. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </ObjectiveText>
          </div>
          </Grid>
          <Grid item lg={6}>
              <br/>
              <SkillBar text={"Back-end"} color={"rgb(255, 34, 83)"} width={"85%"}/>
              <SkillBar text={"Front-end"} color={"#08fdd8"} width={"75%"}/>
              <SkillBar text={"DevOps"} color={"rgb(210, 108, 213)"} width={"70%"}/>
              <SkillBar text={"Cyber Security"} color={"#bbff34"} width={"50%"}/>
          </Grid>

          <Grid item lg={12}>
            <Grid item lg={12}>
            <MHeading fontSize={"2.8rem"} type={'blue'}>
            <RubberBand text={"Companies who helped me grow"} />
          </MHeading>
            </Grid>
          </Grid>
      </Grid>
      </LineContainer>
      
      
    </>
  );
};
export default Home;
