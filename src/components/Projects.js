import { Grid, Typography } from '@material-ui/core';

const Projects = ({ projects }) => {
  return projects.map((i) => (
    <Grid
      style={{ marginLeft: 20 }}
      container
      spacing={1}
      justifyContent="space-between"
      key={i.id}
    >
      <Grid item xs={8}>
        <Typography color="secondary" variant="body1">
          {i.position}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">
          {i.project + ' | ' + i.startDate + ' - ' + i.endDate}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="body2">
          {i.description}
        </Typography>
      </Grid>
    </Grid>
  ));
};

export default Projects;
