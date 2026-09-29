const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';
const supabaseClient = SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const form = document.querySelector('#inquiry-form');
const status = document.querySelector('.form-status');
const whatsappNumber = '254716160586';
const contactEmail = 'carolinekinyanjjui15@gmail.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = form.querySelector('button');
  const values = Object.fromEntries(new FormData(form));
  const message = [
    'Hello Karura Farm, I would like to make an inquiry.',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Interest: ${values.interest}`,
    `Requirements: ${values.message}`
  ].join('\n');
  const encodedMessage = encodeURIComponent(message);
  submit.disabled = true;
  status.textContent = 'Sending your inquiry...';

  if (supabaseClient) {
    const { error } = await supabaseClient.from('inquiries').insert([values]);
    if (error) status.textContent = 'Opening WhatsApp and email. Your database copy could not be saved.';
  }

  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener');
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('Karura Farm supply inquiry')}&body=${encodedMessage}`;
  form.reset();
  status.textContent = 'Your inquiry is ready in WhatsApp and email.';
  submit.disabled = false;
});

document.querySelectorAll('.image-panel').forEach((panel) => {
  panel.style.transition = 'transform 350ms ease, filter 350ms ease';
  panel.style.willChange = 'transform, filter';
  panel.addEventListener('pointermove', (event) => {
    const bounds = panel.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    panel.style.setProperty('--image-x', `${x}px`);
    panel.style.setProperty('--image-y', `${y}px`);
    panel.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.02)`;
    panel.style.filter = 'saturate(1.18) brightness(1.08)';
  });
  panel.addEventListener('pointerleave', () => {
    panel.style.setProperty('--image-x', '0px');
    panel.style.setProperty('--image-y', '0px');
    panel.style.transform = 'translate3d(0, 0, 0) scale(1)';
    panel.style.filter = '';
  });
});
