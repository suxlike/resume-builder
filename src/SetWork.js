import { Button, Divider, Grid, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const SetWork = ({ work, setWork }) => {
  return work.map((w, i) => (
    <Grid container spacing={1} key={w.id}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Company"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...work];
            a[i].company = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Position"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...work];
            a[i].position = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Start Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...work];
            a[i].startDate = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="End Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...work];
            a[i].endDate = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <TextField
          fullWidth
          multiline
          id="outlined-basic"
          label="Description"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...work];
            a[i].description = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Button
          onClick={() => {
            setWork(work.filter((a) => a.id !== w.id));
          }}
          color="primary"
          variant="contained"
          size="small"
        >
          remove
          <DeleteIcon />
        </Button>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  ));
};

export default SetWork;
