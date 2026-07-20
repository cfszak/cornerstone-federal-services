document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // TODO: replace this with a real submission handler
    // (HubSpot form embed, Formspree endpoint, mailto service, etc.)
    alert('This is a design preview — connect this form to a form-handling service to go live.');
  });
});
