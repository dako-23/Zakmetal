import './Header.css';

export default function Header() {
    return (
        <header className="section section-header">
            <div className="inner">
                <a href="#" className="site-logo"><img src="/ZAKMETAL.png.png" alt="picture"/></a>
                <a href="tel:+359876771557" className="contact">
                    <span className="pulse">
                        ☎ 0876 771 557
                    </span>
                </a>

                <nav>
                    <ul>
                        <li><a href="#top" className="underline">Начало</a></li>
                        <li><a href="#za-nas" className="underline">За нас</a></li>
                        <li><a href="#uslugi" className="underline">Услуги</a></li>
                        <li><a href="#kontakti" className="underline">Контакти</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}