import React from "react";
import {Howl} from "howler";
import { isNonEmptyArray } from "@apollo/client/utilities";

function PlaySound(props){
    const soundSrc = props.src;
    const callMySound = (src) =>{
        const sound = new Howl({
            src,
            html5:true,
        });
        sound.play();
    };
    return(
        <div>
            <button style={{backgroundColor:"rgba(255, 255, 255, 0)", border:"none"}} onClick={()=> callMySound(soundSrc)}><img width="30px" height = "30px" src="audio.png"/></button>
            
        </div>
    )
}
export default PlaySound;