import { motion } from 'framer-motion';
import SEO from '../seo/SEO.JSX';
import Banner from '../banner/Banner.jsx';
import ContactUs from '../contact-us/Contact-us.jsx';
import AboutUs from '../about-us/About-us.jsx';
import ForYou from '../for-you/For-you.jsx';
import Footer from '../footer/Footer.jsx';
import useAnimations from '../../hooks/useAnimations.js';
import Header from '../header/Header.jsx';


export default function HomePage() {

    const { aboutVariants, bannerVariants, contactVariants, footerVariants, forYouContainer } = useAnimations();

    return (
        <>
            <SEO
                title="ZAKMETAL | Изкупуване на автомобили"
                description="Бързо и изгодно изкупуване на автомобили за части – независимо от състоянието! Предлагаме коректни оценки, безплатно извозване и плащане на място. Доверете се на Zakmetal – сигурност, прозрачност и професионализъм."
                url="https://zakmetal.com/"
                image="https://res.cloudinary.com/dsdyzbyvy/image/upload/v1753194526/about_tojgec.avif"
            />
            <Header />
            <motion.div
                variants={bannerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <Banner />
            </motion.div>
            <motion.div
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <ContactUs />
            </motion.div>
            <motion.div
                variants={aboutVariants}
                className="motion-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <AboutUs />
            </motion.div>
            <motion.div
                variants={forYouContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <ForYou />
            </motion.div>
            <Footer />
        </>
    );
}
