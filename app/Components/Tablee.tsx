// Menu.tsx

import React from 'react';
import './Components.css';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuProps {
  menuSections: MenuSection[];
}

const Menu: React.FC<MenuProps> = ({ menuSections }) => {
  return (
    <div className="menu-container">
      <h1>Toxic</h1>
      <div className="menu">
        {menuSections.map((section, index) => (
          <div key={index} className="menu-section">
            <h2>{section.title}</h2>
            <ul className="menu-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                  <p className="menu-price">{item.price.toFixed(2)} LE</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
