// ── Navbar scroll ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

// ── Mobile menu ──────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Scroll reveal ────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

// ── Traducciones ES / EN ─────────────────────────────────────
const T = {
  es: {
    // Navbar
    nav_inicio: 'Inicio', nav_quienes: 'Quiénes somos', nav_sport: 'i-Motion Sport',
    nav_esthetic: 'i-Shape Esthetic', nav_reservar: 'Reservar sesión',
    // Footer
    foot_nav: 'Navegación', foot_contact: 'Contacto',
    foot_rights: '© 2025 i-Motion EMS Tenerife · Todos los derechos reservados',
    foot_legal: 'Aviso Legal', foot_privacy: 'Privacidad', foot_cookies: 'Cookies',
    foot_hours: 'Lunes a Viernes: 8:00 – 21:00<br>Sábados: 9:00 – 14:00',
    // INDEX
    idx_badge: '🏆 Tenerife Top Training · La Caleta · Costa Adeje · Tenerife',
    idx_sub: 'El centro de electroestimulación muscular de referencia en Tenerife. 25 minutos que transforman tu cuerpo, en Costa Adeje en el Tenerife Top Training.',
    idx_btn1: 'Reservar sesión gratis', idx_btn2: 'Conocer más',
    idx_stat1: 'por sesión', idx_stat2: 'músculos activados', idx_stat3: 'personalizado', idx_stat4: 'Training Tenerife',
    idx_intro_tag: '¿Qué es EMS?',
    idx_intro_title: '<span class="accent">i-Motion EMS Tenerife</span> — La revolución del entrenamiento inteligente',
    idx_intro_p1: 'La electroestimulación muscular (EMS) utiliza impulsos eléctricos de baja frecuencia para activar simultáneamente hasta el 90% de tus fibras musculares — algo imposible con el entrenamiento convencional.',
    idx_intro_p2: 'Estamos en <strong style="color:#fff;">Tenerife Top Training</strong>, el centro de alto rendimiento de referencia en Tenerife, en <strong style="color:#fff;">Av. de Los Acantilados s/n, La Caleta, Costa Adeje</strong>. Un espacio de élite para un entrenamiento de élite.',
    idx_intro_btn: 'Sobre nosotros',
    idx_serv_tag: 'Nuestros programas', idx_serv_title: 'Elige tu <span class="accent">objetivo</span>',
    idx_sport_tag: 'Rendimiento', idx_sport_desc: 'Para atletas y deportistas que buscan llevar su rendimiento al siguiente nivel. Mejora fuerza, resistencia y potencia muscular con entrenamientos adaptados a tu deporte.',
    idx_sport_btn: 'Ver programa',
    idx_esthetic_tag: 'Estético', idx_esthetic_desc: 'Para quienes buscan una transformación corporal visible. Tonifica, reduce celulitis y mejora la firmeza con electroestimulación focalizada en zonas específicas.',
    idx_esthetic_btn: 'Ver programa',
    idx_benef_tag: 'Por qué i-Motion EMS Tenerife', idx_benef_title: 'Ventajas del entrenamiento <span class="accent">i-Motion</span>',
    idx_results_tag: 'Resultados reales', idx_results_title: 'Antes y después con <span class="accent">i-Motion EMS</span>',
    idx_results_sub: 'Transformaciones reales de clientes reales. Resultados visibles en pocas semanas.',
    idx_tech_tag: 'Tecnología', idx_tech_title: 'Equipo <span class="accent">i-motion Pro V25</span>',
    idx_tech_sub: 'La última generación en electroestimulación muscular inalámbrica con inteligencia artificial integrada',
    idx_cta_title: '¿Listo para entrenar en <span class="accent">Tenerife Top Training</span> con EMS?',
    idx_cta_sub: 'Reserva tu primera sesión de prueba gratuita en i-Motion EMS Tenerife',
    idx_cta_btn: 'Reservar sesión gratis',
    // QUIÉNES SOMOS
    qs_hero_tag: 'Sobre nosotros', qs_hero_title: 'QUIÉNES <span class="accent">SOMOS</span>',
    qs_hero_sub: 'El primer centro especializado en entrenamiento EMS de Av. Los Acantilados s/n, La Caleta, Costa Adeje.',
    qs_mission_tag: 'Nuestra misión', qs_mission_title: 'Tecnología al servicio de tu <span class="accent">bienestar</span>',
    qs_p1: 'En i-Motion Tenerife EMS creemos que cada persona merece acceder a la tecnología más avanzada en entrenamiento físico, con resultados reales y en el menor tiempo posible.',
    qs_p2: 'Nuestro centro, ubicado en Costa Adeje, está equipado con la última generación del sistema i-motion Pro V25, combinando electroestimulación inalámbrica con inteligencia artificial para maximizar cada sesión.',
    qs_p3: 'Contamos con entrenadores certificados en EMS que diseñan programas completamente personalizados, adaptados a tus objetivos, condición física y estilo de vida.',
    qs_values_tag: 'Nuestros valores', qs_values_title: 'Por qué elegir <span class="accent">i-Motion</span>',
    qs_v1t: '100% Personalizado', qs_v1p: 'Cada sesión se adapta a tus objetivos y condición física con seguimiento constante.',
    qs_v2t: 'Entrenadores Certificados', qs_v2p: 'Profesionales especializados en EMS con formación continua y experiencia demostrada.',
    qs_v3t: 'Tecnología V25', qs_v3p: 'El sistema más avanzado del mercado con IA integrada y conectividad Bluetooth.',
    qs_centro_tag: 'Nuestro centro', qs_centro_title: 'Un espacio creado para <span class="accent">ti</span>',
    qs_centro_sub: 'Instalaciones modernas y equipadas en Costa Adeje, con un ambiente acogedor donde te sentirás cómodo desde el primer día.',
    qs_visit_btn: 'Visítanos',
    // I-MOTION SPORT
    sp_hero_tag: 'Rendimiento deportivo', sp_hero_sub: 'Entrenamiento de alto rendimiento con electroestimulación muscular para atletas y deportistas.',
    sp_prog_tag: 'El programa', sp_prog_title: 'Lleva tu rendimiento al <span class="accent">siguiente nivel</span>',
    sp_prog_p1: 'El programa i-Motion Sport está diseñado para deportistas y atletas que buscan superar sus límites. Combinamos entrenamiento funcional con electroestimulación muscular de alta intensidad.',
    sp_prog_p2: 'Disponemos de dos modalidades: el <strong style="color:#fff;">traje cuerpo entero</strong> y el <strong style="color:#fff;">traje inferior</strong> para trabajar específicamente piernas, glúteos y zona lumbar.',
    sp_prog_btn: 'Empezar ahora',
    sp_equip_tag: 'Equipamiento', sp_equip_title: 'Elige tu <span class="accent">traje EMS</span>', sp_equip_sub: 'Dos opciones adaptadas a tus objetivos deportivos',
    sp_suit1: 'Traje Cuerpo Entero', sp_suit1p: 'Activa simultáneamente toda la musculatura del cuerpo. Ideal para rendimiento general, fuerza y resistencia.',
    sp_suit2: 'Traje Inferior', sp_suit2p: 'Especializado en piernas, glúteos, isquiotibiales y zona lumbar. Perfecto para corredores y ciclistas.',
    sp_benef_tag: 'Beneficios', sp_benef_title: 'Resultados <span class="accent">demostrados</span>',
    sp_cta_title: '¿Preparado para entrenar como un <span class="accent">profesional</span>?',
    sp_cta_sub: 'Primera sesión de prueba gratuita en Tenerife Top Training, Costa Adeje.',
    sp_cta_btn: 'Reservar ahora',
    // I-SHAPE ESTHETIC
    es_hero_tag: 'Transformación corporal', es_hero_sub: 'Tonifica tu cuerpo, reduce la celulitis y mejora la firmeza con electroestimulación focalizada.',
    es_prog_tag: 'El programa', es_prog_title: 'Tu transformación <span class="accent">empieza aquí</span>',
    es_prog_btn: 'Reservar sesión gratis',
    es_tech_tag: 'Tecnología i-Shape', es_tech_title: 'El equipo <span class="accent">más avanzado</span>', es_tech_sub: 'Diseñado específicamente para la transformación estética corporal',
    es_benef_tag: 'Resultados', es_benef_title: 'Lo que conseguirás con <span class="accent">i-Shape</span>',
    es_video_tag: 'Transformaciones reales', es_video_title: 'Antes y después <span class="accent">en vídeo</span>', es_video_sub: 'Resultados reales de clientes reales con i-Shape Esthetic',
    es_photo_tag: 'Fotos reales', es_photo_title: 'Resultados <span class="accent">demostrados</span>',
    es_process_tag: 'Cómo funciona', es_process_title: 'Tu sesión <span class="accent">paso a paso</span>', es_process_btn: 'Reservar sesión gratis',
    es_cta_title: 'Transforma tu cuerpo en <span class="accent">tiempo récord</span>',
    es_cta_sub: 'Primera sesión de prueba gratuita en Tenerife Top Training, Costa Adeje.',
    es_cta_btn: 'Quiero empezar',
    // CONTACTO
    ct_hero_tag: 'Empezar es gratis', ct_hero_sub: 'Primera sesión de prueba completamente gratuita y sin compromiso.',
    ct_form_tag: 'Escríbenos', ct_form_title: 'Ponte en <span class="accent">contacto</span>',
    ct_submit: 'Enviar solicitud de reserva',
    ct_info_tag: 'Información', ct_info_title: 'Encuéntranos <span class="accent">aquí</span>',
    ct_hours: 'Lunes a Viernes: 8:00 – 21:00<br>Sábados: 9:00 – 14:00',
  },
  en: {
    // Navbar
    nav_inicio: 'Home', nav_quienes: 'About us', nav_sport: 'i-Motion Sport',
    nav_esthetic: 'i-Shape Esthetic', nav_reservar: 'Book a session',
    // Footer
    foot_nav: 'Navigation', foot_contact: 'Contact',
    foot_rights: '© 2025 i-Motion EMS Tenerife · All rights reserved',
    foot_legal: 'Legal Notice', foot_privacy: 'Privacy', foot_cookies: 'Cookies',
    foot_hours: 'Monday to Friday: 8:00 – 21:00<br>Saturdays: 9:00 – 14:00',
    // INDEX
    idx_badge: '🏆 Tenerife Top Training · La Caleta · Costa Adeje · Tenerife',
    idx_sub: 'The leading electric muscle stimulation centre in Tenerife. 25 minutes that transform your body, at Tenerife Top Training in Costa Adeje.',
    idx_btn1: 'Book a free session', idx_btn2: 'Learn more',
    idx_stat1: 'per session', idx_stat2: 'muscles activated', idx_stat3: 'personalised', idx_stat4: 'Training Tenerife',
    idx_intro_tag: 'What is EMS?',
    idx_intro_title: '<span class="accent">i-Motion EMS Tenerife</span> — The smart training revolution',
    idx_intro_p1: 'Electric Muscle Stimulation (EMS) uses low-frequency electrical impulses to simultaneously activate up to 90% of your muscle fibres — impossible with conventional training.',
    idx_intro_p2: 'We are located at <strong style="color:#fff;">Tenerife Top Training</strong>, the island\'s leading high-performance centre, at <strong style="color:#fff;">Av. de Los Acantilados s/n, La Caleta, Costa Adeje</strong>.',
    idx_intro_btn: 'About us',
    idx_serv_tag: 'Our programmes', idx_serv_title: 'Choose your <span class="accent">goal</span>',
    idx_sport_tag: 'Performance', idx_sport_desc: 'For athletes looking to take their performance to the next level. Improve strength, endurance and muscle power with training tailored to your sport.',
    idx_sport_btn: 'View programme',
    idx_esthetic_tag: 'Aesthetic', idx_esthetic_desc: 'For those seeking visible body transformation. Tone, reduce cellulite and improve firmness with targeted electrostimulation.',
    idx_esthetic_btn: 'View programme',
    idx_benef_tag: 'Why i-Motion EMS Tenerife', idx_benef_title: 'Benefits of <span class="accent">i-Motion</span> training',
    idx_results_tag: 'Real results', idx_results_title: 'Before and after with <span class="accent">i-Motion EMS</span>',
    idx_results_sub: 'Real transformations from real clients. Visible results in just a few weeks.',
    idx_tech_tag: 'Technology', idx_tech_title: '<span class="accent">i-motion Pro V25</span> equipment',
    idx_tech_sub: 'The latest generation in wireless EMS with integrated artificial intelligence',
    idx_cta_title: 'Ready to train at <span class="accent">Tenerife Top Training</span> with EMS?',
    idx_cta_sub: 'Book your first free trial session at i-Motion EMS Tenerife',
    idx_cta_btn: 'Book a free session',
    // QUIÉNES SOMOS
    qs_hero_tag: 'About us', qs_hero_title: 'WHO <span class="accent">WE ARE</span>',
    qs_hero_sub: 'The first specialist EMS training centre at Av. Los Acantilados s/n, La Caleta, Costa Adeje.',
    qs_mission_tag: 'Our mission', qs_mission_title: 'Technology in the service of your <span class="accent">wellbeing</span>',
    qs_p1: 'At i-Motion Tenerife EMS we believe everyone deserves access to the most advanced fitness technology, with real results in the shortest time possible.',
    qs_p2: 'Our centre in Costa Adeje is equipped with the latest i-motion Pro V25 system, combining wireless electrostimulation with artificial intelligence to maximise every session.',
    qs_p3: 'Our EMS-certified trainers design fully personalised programmes tailored to your goals, fitness level and lifestyle.',
    qs_values_tag: 'Our values', qs_values_title: 'Why choose <span class="accent">i-Motion</span>',
    qs_v1t: '100% Personalised', qs_v1p: 'Every session is adapted to your goals and fitness level with constant monitoring.',
    qs_v2t: 'Certified Trainers', qs_v2p: 'EMS specialists with continuous training and proven experience.',
    qs_v3t: 'V25 Technology', qs_v3p: 'The most advanced system on the market with integrated AI and Bluetooth connectivity.',
    qs_centro_tag: 'Our centre', qs_centro_title: 'A space created for <span class="accent">you</span>',
    qs_centro_sub: 'Modern, fully equipped facilities in Costa Adeje, with a welcoming atmosphere from day one.',
    qs_visit_btn: 'Visit us',
    // I-MOTION SPORT
    sp_hero_tag: 'Sports performance', sp_hero_sub: 'High-performance training with EMS for athletes and sports enthusiasts.',
    sp_prog_tag: 'The programme', sp_prog_title: 'Take your performance to the <span class="accent">next level</span>',
    sp_prog_p1: 'The i-Motion Sport programme is designed for athletes who want to push their limits. We combine functional training with high-intensity electric muscle stimulation.',
    sp_prog_p2: 'We offer two options: the <strong style="color:#fff;">full-body suit</strong> and the <strong style="color:#fff;">lower-body suit</strong> for targeted work on legs, glutes and lower back.',
    sp_prog_btn: 'Start now',
    sp_equip_tag: 'Equipment', sp_equip_title: 'Choose your <span class="accent">EMS suit</span>', sp_equip_sub: 'Two options tailored to your sports goals',
    sp_suit1: 'Full-Body Suit', sp_suit1p: 'Simultaneously activates all body muscles. Ideal for overall performance, strength and endurance.',
    sp_suit2: 'Lower-Body Suit', sp_suit2p: 'Specialised in legs, glutes, hamstrings and lower back. Perfect for runners and cyclists.',
    sp_benef_tag: 'Benefits', sp_benef_title: 'Proven <span class="accent">results</span>',
    sp_cta_title: 'Ready to train like a <span class="accent">professional</span>?',
    sp_cta_sub: 'First free trial session at Tenerife Top Training, Costa Adeje.',
    sp_cta_btn: 'Book now',
    // I-SHAPE ESTHETIC
    es_hero_tag: 'Body transformation', es_hero_sub: 'Tone your body, reduce cellulite and improve firmness with targeted electrostimulation.',
    es_prog_tag: 'The programme', es_prog_title: 'Your transformation <span class="accent">starts here</span>',
    es_prog_btn: 'Book a free session',
    es_tech_tag: 'i-Shape Technology', es_tech_title: 'The most <span class="accent">advanced equipment</span>', es_tech_sub: 'Specifically designed for aesthetic body transformation',
    es_benef_tag: 'Results', es_benef_title: 'What you will achieve with <span class="accent">i-Shape</span>',
    es_video_tag: 'Real transformations', es_video_title: 'Before and after <span class="accent">on video</span>', es_video_sub: 'Real results from real clients with i-Shape Esthetic',
    es_photo_tag: 'Real photos', es_photo_title: 'Proven <span class="accent">results</span>',
    es_process_tag: 'How it works', es_process_title: 'Your session <span class="accent">step by step</span>', es_process_btn: 'Book a free session',
    es_cta_title: 'Transform your body in <span class="accent">record time</span>',
    es_cta_sub: 'First free trial session at Tenerife Top Training, Costa Adeje.',
    es_cta_btn: 'I want to start',
    // CONTACTO
    ct_hero_tag: 'Starting is free', ct_hero_sub: 'First trial session completely free and with no commitment.',
    ct_form_tag: 'Write to us', ct_form_title: 'Get in <span class="accent">touch</span>',
    ct_submit: 'Send booking request',
    ct_info_tag: 'Information', ct_info_title: 'Find us <span class="accent">here</span>',
    ct_hours: 'Monday to Friday: 8:00 – 21:00<br>Saturdays: 9:00 – 14:00',
  }
};

function applyLang(lang) {
  localStorage.setItem('imotion_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });
}

function initLang() {
  const saved = localStorage.getItem('imotion_lang') || 'es';
  applyLang(saved);
}

document.addEventListener('DOMContentLoaded', initLang);
