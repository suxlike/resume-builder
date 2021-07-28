import { Grid, Typography } from "@material-ui/core";

const Work = ({ work }) => {
  return work.map((i) => (
    <Grid style={{margin:20}} container spacing={1} justifyContent="space-between">
      <Grid item xs={8}>
        <Typography color="secondary" variant="body">{i.position}</Typography>
      </Grid>
      {/* <Grid item xs={1}></Grid> */}
      <Grid item xs={4}>
        <Typography variant="subtitle2">
          {i.company + " | " + i.startDate + " - " + i.endDate}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{i.description}</Typography>
      </Grid>
    </Grid>
  ));
};

export default Work;
