import { useState } from "react";
import {
  Button,
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
import { Paper } from "@material-ui/core";
import SetSkills from "./SetSkills";
import SetInterests from "./SetInterests";
import Print from "./Print";
const useStyles = makeStyles({
  App: {
    margin: 0,
  },
  grid: {
    margin: 0,
  },
  paper: {
    margin: 0,
    padding: 0,
  },
});

function App() {
  const [interests, setInterests] = useState([
    { id: uuidv4(), interest: "DIY Smart Devices" },
  ]);
  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      skill: "React JS",
    },
    {
      id: uuidv4(),
      skill: "Material-UI",
    },
  ]);
  const [infos, setInfos] = useState([
    { fullName: "Umut Toker" },
    { title: "Front-End Developer" },
    { email: " utoker@gmail.com" },
    { github: " /suxlike" },
    { linkedin: " /in/utoker" },
    { location: " New York" },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa a obcaecati. Dolore odio eligendi quidem perspiciatis perferendis. Perspiciatis earum quibusdam in unde perferendis",
    },
  ]);
  const [edu, setEdu] = useState([
    {
      id: uuidv4(),
      course: "Full Stack JavaScript",
      university: "The Odin Project",
      startDate: "2021",
      endDate: "Present",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem facilis dolorem.",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      company: "Some Company",
      position: "Junior developer",
      startDate: "2020",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, deserunt",
    },
  ]);

  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      spacing={3}
      justifyContent="center"
      className="App"
      style={{ marginTop: 32 }}
    >
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <Typography color="primary" variant="h3" align="center">
            {"Resume Builder "}
          </Typography>
          <SetInfo setInfos={setInfos} infos={infos} />
          <Divider variant="middle" />

          <SetWork work={work} setWork={setWork} />
          <Button
            style={{ margin: 16 }}
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
          <SetEdu edu={edu} setEdu={setEdu} />
          <Button
            style={{ margin: 16 }}
            onClick={() => {
              setEdu([
                ...edu,
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
            add another education
            <AddBoxIcon />
          </Button>
          <SetSkills skills={skills} setSkills={setSkills} />
          <Button
            style={{ margin: 16 }}
            onClick={() => {
              setSkills([
                ...skills,
                {
                  id: uuidv4(),
                  skill: "",
                },
              ]);
            }}
            color="primary"
            variant="contained"
            size="small"
          >
            add another skill
            <AddBoxIcon />
          </Button>
          <SetInterests interests={interests} setInterests={setInterests} />
          <Button
            style={{ margin: 16 }}
            onClick={() => {
              setInterests([
                ...interests,
                {
                  id: uuidv4(),
                  skill: "",
                },
              ]);
            }}
            color="primary"
            variant="contained"
            size="small"
          >
            add another interest
            <AddBoxIcon />
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Print
          infos={infos}
          work={work}
          edu={edu}
          skills={skills}
          interests={interests}
        />
      </Grid>
    </Grid>
  );
}

export default App;
