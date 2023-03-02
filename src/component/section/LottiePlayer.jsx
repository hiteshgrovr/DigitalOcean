
import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function lottiePlayer(propss) {
// const lottiePlayer =(props)=>{
    return (
        <Player
            autoplay
            loop
            src={propss.link}
            style={{ height: '450px', width: '450px' }}
        >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    )
}


