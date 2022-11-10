import React from "react";
import {Howl} from "howler";
import { isNonEmptyArray } from "@apollo/client/utilities";

function PlaySound(){
    const soundSrc = "./Welcome-back.mp3";
    const callMySound = (src) =>{
        const sound = new Howl({
            src,
            html5:true,
        });
        sound.play();
    };
    return(
        <div>
            <button style={{backgroundColor:"white", border:"none"}} onClick={()=> callMySound(soundSrc)}><img width="30px" height = "30px" src="audio.png"/></button>
            
        </div>
    )
}
export default PlaySound;