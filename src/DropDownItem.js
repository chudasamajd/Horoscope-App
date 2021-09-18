import React from "react";

const DropDownItem = (props) => {
  return (
    <>
      <div
        className="item"
        onClick={() => {
          props.onClick(props.data.label);
        }}
      >
        <div className="zodiac-sign">
          <img src={require(`${props.data.imgurl}`).default} alt="sign" />
        </div>
        <div className="zodiac-label">{props.data.label}</div>
        <div className="zodiac-date">{props.data.date}</div>
      </div>
    </>
  );
};

export default DropDownItem;
