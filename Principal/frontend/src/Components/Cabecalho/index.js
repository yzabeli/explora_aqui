import React from "react";
import './styles.css';
import { FaInstagram } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { FaLocationDot, FaGear } from "react-icons/fa6";


export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="menu-icon">
                <TiThMenuOutline />
            </div>
            <div className="logo-head">
                <h1>EXPLORE AQUI</h1>
            </div>
            <div className="icon-container">
                <a href="https://www.instagram.com/lucasberti/?hl=pt-br" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.google.com.br/maps/place/Senac+Bauru/@-22.3207517,-49.0697708,18z/data=!4m6!3m5!1s0x94bf67bbd5354fe1:0x696e1315626228ba!8m2!3d-22.3207393!4d-49.0684619!16s%2Fg%2F1tg6967c?entry=ttu" aria-label="Localização">
                    <FaLocationDot />
                </a>
                <a href='./' aria-label="Configurações">
                    <FaGear />
                </a>
            </div>
        </header>
    );
}
