import './Footer.css'

export default function Footer() {
    return (
        <footer className="section section-footer">
            <div className="inner">
                <div className="table">
                    <img src="/ZAKMETAL.png.png" alt=""/>

                        <p>Zakmetal.net извършва изкупуване и рециклиране на автомобили за скрап в цяла България. Бързо обслужване, документ за КАТ и плащане на място.</p>
                </div>
                <div className="table">
                    <h3>Полезни връзки</h3>
                    <ul>
                        <li><a href="#">Начало</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">За нас</a></li>
                        <li><a href="#">Контакти</a></li>
                    </ul>
                </div>
                <div className="table footer-info">
                    <h3>Връзка с нас</h3>
                    <ul>
                        <li>☎ 0876 771 557</li>
                        <li>🕰 24/7 обслужване</li>
                    </ul>

                </div>
            </div>
            <div className="secondary-inner">
                <p><span>Zakmetal.net</span> — Всички права запазени.</p>
            </div>
        </footer>
    );
}