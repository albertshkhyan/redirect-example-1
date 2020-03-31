import React from "react";

import "./style.scss";

import { Redirect } from "react-router";
import { connect } from "react-redux";

const Messages = ({ siginIn }) => {
  // console.log(siginIn.isAout)
  if (!siginIn.isAout) {
    console.log("redirect");
    return <Redirect to="/Register" />;
  }
  // else {
  return (
    <div className="Messages">
      Messages
      <h3>Direct Message</h3>
      <div>
        <input placeholder="search Person" type="search" />
      </div>
      <div>
        <textarea />
      </div>
      <input type="button" value="send" />
    </div>
  );
  // }
};
const mapStateToProps = ({ siginIn }) => ({ siginIn });
export default connect(mapStateToProps)(Messages);
