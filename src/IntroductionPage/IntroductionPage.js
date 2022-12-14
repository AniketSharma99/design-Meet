import React, { useEffect } from "react";
import Mu from "../resources/images/Mu.png"
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";

import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={Mu} className="introduction_page_image" alt="img"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
