import React from 'react';
import '../css/MenuItem.css'

const MenuItem = (props) => {
    function clickMenuItem(event) {
        Array.from(document.getElementsByClassName("menuButton")).forEach(element => element.classList.remove('pressed'))
        props.func(props.menuItemName);


        if (props.menuItemName === 'Строение сердца и кровеносной системы') {
            document.getElementById('subMenuBar').style.display = 'block';
            Array.from(document.getElementsByClassName("menuButton")).filter(element => element.innerHTML === 'Слой за слоем').forEach(element => element.classList.add('pressed'))
            event.target.classList.add('pressed');
        } else {
            if (!props.isSubLevel) {
                document.getElementById('subMenuBar').style.display = 'none';
            } else {
                Array.from(document.getElementsByClassName("menuButton")).filter(element => element.innerHTML === 'Строение сердца и кровеносной системы').forEach(element => element.classList.add('pressed'))
            }
            event.target.classList.add('pressed');
        }

    }

    return (
        <div className="menuItem">
            <button className="menuButton" onClick={clickMenuItem}>{props.menuItemName}</button>
        </div>
    );
};

export default MenuItem;