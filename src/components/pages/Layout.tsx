import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box id="main" as="main" p={7} pt={3} minH="calc(100vh - 64px)">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
