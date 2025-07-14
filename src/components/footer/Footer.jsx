import { scrollWithOffset } from '../../helpers/scrollWithOffset.js';
import './Footer.css'
import { FaPhoneVolume, FaClock } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="section section-footer">
            <div className="inner">
                <div className="table">
                    <img src="/ZAKMETAL.png.png" alt="" />

                    <p>Zakmetal.net извършва изкупуване и рециклиране на автомобили за скрап в цяла България. Бързо обслужване, документ за КАТ и плащане на място.</p>
                </div>
                <div className="table">
                    <h3>Полезни връзки</h3>
                    <ul>
                        <li><a href="#top" onClick={(e) => scrollWithOffset(e, 'top', -100)} >Начало</a></li>
                        <li><a href="#za-nas" onClick={(e) => scrollWithOffset(e, 'za-nas', -150)} >Услуги</a></li>
                        <li><a href="#uslugi" onClick={(e) => scrollWithOffset(e, 'uslugi', -200)} >За нас</a></li>
                        <li><a href="#kontakti" onClick={(e) => scrollWithOffset(e, 'kontakti', -230)}>Контакти</a></li>
                    </ul>
                </div>
                <div className="table footer-info">
                    <h3>Връзка с нас</h3>
                    <ul>
                        <li><FaPhoneVolume /> 0876 771 557</li>
                        <li><FaClock size={14} /> 24/7 обслужване</li>
                    </ul>

                </div>
            </div>
            <div className="secondary-inner">
                <p><span>© {new Date().getFullYear()} Zakmetal.net</span> — Всички права запазени.</p>
            </div>
        </footer>
    );
}