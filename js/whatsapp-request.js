document.querySelectorAll('[data-whatsapp-request]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(form);
    const name = values.get('nombre').trim();
    const programme = values.get('programa');
    const preference = values.get('horario').trim();
    if (!name) {
      form.elements.nombre.value = '';
      form.elements.nombre.reportValidity();
      return;
    }
    const lines = [
      'Hola, me gustaría solicitar una sesión en i-Motion Tenerife.',
      'Nombre: ' + name,
      'Programa: ' + programme
    ];
    if (preference) lines.push('Preferencia de horario: ' + preference);
    document.dispatchEvent(new Event('imotion:whatsapp-booking'));
    window.location.assign('https://wa.me/34643986544?text=' + encodeURIComponent(lines.join('\n')));
  });
});
