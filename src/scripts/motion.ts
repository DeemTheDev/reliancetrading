/**
 * Light-touch motion for the whole site. Everything here is progressive
 * enhancement: without JavaScript (or with "reduce motion" enabled) the page
 * is fully visible and static.
 *
 *  - [data-reveal]          fade/slide sections in as they scroll into view
 *  - [data-parallax="0.2"]  background layers that drift slower than the page
 *  - #site-header           gets .is-scrolled once the page is scrolled
 *  - #back-to-top           floating button that appears after 600px
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- scroll reveal ----------------------------------------------------------
const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---- parallax backgrounds ---------------------------------------------------
const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const desktop = window.matchMedia('(min-width: 768px)');
let parallaxActive = false;

function updateParallax() {
  const vh = window.innerHeight;
  for (const el of parallaxEls) {
    const host = el.parentElement;
    if (!host) continue;
    const rect = host.getBoundingClientRect();
    if (rect.bottom < -100 || rect.top > vh + 100) continue; // off screen
    const speed = parseFloat(el.dataset.parallax || '0.2');
    const centreOffset = rect.top + rect.height / 2 - vh / 2; // 0 when the block is centred in the viewport
    const limit = rect.height * 0.16; // the layer is oversized by ~18% so never show its edges
    const shift = Math.max(-limit, Math.min(limit, -centreOffset * speed));
    el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
  }
}

function enableParallax() {
  if (parallaxActive || reduceMotion || !parallaxEls.length) return;
  parallaxActive = true;
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateParallax();
}

if (desktop.matches) enableParallax();
desktop.addEventListener('change', (e) => {
  if (e.matches) enableParallax();
  else parallaxEls.forEach((el) => (el.style.transform = ''));
});

// ---- header + back-to-top ---------------------------------------------------
const header = document.getElementById('site-header');
const backToTop = document.getElementById('back-to-top');
function onPageScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 10);
  backToTop?.classList.toggle('is-visible', y > 600);
}
window.addEventListener('scroll', onPageScroll, { passive: true });
onPageScroll();
