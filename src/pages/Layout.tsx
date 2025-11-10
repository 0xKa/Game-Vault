import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box id="main" as="main" p={7} pt={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
