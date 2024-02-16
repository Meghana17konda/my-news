import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          Author: Meghana Konda <br />
          <a href="mailto:meghankonda17@gmail.com">meghnakonda17@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default Footer;