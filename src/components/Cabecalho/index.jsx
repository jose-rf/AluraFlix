import React from 'react';
import { Link } from 'react-router-dom';
import logo from './LogoMain.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';
import Novovideo from '../../pages/NovoVideo'

function Cabecalho() {
    return (
        <>
            <header className={styles.cabecalho}>
                <Link to="/">
                    <img src={logo} alt="Logo Aluraflix" />
                </Link>

                <nav>
                    <CabecalhoLink to="/">
                        Home
                    </CabecalhoLink>
                    <CabecalhoLink to="/">
                        Novo Video
                    </CabecalhoLink>
                </nav>


            </header>

        </>
    );
}

export default Cabecalho;
