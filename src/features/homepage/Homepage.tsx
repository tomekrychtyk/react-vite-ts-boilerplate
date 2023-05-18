import { Grid } from '@mui/material';

const Homepage = () => {
  return (
    <Grid
      sx={{
        px: 4,
        py: 4,
      }}
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
    >
      <Grid item xs={12}>
        Homepage
      </Grid>
    </Grid>
  );
};

export default Homepage;
