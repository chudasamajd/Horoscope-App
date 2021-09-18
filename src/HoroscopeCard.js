import React, { useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";
import tempimg from "./images/leo.svg";
import TabBox from "./TabBox";

const HoroscopeCard = ({ sign }) => {
  useEffect(() => {
    async function getData() {
      const cardobj = {};
      try {
        const siteUrl = `/signs/${sign}/`;

        const { data } = await axios.get(siteUrl);

        const $ = cheerio.load(data);

        const keys = [
          "today",
          "tomorrow",
          "passion",
          "dating",
          "marriage",
          "financial",
        ];

        const elementSelector = [
          "#span-79-744",
          "#span-90-744",
          "#text_block-20-778",
          "#text_block-15-778",
          "#text_block-16-778",
          "#text_block-24-778",
        ];
        // const elementSelector = "#text_block-20-778";

        // const today = $(elementSelector).text();
        // console.log(today);
        let keyind = 0;

        $(elementSelector).each((ind, val) => {
          const value = $(val).text();

          cardobj[keys[keyind]] = value;
          keyind++;
        });
      } catch (err) {
        console.log(err);
      }
      console.log(cardobj);
    }
    getData();
  }, []);

  return (
    <>
      <div className="horoscope-card">
        <div className="big-capsule">
          <img src={tempimg} alt="card img" />

          <div className="summary">
            <ul>
              <li>
                <div className="summary-title">Symbol</div>
                <div className="summary-msg">The Ram</div>
              </li>
              <li>
                <div className="summary-title">Element</div>
                <div className="summary-msg">Fire</div>
              </li>
              <li>
                <div className="summary-title">Quality</div>
                <div className="summary-msg">Cardinal</div>
              </li>
            </ul>
          </div>
        </div>

        <TabBox />
      </div>
    </>
  );
};
export default HoroscopeCard;
