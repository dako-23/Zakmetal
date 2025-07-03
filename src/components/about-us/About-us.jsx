import './About-us.css'

export default function AboutUs() {
    return (
        <section className="section section-about">
            <div className="inner">
                <div className="about-image">
                </div>
                <div className="about-content">
                    <h2>Кои сме ние</h2>
                    <h3>Надежден партньор за изкупуване на автомобили</h3>
                    <p>
                        Zakmetal е бързоразвиваща се компания за изкупуване и рециклиране на стари автомобили.
                        Работим честно и прозрачно — гарантираме най-добрата цена и бърза сделка.
                    </p>
                    <ul className="highlights">
                        <li>✔️ Над 10 години опит</li>
                        <li>✔️ 5000+ изкупени автомобила</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}