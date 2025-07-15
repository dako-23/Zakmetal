import './Viber-button.css'
import { FaViber } from "react-icons/fa";


export default function ViberButton() {
    return (
        <>
        <div className="viber-pos">
            <a
                href="viber://chat?number=%2B359876771557"
                className="floating-button viber-bg fade-pulse"
                aria-label="Свържи се с Viber"
            >
                <FaViber size={32} />
            </a>
            <div className="info-bubble viber">
                <strong>Viber</strong><br />
                0876 771 557
            </div>
        </div>
        </>

    );
}