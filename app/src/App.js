import React, { useEffect } from "react";
import "./App.css";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "192.168.1.121";

const App = () => {
  useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });

    var videoUrl2 = `ws://${ffmpegIP}:6790/`;
    var player2 = new JSMpeg.VideoElement("#video-canvas2", videoUrl2, {
      autoplay: true,
    });

    console.log(player);
  });

  return (
    <div id="body">
      <div
        id="title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          color: "blue",
        }}
      >
        Player stream RTSP
      </div>
      <div id="video-canvas" style={{ height: "540px", width: "960px" }}></div>
      <div id="video-canvas2" style={{ height: "540px", width: "960px" }}></div>

      <br/>
      test
    </div>
);


};

export default App;
