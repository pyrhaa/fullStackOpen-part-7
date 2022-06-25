import { useState, forwardRef, useImperativeHandle } from "react";

const ShowHide = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="showContent">
        {props.children}
        <button className="hide" onClick={toggleVisibility}>
          hide
        </button>
      </div>
    </div>
  );
});

ShowHide.displayName = "ShowHide";

export default ShowHide;
