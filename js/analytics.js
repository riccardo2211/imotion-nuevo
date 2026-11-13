
(() => {
  const measurementId = 'G-HE26VSY6XM';
  const consentKey = 'imotion-analytics-consent';
  let consent;
  let loaded = false;
  try { consent = localStorage.getItem(consentKey); } catch {}

  function startAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window['ga-disable-' + measurementId] = false;
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(script);
  }

  function recordWhatsApp(source) {
    if (consent === 'accepted' && loaded) {
      window.gtag('event', 'whatsapp_click', { button_location: source });
    }
  }

  document.addEventListener('click', event => {
    const link = event.target instanceof Element && event.target.closest('a[href]');
    if (link && ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(link.hostname)) {
      recordWhatsApp('link');
    }
  });
  document.addEventListener('imotion:whatsapp-booking', () => recordWhatsApp('booking'));

  const panel = document.createElement('section');
  panel.setAttribute('aria-label', 'Cookies');
  panel.style.cssText = 'position:fixed;left:1rem;bottom:1rem;z-index:9999;max-width:min(23rem,calc(100% - 2rem));padding:1rem;background:#191919;color:#fff;border:1px solid #777;border-radius:.5rem;font:1rem/1.5 system-ui';
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.textContent = 'Preferencias de cookies / Cookie preferences';
  settings.style.cssText = 'display:block;margin:1rem auto;padding:.5rem;color:#fff;background:#191919;border:1px solid #777;cursor:pointer';
  settings.addEventListener('click', () => { panel.hidden = false; accept.focus(); });
  const description = document.createElement('p');
  description.textContent = '¿Permites cookies de Google Analytics para medir el uso de la web? / Allow Google Analytics cookies to measure website usage?';
  const policy = document.createElement('a');
  policy.href = '/politica-cookies.html';
  policy.textContent = 'Política de cookies / Cookie policy';
  policy.style.cssText = 'display:block;color:#fff;text-decoration:underline;margin-bottom:.5rem';

  function saveConsent(value) {
    consent = value;
    try { localStorage.setItem(consentKey, value); } catch {}
    if (value === 'accepted') {
      window['ga-disable-' + measurementId] = false;
      startAnalytics();
    } else {
      window['ga-disable-' + measurementId] = true;
      for (const entry of document.cookie.split(';')) {
        const name = entry.split('=')[0].trim();
        if (!/^_ga(?:_|$)/.test(name)) continue;
        document.cookie = name + '=; Max-Age=0; Path=/';
        document.cookie = name + '=; Max-Age=0; Path=/; Domain=imotiontenerife-ems.com';
      }
    }
    panel.hidden = true;
    settings.focus();
  }

  function choice(label, value) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.style.cssText = 'margin:.25rem;padding:.5rem .75rem;color:#fff;background:#333;border:1px solid #aaa;border-radius:.25rem;cursor:pointer';
    button.addEventListener('click', () => saveConsent(value));
    return button;
  }

  const accept = choice('Aceptar / Accept', 'accepted');
  panel.append(description, policy, accept, choice('Rechazar / Reject', 'rejected'));
  panel.hidden = consent === 'accepted' || consent === 'rejected';
  document.body.append(settings, panel);
  if (consent === 'accepted') startAnalytics();
})();
