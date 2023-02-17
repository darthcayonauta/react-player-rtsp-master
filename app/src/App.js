import React, { useEffect } from "react";

import JSMpeg from "@cycjimmy/jsmpeg-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery.slim"
import "popper.js/dist/esm/popper"


const ffmpegIP = "192.168.78.100";

const App = () => {
  useEffect(() => {
    const videoUrl = `ws://${ffmpegIP}:6789/`;
    const player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });

    const videoUrl2 = `ws://${ffmpegIP}:6790/`;
    const player2 = new JSMpeg.VideoElement("#video-canvas2", videoUrl2, {
      autoplay: true,
    });

    console.log(player);
    console.log(player2)
  });

  const cam01 = "Cámara 1";
  const ip_cam1 = "192.168.78.102" ;
  const cam02 = "Cámara 2";
  const ip_cam2 = "192.168.78.104" ;

  return (
    <div id="body" >
      <div className="row">
        <div className="col-sm-12">
        <p className="h2">
           Player stream RTSP / React
        </p>
        <hr />
        <br />
        <br/>
       
        
        <table className="table table-responsive table-dark table-hover table-bordered">
          <tr>
          
            <td>
              <div  id="video-canvas" style={{ height: "540px", width: "960px"  }}>Cam01</div> 
              <br />
                {cam01} : {ip_cam1}
            </td>
            <td>
              <div  id="video-canvas2" style={{ height: "540px", width: "960px" }}>Cam02</div>
              <br />
              {cam02} : {ip_cam2}
            </td>
          </tr>
        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      </div>
    </div>
);


};

export default App;
