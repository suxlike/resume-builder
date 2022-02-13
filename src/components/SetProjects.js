import { Button, Grid, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const SetProjects = ({ projects, setProjects }) => {
  return projects.map((w, i) => (
    <Grid container spacing={1} key={w.id}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          value={w.project}
          size="small"
          id="outlined-basic"
          label="Project"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...projects];
            a[i].project = e.target.value;
            setProjects(a);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          value={w.position}
          size="small"
          id="outlined-basic"
          label="Position"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...projects];
            a[i].position = e.target.value;
            setProjects(a);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          value={w.startDate}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Start Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...projects];
            a[i].startDate = e.target.value;
            setProjects(a);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          value={w.endDate}
          size="small"
          id="outlined-basic"
          label="End Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...projects];
            a[i].endDate = e.target.value;
            setProjects(a);
          }}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <TextField
          value={w.description}
          fullWidth
          multiline
          id="outlined-basic"
          label="Description"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...projects];
            a[i].description = e.target.value;
            setProjects(a);
          }}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Button
          style={{ marginLeft: 18 }}
          color="secondary"
          onClick={() => {
            setProjects(projects.filter((a) => a.id !== w.id));
          }}
          variant="contained"
          size="small"
        >
          remove
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  ));
};

export default SetProjects;
