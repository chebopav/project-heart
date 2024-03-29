import React from 'react';
import heartbeat from '../img/heartbeat.png'
import spb from '../img/spb.png'
import '../css/Header.css'

const Header = () => {
    return (
        <div className="main">
            <img src={heartbeat} style={{height: 155}}/>
            <div className="textHeader">
                <div id="projectName">Сердце</div>
                <div id="slogan">Главный орган, пламенный мотор, хранилище души – все это о нем, о сердце, которое 24 часа в сутки, не замирая ни на секунду, качает кровь по нашему организму, поддерживая жизнь</div>
            </div>
            <div className="spbLogo">
                <div className="logoImg">
                    <img id="logoImgId" src={spb}/>
                </div>
                <h5>Работа ученицы 10 "А" класса школы № 551 Пожарской А.Н.</h5>
            </div>
        </div>
    );
};

export default Header;