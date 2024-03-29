import React from 'react';
import heartbeatGif from '../img/heartbeat.gif'
import '../css/HeaderFooter.css'

const HeaderFooter = () => {
    return (
        <div className="headerFooter">
            <img src={heartbeatGif}/>
        </div>
    );
};

export default HeaderFooter;