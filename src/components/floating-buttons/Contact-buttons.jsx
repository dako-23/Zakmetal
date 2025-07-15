import './Contact-buttons.css'
import PhoneButton from './phone-button/Phone-button.jsx';
import ViberButton from "./viber-button/Viber-button.jsx";



export default function ContactButtons() {
    return (
        <div className="floating-buttons">
            <div className="button-wrapper">
            <PhoneButton />
            <ViberButton />
            </div>
        </div>
    );
}