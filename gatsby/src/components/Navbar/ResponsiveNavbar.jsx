import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";




const CustomDrawer = styled(Drawer)(({theme})=>({
  // background: "linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%)",
  // backgroundColor:"#1d1d1d",
  width:"100%",

}))

function ResponsiveNavbar({handleSetTab}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const onLinkClick=(value)=>{
    handleSetTab(value);
    setOpenDrawer(false)
  }
  return (
    <>
      <CustomDrawer anchor={"right"} PaperProps={{
        sx: {
          backgroundColor: "#1d1d1d",
          width:"40%"
        }
      }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={()=>{onLinkClick("Portfolio")}}>
            <ListItemText>
              <Link >Portfolio</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>{onLinkClick("Skills")}}>
            <ListItemText>
              <Link>Skills</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>{onLinkClick("Contact")}}>
            <ListItemText>
              <Link>Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>{onLinkClick("Blog")}}>
            <ListItemText>
              <Link>Blog</Link>
            </ListItemText>
          </ListItem>
        </List>
      </CustomDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        style={{ float:"right"}}
      >
        <MenuIcon style={{ color: "#08fdd8" }} />
      </IconButton>
    </>
  );
}

export default ResponsiveNavbar;
