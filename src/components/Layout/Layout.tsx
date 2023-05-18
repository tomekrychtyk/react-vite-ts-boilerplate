import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h1">Layout</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Children:</Typography>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
