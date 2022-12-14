import React from "react";
import ParticipantsLabel from "./ParticipantsLabel";
import Participants from "./Participants";
// import DirectChat from './DirectChat/DirectChat';

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
      <div className="participation-wrapper">
      <ParticipantsLabel />
      <Participants />
      {/* <DirectChat /> */}
      </div>
     
    </div>
  );
};

export default ParticipantsSection;
