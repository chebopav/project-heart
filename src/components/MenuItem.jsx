import React from 'react';
import '../css/MenuItem.css'

const MenuItem = (props) => {
    function clickMenuItem(event) {
        Array.from(document.getElementsByClassName("menuButton")).forEach(element => element.classList.remove('pressed'))
        event.target.classList.add('pressed');
        console.log(event.target.classList)
    }

    return (
        <div className="menuItem">
            <button className="menuButton" onClick={clickMenuItem}>{props.menuItemName}</button>
        </div>
    );
};

export default MenuItem;