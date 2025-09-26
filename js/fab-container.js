document.addEventListener('DOMContentLoaded', initFab);
document.addEventListener('fab:loaded', initFab);
document.addEventListener('components:loaded', initFab);

function initFab() {
  const container = document.getElementById('fab-container');
  if (!container) return;

  const wrapper = document.getElementById('contact-fab-wrapper');
  const infoCard = document.getElementById('contact-info-card');
  let contactBtn = document.getElementById('contact-fab-btn');

  // If button not present, create minimal phone FAB (so UI always has control)
  if (!contactBtn) {
    contactBtn = document.createElement('button');
    contactBtn.id = 'contact-fab-btn';
    contactBtn.title = 'Liên hệ ngay';
    contactBtn.setAttribute('aria-label', 'Liên hệ ngay');
    contactBtn.className = 'fab-item flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary-orange text-white rounded-full shadow-lg';
    contactBtn.innerHTML = '<i class="fas fa-phone"></i>';
    container.appendChild(contactBtn);
  }

  // show/hide infoCard helper
  const openCard = () => {
    if (!infoCard) return;
    infoCard.classList.remove('hidden','opacity-0','translate-y-2','pointer-events-none');
    infoCard.classList.add('block','opacity-100','translate-y-0','pointer-events-auto');
  };
  const closeCard = () => {
    if (!infoCard) return;
    infoCard.classList.add('hidden','opacity-0','translate-y-2','pointer-events-none');
    infoCard.classList.remove('block','opacity-100','translate-y-0','pointer-events-auto');
  };

  let opened = false;
  contactBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    opened = !opened;
    opened ? openCard() : closeCard();
  });

  document.addEventListener('click', (e) => {
    if (opened && wrapper && !wrapper.contains(e.target)) {
      opened = false;
      closeCard();
    }
  });

  // scroll-to-top button handling (if exists)
  const scrollBtn = container.querySelector('#scroll-to-top-btn');
  if (scrollBtn) {
    const update = () => {
      if (window.scrollY > 300) scrollBtn.classList.remove('hidden'); else scrollBtn.classList.add('hidden');
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}
