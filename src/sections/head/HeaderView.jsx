import React from "react";


import HeaderStyle from './HeaderView.module.css';

class HeaderView extends React.Component {

    render() {
        return <div className={HeaderStyle.header}>

            <div className={HeaderStyle.header__navigation}>
                
                <a href="#" className={HeaderStyle.header__navigation_item}>
                    contacts
                </a>
                <a href="#" className={HeaderStyle.header__navigation_item}>
                    abut
                </a>
                <a href="#" className={HeaderStyle.header__navigation_item}>
                    services
                </a>

                <div className={HeaderStyle.header__logo}>
                    <img src="asserts/icons/moustache.svg" alt="logo" />
                </div>

            </div>
            <div className={HeaderStyle.header__baner}>
                <img src="asserts/baner.jpg" alt="banner" />

            </div>
        </div>
    }
}

export default HeaderView;