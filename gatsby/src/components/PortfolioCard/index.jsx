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

function PortfolioCard({val,key}) {
    console.log(val)
    return (
        <Grid container style={{marginTop:"2vh"}} key={key}>
            <Grid item lg={7} md={7}>
                <ProjectTitle>
                    {val.name}     
                </ProjectTitle>
                <ProjectSubText fontWeight={400}>
                {val.desc}
                </ProjectSubText>
                <ProjectSubText fontWeight={400}>
                {val.responsiblity}
                </ProjectSubText>
                <ProjectSubTitle >
                    Achievments:
                </ProjectSubTitle>
                <List>
                    {
                        val.achievments.map((v,k)=>(
                            <li key={k}>
                    <ProjectSubText fontWeight={400}>
                    {v}
                    </ProjectSubText>
                    </li>
                        ))
                    }
                   
                </List>
            </Grid>
            <Grid item lg={5} md={5}>
                <Carousel height={"400px"}>
                    {
                        val.projectImage.map((i,k)=>(
                            
                            <img src={i.asset.gatsbyImageData.images.fallback.src} alt={val.alt}/>
                        ))
                    }
                </Carousel>
            </Grid>
        </Grid>
    )
}

export default PortfolioCard
