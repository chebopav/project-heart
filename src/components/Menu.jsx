import React from 'react';
import MenuItem from "./MenuItem";
import '../css/Menu.css'

const Menu = (props) => {
    function changeState(val) {
        props.selectedValue(val);
    }

    return (
        <div className="mainMenuClass">
            {props.menuElemets.map(elem =>
                <MenuItem key={elem.id} menuItemName={elem.menuItemName} func={changeState} isSubLevel={elem.isSubLevel}/>
            )}
        </div>
    );
};

export default Menu;