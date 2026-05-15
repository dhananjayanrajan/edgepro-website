import { Separator } from '@/components/ui/separator'
import ScrollReveal from '@/animations/ScrollReveal'

const sections = [
  { title: '1. Introduction', content: 'Edge Pro ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights in relation to it. By using our Platform you agree to the practices described in this Policy.' },
  { title: '2. Information We Collect', content: 'We collect the following categories of information: Account information (name, email address, and profile data provided during sign-up via our authentication provider), TradingView username (collected when you purchase an indicator subscription, used solely to grant access to the relevant TradingView script), Payment information (when paying by card, payment is handled entirely by Stripe — we do not store your card number or CVV; when paying by crypto, wallet deposit addresses are generated via our payment processor — we store transaction amounts and status only), Usage data (standard server logs including IP address, browser type, pages visited, and timestamps — used for security, debugging, and platform improvement), Communications (any messages you send us via email or Telegram for support purposes).' },
  { title: '3. How We Use Your Information', content: 'We use collected information to: create and manage your account, process payments and manage subscriptions, grant access to purchased indicators on TradingView, deliver EX5 bot license files (when applicable), respond to support requests, send transactional emails (purchase confirmations, access notifications), detect and prevent fraud or abuse, improve the Platform and user experience. We do not sell, rent, or share your personal data with third parties for marketing purposes.' },
  { title: '4. Data Sharing', content: 'We share data only with trusted service providers necessary to operate the Platform: Clerk (authentication and user identity management), Stripe (card payment processing), OxaPay (cryptocurrency payment processing), TradingView (indicator access management — username only). Each provider operates under their own privacy policy and data protection obligations. We may also disclose data if required to comply with a legal obligation, court order, or to protect the rights and safety of Edge Pro and its users.' },
  { title: '5. Data Retention', content: 'We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us. Note that certain transaction records may be retained for legal and accounting purposes.' },
  { title: '6. Cookies and Tracking', content: 'We use session cookies to maintain your logged-in state. We do not use advertising cookies or third-party tracking pixels. Standard analytics data (page views, session duration) may be collected to improve the Platform.' },
  { title: '7. Data Security', content: 'We implement industry-standard security measures including HTTPS encryption, secure database access controls, and hashed credentials. However, no method of transmission over the Internet is 100% secure. We encourage you to use a strong, unique password for your account.' },
  { title: '8. Your Rights', content: 'Depending on your jurisdiction, you may have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent where processing is based on consent, lodge a complaint with a relevant data protection authority. To exercise any of these rights, contact us via the support channels on our homepage.' },
  { title: '9. Children\'s Privacy', content: 'The Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will delete it promptly.' },
  { title: '10. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page indicates when it was last revised. Continued use of the Platform after any change constitutes your acceptance of the updated Policy.' },
  { title: '11. Contact', content: 'For privacy-related questions or requests, contact us via the email or Telegram support channel listed on our homepage.' },
]

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-12">Last updated: May 14, 2026</p>
        </ScrollReveal>
        <div className="space-y-10">
          {sections.map((section, i) => (
            <ScrollReveal key={i}>
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
              </div>
              {i < sections.length - 1 && <Separator className="bg-cyber-blue/10 mt-10" />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
