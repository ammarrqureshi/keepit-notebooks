import React from "react";

const NavItem = (props) => {
  const onIconHoverHandler = () => {
  };
  return (
    <div onMouseOver={onIconHoverHandler} className="navitem">
      <a href={"#"}>
        <img id={props.id} src={props.src} alt="" />
      </a>
      <div className="nav-callout">{props.callout}</div>
    </div>
  );
};

export default NavItem;
