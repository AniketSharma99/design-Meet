import React, { useEffect,useState } from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import { connect } from "react-redux";
import * as webRTCHandler from "../utils/webRTCHandler";
import Overlay from "./Overlay";
import ErrorPopup from "../Popup/ErrorPopup";
import "./RoomPage.css";


const RoomPage = ({
  roomId,
  identity,
  isRoomHost,
  showOverlay,
  connectOnlyWithAudio,
  valid,
  showChat,
  showParticipants,
  hostId,
  shareBtn
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!isRoomHost && !roomId) {
      const siteUrl = window.location.origin;
      window.location.href = siteUrl;
    } else {
     webRTCHandler.GetLocalPreviewAndInitRoomConnection(
        isRoomHost,
        identity,
        roomId,
        connectOnlyWithAudio,
        hostId
      )
      console.log(valid);  
    }
    // eslint-disable-next-line
  }, []);
useEffect(()=>{
  if(!valid && !connectOnlyWithAudio){
    setShow(true)
  }
},[valid,connectOnlyWithAudio])


window.addEventListener('popstate', function(){
  		window.location.reload()
  	}, false);
  


useEffect(()=>{
  console.log("Shhhhaaaarrreee ssscccrren",shareBtn );
  let aj= document.querySelector(".shared");
  if(aj){
    if(shareBtn[0]?.Buttons) aj?.classList.add("flipped");
    else{
      aj?.classList.remove("flipped")
    }
  }
 
   
},[shareBtn])    
 
  return (
    <div className="room_container">
      { showParticipants && <ParticipantsSection />}
      <ErrorPopup isOpen={show}/>
      <VideoSection roomId={roomId}  />
      {showChat && <ChatSection />}
      {/* <RoomLabel roomId={roomId} /> */}
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
