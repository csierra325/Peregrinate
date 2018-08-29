import React, {Component} from 'react';

class Background extends Component {


    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src="background.mp4" type="video/mp4" />
                
            </video>
        )
    }
};

export default Background;



