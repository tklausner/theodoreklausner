import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WLogo from "../waffleLogo.png";
import ULogo from "../Signals@2x.png";

import Image from "react-bootstrap/Image";

function changeText(e, text) {
  let c = e.target;
  c.innerHTML = text;
  c.style.flexGrow = 1;
  c.style.paddingTop = 10;
  c.style.paddingBottom = 10;
  c.style.textAlign = "center";
}

export function About({ scrollPosition }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CardActionArea
            onMouseDown={(e) =>
              e.target.innerHTML.length > 25
                ? changeText(e, "Software Engineer")
                : changeText(
                    e,
                    "Detail and task oriented, I engineer software solutions using advanced data structures and algorithms."
                  )
            }
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "#00b8fa",
                color: "#4B4B4B",
              }}
            >
              <h1 className={classes.header}>Software Engineer</h1>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardActionArea
            onMouseDown={(e) =>
              e.target.innerHTML.length > 25
                ? changeText(e, "Entrepreneur")
                : changeText(
                    e,
                    "I am a deep-seated entrepeneur who wants to use technology for the betterment off society."
                  )
            }
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "#EC213F",
                color: "#2B2B2B",
              }}
            >
              <h1 className={classes.header}>Entrepreneur</h1>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardActionArea
            onMouseDown={(e) =>
              e.target.innerHTML.length > 25
                ? changeText(e, "Data Analyst")
                : changeText(
                    e,
                    "I create visualizations and predictions in extracting information from chaotic data"
                  )
            }
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "#EC213F",
                color: "#2B2B2B",
              }}
            >
              <h1 className={classes.header}>Data Analyst</h1>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardActionArea
            onMouseDown={(e) =>
              e.target.innerHTML.length > 25
                ? changeText(e, "Full Stack Developer")
                : changeText(e, "As a full stack developer, I ")
            }
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "#00b8fa",
                color: "#4B4B4B",
              }}
            >
              <h1 className={classes.header}>Full Stack Developer</h1>
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>Java</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>Python</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>Javascript</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>HTML</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>CSS</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>MATLAB</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>Node.js</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>React</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>React Native</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>git</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>MongoDB</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={[classes.paper, classes.paperSmall]}>
            <h3>AdobeXD</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#eee", color: "#4B4B4B" }}
          >
            <h1>Founder</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#fff", color: "#5B5B5B" }}
          >
            <h1>API Tester</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#fff", color: "#5B5B5B" }}
          >
            <h1>Contractor</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#eee", color: "#4B4B4B" }}
          >
            <h1>Teacher</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#eee", color: "#4B4B4B" }}
          >
            <h1>STEM Tutor</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#fff", color: "#5B5B5B" }}
          >
            <h1>IT Intern</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export function Project() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#00b8fa" }}
          >
            <Image src={WLogo} style={{ width: "100%" }} />;
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#EC213F" }}
          >
            <Image src={ULogo} style={{ width: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2%",
    marginRight: "2%",
  },
  header: {
    fontSize: "3em",
  },
  paper: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  paperSmall: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: "#eee",
    opacity: 0.9,
    color: theme.palette.text.secondary,
  },
  hover: {
    backgroundColor: "#00b8fa",
  },
}));
