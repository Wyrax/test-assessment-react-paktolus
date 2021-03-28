import React, { Component } from 'react';

const footerStyle = {
  backgroundColor: "#ddd",
  // fontSize: "20px",
  // color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  // padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  // height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  // width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      <h4>Footer</h4>
        <p>© Copyright</p>
      </div>
    </div>
  );
}

export default Footer;