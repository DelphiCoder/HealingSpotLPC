// Form service endpoint for the contact form.
//
// Empty on purpose. The old value (Formspree form "xgaejdlw") was copied from
// the original site and sent submissions to the other therapist, so it was
// removed on 2026-11-09. Until Brian picks a form provider, ContactForm.jsx
// sends nothing and shows a "form isn't working yet" popup instead.
//
// When a provider is chosen: put its endpoint here, send from ContactForm.jsx,
// and show the error message unless the response is ok (response.ok).
export const FORM_ENDPOINT = "";
