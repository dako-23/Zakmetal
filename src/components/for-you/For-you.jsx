import './For-you.css'
import { motion } from 'framer-motion';
import { data } from '../constants/for-you-data.js';
import useAnimations from '../../hooks/useAnimations.js';

export default function ForYou() {

    const { forYouItem } = useAnimations()

    return (
        <section id='uslugi' className="section section-for-you">
            <div className="inner">
                {data.map(({ icon: Icon, title, subTitle, text }) =>
                    <motion.div
                        className="content"
                        key={title}
                        variants={forYouItem}
                    >
                        <span className="icon">
                            <Icon />
                        </span>
                        <div className="info">
                            <h3>{title}</h3>
                            <p>{subTitle}</p>
                            <p>{text}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}