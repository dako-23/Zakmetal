export function scrollWithOffset(e, id, offset) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}
