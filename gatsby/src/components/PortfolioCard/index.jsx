import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import React from 'react';
import Carousel from 'react-material-ui-carousel';


const ProjectTitle = styled('a')(({theme})=>({
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.projectHeading,
    fontSize:"2rem",
    lineHeight:"4rem",
    textDecoration:"none",
    cursor:"pointer",
    "&:hover":{
        color:theme.palette.primary.main
    }
    
}))
const ProjectSubText = styled('p')(({theme,fontWeight,marginTop})=>({
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.projectSubtext,
    fontSize:"1rem",
    lineHeight:"1.2rem",
    // width:"90%",
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

const ParentContainer = styled(Grid)(({theme,position})=>({
    justifyContent:"space-between",
    marginTop:"6vh",
    flexDirection:position ? 'row-reverse' : 'row',
    textAlign:position ? 'right' : 'left'
}))

const Image = styled('img')(({theme})=>({
    width:"100%",
    height:"100%"
}))

function PortfolioCard({val,index}) {
    const getPosition = (i) => {
        let tmp = i+1;
        if(tmp%2!==0) return false
        return true
    }
    const position = getPosition(index)
    return (
        <ParentContainer container position={position} columnGap={5} data-aos={position ? "fade-right": "fade-left"}>
            <Grid item lg={6} md={6}>
                <ProjectTitle target="_blank" href={val.webUrl}>
                    {val.name}  
                </ProjectTitle>
                <ProjectSubText fontWeight={400}>
                {val.desc}
                </ProjectSubText>
                {/* <ProjectSubText fontWeight={400}>
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
                   
                </List> */}
            </Grid>
            <Grid item lg={5} md={5}>
                <Carousel height={"400px"}>
                    {
                        val.projectImage.map((i,k)=>(
                            
                            <Image src={i.asset.gatsbyImageData.images.fallback.src} alt={val.alt}/>
                        ))
                    }
                </Carousel>
            </Grid>
        </ParentContainer>
    )
}

export default PortfolioCard
