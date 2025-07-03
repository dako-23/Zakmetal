import './Contact-us.css'

export default function ContactUs() {
    return (
        <section id='kontakti' className="section section-contact">
            <div className="inner">
                <div className="content">
                    <h2>ВЗЕМИ ОФЕРТА БЪРЗО И ЛЕСНО</h2>
                    <form className="form">
                        <div className="fields">
                            <div className="field icon">
                                <input type="text" placeholder="Вашето име" required />
                            </div>
                            <div className="field icon">
                                <input type="number" placeholder="359XXXXXXXXX" required />
                            </div>
                        </div>

                        <a href="#" type="submit" className="submit-btn">
                            <span className="icon">💬</span>
                            ИЗПРАТИ
                        </a>
                    </form>

                </div>
            </div>
        </section>
    );
}