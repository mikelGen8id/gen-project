import React, { useState } from "react";

import data from "./data";
import "./styles.css";

export default () => {
  const [activeSlide, setactiveSlide] = useState(2);

  const next = () =>
    activeSlide < data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns text-black">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};
