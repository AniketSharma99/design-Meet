import React from "react";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
// import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import { connect } from "react-redux";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import ParticipantsBtn from "./ParticipantsBtn";
import ChatBtn from "./ChatBtn";
import Morebtn from "./Morebtn";
// import Recording from "./Recording";


const VideoButtons = ({ connectOnlyWithAudio, roomId }) => {
  // const { connectOnlyWithAudio } = props;

  return (
    <div className="video_buttons_container">
      <ParticipantsBtn/>
      <MicButton />
      {!connectOnlyWithAudio && <CameraButton />}
      <LeaveRoomButton />
      {!connectOnlyWithAudio && <SwitchToScreenSharingButton />}
      <ChatBtn/>
      {/* <Recording/> */}
      <Morebtn  roomId={roomId}/>
      {/* <button>chat</button> */}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(VideoButtons);
