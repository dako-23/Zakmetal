import { scrollWithOffset } from "../helpers/scrollWithOffset.js"

export default function useScroll() {

    const scrollToTop = (e) => {
        scrollWithOffset(e, 'top', -100)
    }

    const scrollToZaNas = (e) => {
        scrollWithOffset(e, 'za-nas', -150)
    }

    const scrollToUslugi = (e) => {
        scrollWithOffset(e, 'uslugi', -200)
    }

    const scrollToKontakti = (e) => {
        scrollWithOffset(e, 'kontakti', -230)
    }

    return {
        scrollToTop,
        scrollToZaNas,
        scrollToUslugi,
        scrollToKontakti
    }
}