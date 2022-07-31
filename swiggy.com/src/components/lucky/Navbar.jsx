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

const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => {
      setState(open);
    };

    const list = () => (
      <Box
        sx={{ width: 450 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        data
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
