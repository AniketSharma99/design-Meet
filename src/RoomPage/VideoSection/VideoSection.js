import React from "react";
import VideoButtons from "./VideoButtons";

const VideoSection = ({roomId}) => {
  return (
    <div className="video_section_container">
      
      <VideoButtons roomId={roomId} />
    </div>
  );
};

export default VideoSection;
