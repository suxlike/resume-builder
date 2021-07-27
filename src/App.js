import { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SetWork from "./SetWork";
import SetEdu from "./SetEdu";
import SetInfo from "./SetInfo";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { v4 as uuidv4 } from "uuid";
const useStyles = makeStyles({
  App: {
    margin: 20,
  },
  grid: {
    margin: 20,
  },
  card: {
    margin: 20,
    padding: 20,
  },
});

function App() {
  const [infos, setInfos] = useState([
    { fullName: "asd" },
    { title: "asd" },
    { email: "asd@gmail.com" },
    { github: "asd@github" },
    { linkedin: "as" },
  ]);
  const [edu, setEdu] = useState([
    {
      course: "asd",
      university: "asd",
      startDate: "2015",
      endDate: "2016",
      description: "description",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={classes.grid}
      >
        <Grid item md={6}>
          <Card className={classes.card}>
            <Typography variant="h4" align="center">
              Fill out the form{" "}
            </Typography>
            <SetInfo setInfos={setInfos} infos={infos} />
            <Divider variant="middle" />
            <SetWork work={work} setWork={setWork} />
            <Button
              onClick={() => {
                setWork([
                  ...work,
                  {
                    id: uuidv4(),
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  },
                ]);
              }}
              color="primary"
              variant="contained"
              size="small"
            >
              add another work experience
              <AddBoxIcon />
            </Button>
            <Divider variant="middle" />
            <SetEdu edu={edu} setEdu={setEdu} />
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card></Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
