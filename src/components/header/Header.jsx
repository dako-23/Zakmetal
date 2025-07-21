import './Header.css';
import { FaPhoneVolume } from "react-icons/fa";
import useScroll from '../../hooks/useScroll.js';

export default function Header() {

    const { scrollToTop, scrollToKontakti, scrollToUslugi, scrollToZaNas } = useScroll()


    return (
        <header className="section section-header">
            <div className="inner">
                <a href="#top" onClick={scrollToTop} className="site-logo"><img src="/ZAKMETAL.png.png" alt="picture" /></a>
                <a href="tel:+359876771557" className="contact">
                    <span className="pulse">
                        <FaPhoneVolume size={18} /> 0876 771 557
                    </span>
                </a>

                <nav>
                    <ul>
                        <li><a href="#top" onClick={scrollToTop} className="underline">Начало</a></li>
                        <li><a href="#za-nas" onClick={scrollToZaNas} className="underline">За нас</a></li>
                        <li><a href="#uslugi" onClick={scrollToUslugi} className="underline">Услуги</a></li>
                        <li><a href="#kontakti" onClick={scrollToKontakti} className="underline">Контакти</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}