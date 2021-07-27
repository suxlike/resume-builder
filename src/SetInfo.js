import { Grid, TextField } from "@material-ui/core";

const SetInfo = ({ setInfos, infos }) => {
  //   setInfos([...infos, { email: e.target.value }])
  const a = (e) => {
    let i = [...infos];
    i[2] = { email: e.target.value };
    setInfos(i);
  };
  return (
    <Grid container spacing={1}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[0] = { fullName: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[1] = { title: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item md={4} sm={4} xs={4}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[2] = { email: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item md={4} sm={4} xs={4}>
        <TextField
          fullWidth
          size="small"
          margin="normal"
          id="outlined-basic"
          label="GitHub"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[3] = { github: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item md={4} sm={4} xs={4}>
        <TextField
          fullWidth
          size="small"
          margin="normal"
          id="outlined-basic"
          label="LinkedIn"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[4] = { linkedin: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SetInfo;
