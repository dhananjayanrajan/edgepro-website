export const contactContent = {
  headline: ['How can', 'we help?'],
  channels: [
    {
      method: 'Telegram',
      value: '@edgepro_support',
      href: 'https://t.me/edgepro_support',
      note: 'Fastest response. Usually within the hour.',
    },
    {
      method: 'Email',
      value: 'support@edgepro.online',
      href: 'mailto:support@edgepro.online',
      note: 'For billing, access issues, and refund requests.',
    },
  ],
  form: {
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Describe your issue in detail...' },
    ],
    cta: 'Send Message',
    note: 'We respond to all messages within 24 hours.',
  },
}
