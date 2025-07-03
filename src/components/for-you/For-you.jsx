import './For-you.css'
import { data } from '../constants/for-you-data.js';

export default function ForYou() {
    return (
        <section className="section section-for-you">
            <div className="inner">
                {data.map(({ icon: Icon, title, subTitle, text }) =>
                    <div className="content" key={title}>
                        <span className="icon">
                            <Icon/>
                        </span>
                        <div className="info">
                            <h3>{title}</h3>
                            <p>{subTitle}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}