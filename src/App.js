import { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Info from "./Info";
import SetWork from "./SetWork";
import SetEdu from "./SetEdu";
import SetInfo from "./SetInfo";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { v4 as uuidv4 } from "uuid";
import { Paper } from "@material-ui/core";
import Work from "./Work";
import Edu from "./Edu";
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
  const [infos, setInfos] = useState([
    { fullName: "Umut Toker" },
    { title: "Front-End Developer" },
    { email: "utoker@gmail.com" },
    { github: "https://github.com/suxlike" },
    { linkedin: "nickynick" },
    { location: "NY / LI" },
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa a obcaecati. Dolore odio eligendi quidem perspiciatis perferendis. Perspiciatis earum quibusdam in unde perferendis",
    },
  ]);
  const [edu, setEdu] = useState([
    {
      id: uuidv4(),
      course: "CS50: Introduction to Computer Science",
      university: "Harvard University ",
      startDate: "2020",
      endDate: "Present",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem facilis dolorem.",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      company: "IBM",
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
            style={{ margin: 20 }}
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
            style={{ margin: 20 }}
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
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <Info infos={infos} />
          <Divider variant="middle" />
          <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
            WORK EXPERIENCE
          </Typography>
          <Work work={work} />
          <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
            EDUCATION
          </Typography>
          <Edu edu={edu} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
