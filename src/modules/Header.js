import React from 'react';

const Header = (props) => {
    return (
        <header className="header" id="header">
            {props.title}
        </header>
    );
};

export default Header;