import { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import Feeds from "./Feeds";
import { Footer } from "./Footer";
import News from "./News";
const useStyles = makeStyles({
  drawer: {
    width: "500",
  },
  bar: {
    color: "white",
  },
  searchBtn: {
    color: "white",
  },
  openClose: {
    color: "white",
    width: "20",
    height: "60px",
  },
});
export const Navbar = () => {
  const [isDrwaerOpen, setisDrwaerOpen] = useState(false);
  const [isLoginDrwaerOpen, setisLoginDrwaerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const arr = [
    "Home",
    "India News",
    "Entertainment",
    "IPL 2022",
    "Elections",
    "Elections",
    "Cities",
    "World News",
    "Lifestyle",
    "Trending",
    "Education",
    "Astrology",
    "Opinion",
    "Anylasis",
    "Videos",
    "Photos",
    "Sports",
    "Web Stories",
    "Business",
    "Science",
    "HT Insight",
    "CricHT Fantasy",
    "Games",
    "Quiz",
    "Podcasts",
    "Auto",
    "HT Tech",
    "HT Bangla",
    "HT School",
    "HT Brand Stories",
    "HT Friday Finance",
    "HT Shop",
  ];
  const arr2 = [
    [
      "Bollywood",
      "TV",
      "Web Series",
      "Music",
      "Hollywood",
      "Telgu Cinema",
      "Tamil Cinema",
    ],
    [
      "Overview",
      "View",
      "Points Table",
      "Schedule",
      "Teams",
      "Results",
      "Orange Cap",
      "Purple Cap",
      "IPL History",
    ],
    ["Uttar Pradesh", "Punjab", "Uttarakhand", "Goa", "Manipur"],
    [
      "Delhi",
      "Mumbai",
      "Bengaluru",
      "Gurugram",
      "Noida",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "",
    ],
  ];
  const handleClick = () => {
    setOpen(!open);
  };
const [token,setToken]=useState("");
let navigate = useNavigate();
// let name = token.split("@gmail.com")
  useEffect(() => {
    getDetails();
  },[]);
  const getDetails = async()=>{
   let res= await fetch("http://localhost:5000/details",{
      headers:{
        'x-access-token': `Bearer ${localStorage.getItem("token")}`
      },
    })
    let data = await res.json();
    setToken(data.posts.email);
    console.log(data.posts.email);
  }
  return (
    <>
      <div className='m_navbar'>
        <div className='m_navbar_left'>
          <img
            className='custom-icon1'
            src='src/assets/bar.jpeg'
            alt=''
            onClick={() => setisDrwaerOpen(true)}
          />
        </div>
        <div className='m_navbar_middle'>
          <img
            src='https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg'
            // style={{ height: "50px"  }}
            alt=''
          />
        </div>
        <div className='m_navbar_right'>
          <img className='custom-icon1' src='src/assets/search.jpeg' alt='' />
        </div>
      </div>
      <div className='navbar'>
        <div className='navbar-left'>
          <div className='navbar-left-top'>
            <div className='explore-btn'>
              <img
                className='custom-icon1'
                src='src/assets/bar.jpeg'
                alt=''
                onClick={() => setisDrwaerOpen(true)}
              />

              <span>
                <strong>Explore</strong>
              </span>
            </div>
            <div className='search-btn'>
              <img
                className='custom-icon1'
                src='src/assets/search.jpeg'
                alt=''
              />
              <a href='#'>
                <strong>Search</strong>
              </a>
            </div>
          </div>
          <div className='navbar-left-bottom' style={{ color: "white" }}>
            <div className='date'>Tueday, May 03,2022</div>
            <div className='location-temp'>
              New Delhi <span>31</span>
              <sup>o</sup>C
            </div>
          </div>
        </div>
        <div className='navbar-middle'>
          <a href='index.html'>
            <img
              src='https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg'
              // style={{ height: "50px"  }}
              alt=''
            />
          </a>
        </div>
        <div className='navbar-right'>
          <div className='navbar-right-top'>
            <div className='navbar-right-game'>
              <img className='custom-icon' src='src/assets/game.jpeg' alt='' />

              <a href='#'>
                <span>
                  <strong>Game</strong>
                </span>
              </a>
            </div>
            <div className='navbar-right-epage'>
              <img className='custom-icon' src='src/assets/news.jpeg' alt='' />
              <a href='#'>
                <span>
                  <strong>E-paper</strong>
                </span>
              </a>
            </div>
            <div
            onClick={()=>{
              if(localStorage.getItem("token")==undefined){
                navigate(`/signin`)
              }
              else{
                setisLoginDrwaerOpen(true)
              }
            }} 
            className='navbar-right-login'>
              <img
                className='custom-icon'
                src='src/assets/profile.jpeg'
                alt=''
                
              />
              {/* <a href='signin'> */}
                <span>
                  <strong>
                    {localStorage.getItem("token")!=undefined?"Sign Out":"Sign In"}
                  </strong>
                </span>
              {/* </a> */}
            </div>
          </div>
          <div className='navbar-right-bottom' style={{ color: "white" }}>
            Start 15 Days Free Trial
            <div className='subscribe'>
              <a href='#'>Subscribe</a>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar-bottom'>
        <ul className='navbar-list'>
          <li>
            <a href='index.html'>Home</a>
          </li>
          <li>
            <a href='#'>Latest</a>
          </li>
          <li>
            <a href='#'>India</a>
          </li>
          <li>
            <a href='#'>World</a>
          </li>
          <li>
            <a href='#'>Cities</a>
          </li>
          <li>
            <a href='#'>Entertainment</a>
          </li>
          <li>
            <a href='#'>Cricket</a>
          </li>
          <li>
            <a href='#'>Lifestyle</a>
          </li>
          <li>
            <a href='#'>Astrology</a>
          </li>
          <li>
            <a href='#'>Editorials</a>
          </li>
          <li className='important'>
            <a href='#'>For You</a>
          </li>
          <li>
            <a href='#'>Saved</a>
          </li>
        </ul>
        <ul className='navbar-list-btn'>
          <li className='new-list'>
            <a href='#'>IPL 2022</a>
          </li>
          <li className='new-list'>
            <a href='#'>Quickreads</a>
          </li>
          <li>
            <a href='#'>Coronavirus</a>
          </li>
          <li>
            <a href='#'>Trending</a>
          </li>
          <li>
            <a href='#'>Web Stories</a>
          </li>
          <li>
            <a href='#'>Photos</a>
          </li>
          <li className='new-list'>
            <a href='#'>Following</a>
          </li>
          <li>
            <a href='#'>Education</a>
          </li>
          <li>
            <a href='#'>Bollywood</a>
          </li>
          <li>
            <a href='#'>+10 More</a>
          </li>
        </ul>
      </div>
      <Drawer
        className={classes.drawer}
        anchor='left'
        id='drawer'
        open={isDrwaerOpen}
        onClose={() => setisDrwaerOpen(false)}
      >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography className={classes.typeHeader} component='div'>
            <div className='drawer-header'>
              <div className='drawer-logo'>
                <img
                  className='custom-icon1'
                  src='src/assets/logo.jpeg'
                  alt=''
                />
              </div>
              <div className='drawer-header-text'>
                <span className='draw-text-center location-temp'>
                  New Delhi 370<sup>o</sup>C
                </span>
                <br />
                <span style={{ color: "#a6a6a6" }}>
                  Wednesday, May 04, 2022
                </span>
              </div>
              <div className='drawer-header-icon'>
                <img
                  onClick={() => setisDrwaerOpen(false)}
                  className='custom-icon1'
                  src='src/assets/close.jpeg'
                  alt=''
                />
              </div>
            </div>
          </Typography>

          <List className='drawer-list'>
            {arr.map((e, i) => {
              if (
                i == 2 ||
                i == 3 ||
                i == 4 ||
                i == 5 ||
                i == 7 ||
                i == 9 ||
                i == 10 ||
                i == 13 ||
                i == 14 ||
                i == 15 ||
                i == 19 ||
                i == 21
              ) {
                return (
                  <>
                    <ListItem onClick={handleClick}>
                      <ListItemText className='drawer-listItem' primary={e} />
                      {open ? (
                        <ExpandLess className={classes.openClose} />
                      ) : (
                        <ExpandMore className={classes.openClose} />
                      )}
                    </ListItem>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          {arr2.map((e, j) => {
                            if (i === j) {
                              return (
                                <>
                                  <ListItemText primary={e} />
                                </>
                              );
                            }
                          })}
                        </ListItemButton>
                      </List>
                    </Collapse>
                    <Divider />
                  </>
                );
              } else {
                return (
                  <>
                    <ListItem>
                      <ListItemText className='drawer-listItem' primary={e} />
                    </ListItem>
                    <Divider />
                  </>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>
      <Drawer
        id='login_drawer'
        className={classes.login_drawer}
        anchor='right'
        open={isLoginDrwaerOpen}
        onClose={() => setisLoginDrwaerOpen(false)}
      >
        <Box
          p={2}
          width='250px'
          textAlign='center'
          className='login-drawer-box'
          role='presentation'
        >
          <Typography className={classes.typeHeader} component='div'>
            <div className='login-drawer-header'>
              <div className='login-drawer-logo'>
                <span>M</span>
              </div>
              <div className='login-drawer-title'>
                {/* Ayush Bajpai */token.split("@gmail.com")}
                </div>
              <div className='login-drawer-mail'>
                {/* Mr.ayushbajpai185@gmail.com */token}
              </div>
              <div className='login-drawer-button'>
                <a href='#'>Edit Profile</a>
              </div>
              <div className='login-drawer-exit'>
                <img
                  onClick={() => setisLoginDrwaerOpen(false)}
                  className='custom-icon2'
                  src='src/assets/close.jpeg'
                  alt=''
                />
              </div>
            </div>
          </Typography>
          <List className='custom-list'>
            <ListItem>
              <ListItemText
                className='drawer-listItem'
                primary='Subscribe Now'
              />
            </ListItem>

            <ListItem>
              <ListItemText
                className='drawer-listItem'
                primary='Saved Aritcles'
              />
            </ListItem>

            <ListItem>
              <ListItemText className='drawer-listItem' primary='Following' />
            </ListItem>

            <ListItem>
              <ListItemText className='drawer-listItem' primary='My Reads' />
            </ListItem>

            <ListItem>
              <ListItemText 
              onClick={(e)=>{
                
                localStorage.removeItem("token");
                navigate(`/`)

              }}
              className='drawer-listItem' primary='Sign Out' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <News/>
    </>
  );
};
