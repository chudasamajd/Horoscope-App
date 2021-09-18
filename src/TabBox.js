import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = { children: "test", index: 1, value: "working" };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
    borderRadius: 10,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.02)",
  },
  tabs: {
    marginTop: 100,
    width: 200,
    height: 280,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const TabBox = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="Tab-main">
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Today" {...a11yProps(0)} />
            <Tab label="Tomorrow" {...a11yProps(1)} />
            <Tab label="Passion" {...a11yProps(2)} />
            <Tab label="Dating" {...a11yProps(3)} />
            <Tab label="Marriage" {...a11yProps(4)} />
            <Tab label="Financial" {...a11yProps(5)} />
          </Tabs>
          <TabPanel
            value={value}
            index={0}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            The second week of July is a time to focus on your own family,
            especially around the New Moon on July 9th. With Mercury also moving
            into your family zone a couple of days later, you should be able to
            express your sentiments easily enough. The Mercury-Jupiter trine on
            July 12th is very healing, especially if there have been family
            estrangements. On July 21st, Venus moves into your everyday
            responsibilities zone, easing some of the tension which may have
            arisen between you and colleagues recently. The Sun’s arrival in
            your leadership zone on July 22nd boosts your confidence once more
            and the Full Moon in your social zone on July 23rd cements your
            position at the very heart of your community. Once Mercury moves
            into your leadership zone on July 27th, you will be well placed to
            advance. Don’t lose patience with yourself on July 29th when Mars
            opposes Jupiter, newly retrograded into your ideals zone, reminding
            you of what you don’t yet have. Just hours later, your ruling planet
            moves into industrious Virgo, promising that August will be a month
            for taking great strides forward.Get ready for a shakeup in 2020,
            Aries. Everything you thought you knew about your long-term goals
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            Item Two
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            Item Three
          </TabPanel>
          <TabPanel
            value={value}
            index={3}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            Item Four
          </TabPanel>
          <TabPanel
            value={value}
            index={4}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            Item Five
          </TabPanel>
          <TabPanel
            value={value}
            index={5}
            style={{ width: 900, marginTop: 50, textAlign: "justify" }}
          >
            Item Six
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TabBox;
