const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', String(opened));
});
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(row => {
      row.classList.remove('open');
      row.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      row.querySelector('.faq-question span').textContent = '＋';
    });
    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('span').textContent = '−';
    }
  });
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent =
    document.body.classList.contains('dark') ? '☾' : '☼';
});

const translations = {
  en: {
    navHome:'Home',navAbout:'About',navServices:'Services',navContact:'Contact',
    heroDesc:'The Technical Implementation Unit for Information and Communication Technology, supporting information systems, network infrastructure, and technology services at Muhammadiyah University of Bengkulu.',
    start:'Get Started',contactUs:'Contact Us',
    aboutTitle:'The Right Technology for a More Connected Campus.',
    aboutLead:'We provide technology, big data analysis, and data solutions to support the campus digital transformation.',
    aboutText:'UPTTIK is a unit responsible for information technology, communication, and telecommunication services and management at Muhammadiyah University of Bengkulu.',
    learnMore:'Learn More',servicesTitle:'Our Featured Services',
    servicesDesc:'Providing reliable and innovative technology solutions to advance the campus digital ecosystem.',
    service1:'Infrastructure & Networking',service1d:'Campus network management and optimization for stable, fast, and secure internet connectivity.',
    service2:'Device Service & Maintenance',service2d:'Hardware and software maintenance and repair to support academic activities.',
    service3:'Technical Support & IT Support',service3d:'Responsive technical assistance and IT issue handling for the entire academic community.',
    service4:'Server & Data Center Configuration',service4d:'Server and data center configuration, monitoring, and security to ensure campus systems run smoothly.',
    service5:'Website & Information System Development',service5d:'Building and integrating web applications and academic information portals based on campus needs.',
    faqTitle:'Frequently Asked Questions',faqDesc:'Find quick answers to common questions about our technology services and support.',
    contactTitle:'Need Urgent Assistance?',contactDesc:'The UPTTIK IT support team is ready to help with your technical issues. Contact us via WhatsApp or visit our office.'
  }
};
let language = 'id';
document.getElementById('languageToggle').addEventListener('click', () => {
  language = language === 'id' ? 'en' : 'id';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (language === 'en' && translations.en[key]) el.textContent = translations.en[key];
    else if (language === 'id') location.reload();
  });
  document.getElementById('languageToggle').textContent = language === 'id' ? 'ID / EN' : 'EN / ID';
});
document.getElementById('year').textContent = new Date().getFullYear();
