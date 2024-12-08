import React from 'react';
import style from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.footer_menu}>
                <div className={style.footer_column}>
                    <li className={style.footer_item}>
                        <a
                            href="https://www.instagram.com/_marcosmarinho98/"
                            className={style.footer_link}
                        >
                            Instagram
                        </a>
                    </li>
                    <li className={style.footer_item}>
                        <a
                            href="https://github.com/marcosfrancomarinho/cubo-serie"
                            className={style.footer_link}
                        >
                            GitHub
                        </a>
                    </li>
                </div>
                <div className={style.footer_column}>
                    <li className={style.footer_item}>
                        <a
                            href="https://www.linkedin.com/in/marcos-franco-marinho-031b55187/"
                            className={style.footer_link}
                        >
                            Linkedin
                        </a>
                    </li>
                    <li className={style.footer_item}>
                        <a
                            href="https://www.facebook.com/marcos.marinho.16547/?locale=pt_BR"
                            className={style.footer_link}
                        >
                            Facebook
                        </a>
                    </li>
                </div>
            </ul>
            <h3 className={style.dev}>
                {' '}
                &copy; marcosfrancomarinho
            </h3>
        </footer>
    );
};
export default Footer;
