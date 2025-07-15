import './Phone-button.css'
import { FaPhone } from "react-icons/fa";


export default function PhoneButton() {
    return (
            <div className="phone-pos">
                <a
                    href="tel:+359879914560"
                    className="floating-button phone-bg fade-pulse"
                    aria-label="Свържи се с нас"
                >
                    <FaPhone size={26} />
                </a>
                <div className="info-bubble phone">
                    <strong>Тел.</strong><br />
                    0876 771 557
                </div>
            </div>
    );
}