import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../store/store/auth/action";
import Drawer from "@mui/material/Drawer";
import Loginimage from "./Image-login_btpq7r.webp";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [state, setState] = React.useState(false);
    const RedditTextField = styled((props) => (
      <TextField InputProps={{ disableUnderline: true }} {...props} />
    ))(({ theme }) => ({
      "& .MuiFilledInput-root": {
        border: "1px solid #e2e2e1",
        overflow: "hidden",
        borderRadius: 0,
        backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
        transition: theme.transitions.create([
          "border-color",
          "background-color",
          "box-shadow",
        ]),
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&.Mui-focused": {
          backgroundColor: "transparent",
        },
      },
    }));

    const toggleDrawer = (open) => {
      setState(open);
    };

    const list = () => (
      <Box
        className="drawer"
        sx={{ width: 350 }}
        role="presentation"
        // onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <div className="flex">
          <div>
            <p>Login</p>
            <p className="p1">
              or <span>create an account</span>{" "}
            </p>
          </div>
          <div>
            <img className="login_img" src={Loginimage} alt="" />
          </div>
            </div>
            <div className="jss1">
                <RedditTextField
          label="Phone number"
          id="reddit-input"
          variant="filled"
            style={{ marginTop: 11 }}
        />
        <Button id="button_1" variant="outlined">Login</Button>
            </div>
        
        <p>
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </Box>
    );
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutsuccess());
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            Products Pricing Blog
            {/* <Link to={"/"}>Private Route</Link> */}
          </Box>

          {token ? (
            <Box
              onClick={handlelogout}
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
            >
              logout
            </Box>
          ) : (
            // <Link to="/">
            <Box
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
              onClick={() => toggleDrawer(true)}
            >
              Login
            </Box>
            // </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
