import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Person4Icon from '@mui/icons-material/Person4';
import Settings from '@mui/icons-material/Settings';
import AccountBox from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const listItems = [
  { icon: <HomeIcon />, text: "Home" },
  { icon: <ArticleIcon />, text: "Pages" },
  { icon: <GroupIcon />, text: "Groups" },
  { icon: <StorefrontIcon />, text: "MarketPlace" },
  { icon: <Person4Icon />, text: "Friends" },
  { icon: <Settings />, text: "Setting" },
  { icon: <AccountBox />, text: "Profile" },
];
function SideBar() {
  return (
    <Box
      // bgcolor={"skyblue"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        {listItems.map((item) => (
          <>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
            <ListItem disablePadding>
              <ListItemButton sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}>
                <ListItemIcon>
                <ModeNightIcon />
                </ListItemIcon>
                <Switch defaultChecked />
              </ListItemButton>
            </ListItem>
      </List>
    </Box>
  );
}

export default SideBar;
