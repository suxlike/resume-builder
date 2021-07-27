import { Grid, TextField } from "@material-ui/core";

const SetEdu = ({ edu, setEdu }) => {
  return edu.map((e, i) => (
    <Grid container spacing={0} key={i}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Course/Program"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].course = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="University"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].university = e.target.value;
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
            let a = [...edu];
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
            let a = [...edu];
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
            let a = [...edu];
            a[i].description = e.target.value;
          }}
        />
      </Grid>
    </Grid>
  ));
};

export default SetEdu;
