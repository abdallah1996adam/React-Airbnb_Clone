import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from "react-router-dom";
// import Search from './Search';
import logo from './airbnb_logo.png';
import user_icon from './user.png';
import list from './menu.png';
import ('./header.scss');

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="header" >
                <Link to="/">
                    <img className="header__logo"
                    src={logo}
                    alt="airbnb logo"
                    />
                </Link>
                {/* <Search /> */}
                <div className="header__profil" onClick={() => setIsOpen(true)}>
                    <img src={list} alt="list-icone"/>
                    <img src={user_icon} alt="user-icone"/>
                </div>
            </header>  
            <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                <span><Link to="/signup">Inscription</Link></span>
                <span><Link to="/login">Connexion</Link></span>
                <span><Link to="/signup?h=1">Devenez hôte</Link></span>
            </Modal>
        </>
    )
}

export default Header;