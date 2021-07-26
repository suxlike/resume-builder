import { useState } from "react";
import { Card, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import SetWork from "./SetWork";
import SetEdu from "./SetEdu";
import SetInfo from "./SetInfo";
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
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [uni, setUni] = useState("");
  const [uniStartDate, setUniStartDate] = useState("");
  const [uniEndDate, setUniEndDate] = useState("");
  const [uniDescription, setUniDescription] = useState("");
  const [work, setWork] = useState([
    { company: "asd" },
    { position: "asd" },
    { startDate: "2015" },
    { endDate: "2016" },
    { description: "description" },
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
            <SetWork
              work={work}
              setWork={setWork}
              setCompany={setCompany}
              setPosition={setPosition}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setDescription={setDescription}
            />
            <Divider variant="middle" />
            <SetEdu
              setCourse={setCourse}
              setUni={setUni}
              setUniStartDate={setUniStartDate}
              setUniEndDate={setUniEndDate}
              setUniDescription={setUniDescription}
            />
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
