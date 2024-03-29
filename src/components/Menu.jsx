import React from 'react';
import MenuItem from "./MenuItem";
import '../css/Menu.css'

const Menu = () => {
    const menuElementsProp = [
        {menuItemName: 'Сердце как объект'},
        {menuItemName: 'Функции серца и кровеносной системы'},
        {menuItemName: 'Строение сердца и Кровеносной системы'},
        {menuItemName: 'Сердечно-сосудистые заболевания'},
        {menuItemName: 'Полезные ссылки'}
    ];


    return (
        <div className="mainMenuClass">
            {menuElementsProp.map(elem =>
                <MenuItem menuItemName={elem.menuItemName}/>
            )}
        </div>
    );
};

export default Menu;