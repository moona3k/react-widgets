import React from 'react';
import css from './tabs.css';

const HeaderTab = (props) => {
    
    let titles = props.titles.map(title => {
        return (
            <h1>{title}</h1>
        )
    })

    return (
        <div className="header-tab">
            {titles}
        </div>
    )
};

export default HeaderTab;

