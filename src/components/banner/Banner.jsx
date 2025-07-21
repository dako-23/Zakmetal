import { scrollWithOffset } from '../../helpers/scrollWithOffset.js';
import './Banner.css'
export default function Banner() {
    return (
        <section id='top' className="section section-banner">
            <div className="inner animate-fade-slide">
                <h2>Време ли е да се сбогувате със стария си автомобил?</h2>
                <a href="#kontakti" onClick={(e) => scrollWithOffset(e, 'kontakti', -230)} className="button">Свържи се с нас</a>
            </div>
        </section>
    );
}