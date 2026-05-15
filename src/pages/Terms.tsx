import { Separator } from '@/components/ui/separator'
import ScrollReveal from '@/animations/ScrollReveal'

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using Edge Pro ("the Platform"), including the DART Bias Engine indicator or any other products and services offered, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you must not access or use the Platform. These Terms constitute a legally binding agreement between you and Edge Pro. We reserve the right to modify these Terms at any time. Continued use of the Platform after any modification constitutes acceptance of the updated Terms.' },
  { title: '2. Eligibility', content: 'You must be at least 18 years of age to use the Platform. By creating an account you represent and warrant that you are of legal age in your jurisdiction to enter into binding contracts and that you are not prohibited from using financial tools or services under applicable laws.' },
  { title: '3. Products and Subscriptions', content: 'Edge Pro offers TradingView indicator subscriptions (including DART Bias Engine v3) and, in future, automated trading bots distributed as EX5 license files for MetaTrader 5. Specific features, pricing, and availability are subject to change. Indicator access is granted by inviting your TradingView username to the relevant invite-only script. Access remains active for the duration of your subscription plan. Upon expiry, access will be revoked unless renewed. Bot EX5 files (when available) are cryptographically bound to the MetaTrader 5 account credentials you provide. Redistribution or reverse-engineering of EX5 files is strictly prohibited.' },
  { title: '4. Payments and Refund Policy', content: 'Payments may be made via USDT (cryptocurrency) credited to your Edge Pro wallet, or by debit/credit card via Stripe. All prices are displayed in USD. All sales are final. Because our products are digital goods with immediate access granted upon purchase, we do not offer refunds once access has been activated. If you experience a technical issue preventing access, contact our support team and we will work to resolve it. Coupon codes and trial periods are offered at our sole discretion and may be withdrawn or modified at any time without notice.' },
  { title: '5. Acceptable Use', content: 'You agree not to: share, resell, or redistribute access to any indicator or EX5 file; reverse-engineer, decompile, or attempt to extract source code from any product; use the Platform for any unlawful purpose or in violation of any regulation; provide false or misleading information during registration or checkout; attempt to circumvent any access control or security measure.' },
  { title: '6. Intellectual Property', content: 'All content, indicators, software, algorithms, branding, and materials on the Platform are the exclusive property of Edge Pro or its licensors. No rights are transferred to you except the limited, non-exclusive, non-transferable licence to use the purchased product during your subscription period.' },
  { title: '7. Disclaimer of Warranties', content: 'The Platform and all products are provided "as is" without warranty of any kind, express or implied. We do not warrant that indicators or tools will be error-free, uninterrupted, or that results obtained from using them will meet your expectations. Past performance is not indicative of future results. Nothing on the Platform constitutes financial advice, investment advice, trading advice, or any other form of professional advice.' },
  { title: '8. Limitation of Liability', content: 'To the maximum extent permitted by law, Edge Pro shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform, including any trading losses incurred while using our tools.' },
  { title: '9. Termination', content: 'We reserve the right to suspend or terminate your account at any time for violation of these Terms, fraudulent activity, or any other reason at our sole discretion. Upon termination, access to all products is immediately revoked.' },
  { title: '10. Governing Law', content: 'These Terms shall be governed by and construed in accordance with applicable international laws. Any dispute arising under these Terms shall be resolved through good-faith negotiation between the parties before resorting to formal dispute resolution.' },
  { title: '11. Contact', content: 'For any questions about these Terms, please contact us via the support email or Telegram channel listed on our homepage.' },
]

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
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
