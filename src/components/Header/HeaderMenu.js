import React, { Component } from 'react';
import './Header.css'


class Header extends React.Component {

    render() {
        return(
            <div class="header">
                <div class = "fade-in-about-us">
                <h1 class="h1-judul">Belajar Coding Itu Menyenangkan</h1>
                <p class ="p-judul">Bersama Komunitas Belajar Program</p>
                <p class="p-judul">dan berbagai tutorial tentang tips pemrograman</p>
                <img src = {process.env.PUBLIC_URL + '/img/about-us.svg'} img id="about-us"/>           
                </div>
            </div> 
        )
    }
}

export default Header;