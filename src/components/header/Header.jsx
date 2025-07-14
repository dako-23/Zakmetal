import './Header.css';
import { FaPhoneVolume } from "react-icons/fa";
import { scrollWithOffset } from '../../helpers/scrollWithOffset.js';

export default function Header() {
    return (
        <header className="section section-header">
            <div className="inner">
                <a href="#" className="site-logo"><img src="/ZAKMETAL.png.png" alt="picture" /></a>
                <a href="tel:+359876771557" className="contact">
                    <span className="pulse">
                        <FaPhoneVolume size={18} /> 0876 771 557
                    </span>
                </a>

                <nav>
                    <ul>
                        <li><a href="#top" onClick={(e) => scrollWithOffset(e, 'top', -100)} className="underline">Начало</a></li>
                        <li><a href="#za-nas" onClick={(e) => scrollWithOffset(e, 'za-nas', -150)} className="underline">За нас</a></li>
                        <li><a href="#uslugi" onClick={(e) => scrollWithOffset(e, 'uslugi', -200)} className="underline">Услуги</a></li>
                        <li><a href="#kontakti" onClick={(e) => scrollWithOffset(e, 'kontakti', -230)} className="underline">Контакти</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}