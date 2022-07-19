import { Grid } from '@mui/material'
import { styled } from "@mui/material/styles";
import Carousel from 'react-material-ui-carousel'
import React from 'react'


const ProjectTitle = styled('h2')(({theme})=>({
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.projectHeading,
    fontSize:"2rem",
    lineHeight:"4rem",
    
}))
const ProjectSubText = styled('p')(({theme,fontWeight,marginTop})=>({
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.projectSubtext,
    fontSize:"1rem",
    lineHeight:"1.2rem",
    width:"90%",
    fontWeight:fontWeight,
    marginTop:marginTop
}))
const ProjectSubTitle = styled('h2')(({theme})=>({
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.projectHeading,
    fontSize:"1.1rem",
    lineHeight:"2rem",
    
}))

const List = styled('ul')(({theme})=>({
    listStyle:"kannada",
    paddingLeft:"18px",
    color:theme.palette.primary.main,
    "& li":{
        marginTop:"5px"
    }
}))

function PortfolioCard() {
    return (
        <Grid container style={{marginTop:"2vh"}}>
            <Grid item lg={7} md={7}>
                <ProjectTitle>
                    Project title       
                </ProjectTitle>
                <ProjectSubText fontWeight={400}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius arcu vel nibh sollicitudin gravida. 
                Duis id mi a felis sollicitudin maximus sed at magna. Fusce efficitur leo metus, 
                sed congue nisi sollicitudin ut. Vestibulum rutrum fringilla bibendum. Cras auctor 
                urna non est tincidunt semper. Vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; Cras magna neque, rutrum tincidunt ipsum ac
                </ProjectSubText>
                <ProjectSubTitle >
                    Achievments:
                </ProjectSubTitle>
                <List>
                    <li>
                    <ProjectSubText fontWeight={400}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius arcu vel nibh sollicitudin gravida. 
                Duis id mi a felis sollicitudin maximus sed at magna. Fusce efficitur leo metu
                    </ProjectSubText>
                    </li>
                    <li>
                    <ProjectSubText fontWeight={400}>
                        Achivment two
                    </ProjectSubText>
                    </li>
                </List>
            </Grid>
            <Grid item lg={5} md={5}>
                <Carousel height={"400px"}>
                    <img src={"https://images.unsplash.com/photo-1649840910927-90cb7c15a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1411&q=80"} alt={"logo"}/>
                    <img src={"https://images.unsplash.com/photo-1657652936041-5765e8ca17f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="Logo"/>
                    <img src={"https://images.unsplash.com/photo-1657622185369-a5a0190f151e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt="Logo"/>
                </Carousel>
            </Grid>
        </Grid>
    )
}

export default PortfolioCard
