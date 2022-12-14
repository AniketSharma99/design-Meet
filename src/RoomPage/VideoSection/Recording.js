import React, { useEffect, useRef, useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
import down from "../../resources/images/Icons/down.svg"

const Recording = () => {
    const [btn, setBtn] = useState(0)
    const [light, setLight] = useState(false);
    const interval = useRef(null);
    const {
        status,
        startRecording: startRecord,
        stopRecording: stopRecord,
        mediaBlobUrl
    } = useReactMediaRecorder({ screen: true, audio: true });

    const handleClick = () => {
        if (btn === 0) {
            setBtn(1)
            startRecord();
        } else {
            setBtn(0)
            stopRecord();
        }
        console.log("recoding click")
    }

    useEffect(() => {
        if(status === "recording"){
                interval.current = setInterval( function recordStart () {
                    setLight(prev=>!prev);
                }, 1000);
            }
            else{
                if (interval.current) {clearInterval(interval.current);setLight(false)}
        }
    }, [status])

  return (
    <>
    <div></div>
        <div className="video_button_container" style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <svg onClick={handleClick} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="60px">
                <path d="M19.672,21h-2.171v2h2.171c.552,0,1-.449,1-1s-.448-1-1-1Z" />
                <path d="M42,7H6c-2.757,0-5,2.243-5,5v24c0,2.757,2.243,5,5,5H42c2.757,0,5-2.243,5-5V12c0-2.757-2.243-5-5-5ZM5,13c0-1.103,.897-2,2-2h4c.552,0,1,.448,1,1s-.448,1-1,1H7v4c0,.552-.448,1-1,1s-1-.448-1-1v-4Zm6,24H7c-1.103,0-2-.897-2-2v-4c0-.552,.448-1,1-1s1,.448,1,1v4h4c.552,0,1,.448,1,1s-.448,1-1,1Zm-1.5-10c-1.657,0-3-1.343-3-3s1.343-3,3-3,3,1.343,3,3-1.343,3-3,3Zm12.845,.26c.409,.372,.438,1.004,.067,1.413-.197,.217-.469,.327-.74,.327-.24,0-.481-.086-.672-.26l-3.499-3.181v2.441c0,.552-.448,1-1,1s-1-.448-1-1v-8c0-.552,.448-1,1-1h3.171c1.654,0,3,1.346,3,3,0,1.594-1.249,2.901-2.819,2.995l2.492,2.266Zm6.527-4.26c.552,0,1,.448,1,1s-.448,1-1,1h-3v2h3c.552,0,1,.448,1,1s-.448,1-1,1h-4c-.552,0-1-.448-1-1v-8c0-.552,.448-1,1-1h4c.552,0,1,.448,1,1s-.448,1-1,1h-3v2h3Zm3.264,4.536c-1.95-1.949-1.95-5.122,0-7.071,.944-.944,2.2-1.465,3.536-1.465s2.591,.52,3.535,1.465c.391,.391,.391,1.024,0,1.414s-1.023,.39-1.414,0c-.567-.567-1.32-.879-2.121-.879s-1.555,.312-2.122,.879c-1.169,1.17-1.169,3.073,0,4.243,.567,.567,1.32,.879,2.122,.879s1.554-.312,2.121-.879c.39-.391,1.023-.391,1.414,0,.391,.39,.391,1.024,0,1.414-.944,.944-2.2,1.465-3.535,1.465s-2.591-.52-3.536-1.465Zm10.864,7.464c0,1.103-.897,2-2,2h-4c-.552,0-1-.448-1-1s.448-1,1-1h4v-4c0-.552,.448-1,1-1s1,.448,1,1v4Zm0-18c0,.552-.448,1-1,1s-1-.448-1-1v-4h-4c-.552,0-1-.448-1-1s.448-1,1-1h4c1.103,0,2,.897,2,2v4Z" fill={light ? "#DC143C" : "#fff"} /></svg>

            {mediaBlobUrl && status === 'stopped' && (
                <a href={mediaBlobUrl} download={"mu-meet-video.mp4"} >

                    <img alt="rec" src={down} style={{ height: "22px", marginLeft: "22px", color: "#fff" }} />


                </a>
            )}
        </div>
    </>
  )
}

export default Recording