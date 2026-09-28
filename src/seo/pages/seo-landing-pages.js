import { constructPageSeo } from '../config.js'
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFaqSchema,
  generateSoftwareApplicationSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'
import { siteConfig } from '../site.js'

// 1. WhatsApp Business API India
export const whatsappBusinessApiIndiaSeo = constructPageSeo({
  route: '/whatsapp-business-api-india',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp Business API India | Official Meta Platform',
  description:
    'Get official WhatsApp Business API in India. Send bulk broadcasts, run AI chatbots, and automate customer support. Plans from ₹1,499/mo. Book a free demo.',
  primaryKeyword: 'WhatsApp Business API India',
  secondaryKeywords: [
    'WhatsApp Business API',
    'WhatsApp marketing India',
    'Meta Cloud API',
    'bulk WhatsApp broadcasts',
    'WhatsApp CRM',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.95,
  breadcrumb: getBreadcrumbsForRoute('/whatsapp-business-api-india', 'WhatsApp Business API India'),
  faqList: [
    {
      question: 'Can Meta ban my phone number if I use WhatNexis?',
      answer:
        'No. Because WhatNexis operates strictly on the official Meta Cloud API, your number is safe from the mass bans associated with unofficial scraping tools or third-party WhatsApp web bots, provided your broadcasts comply with Meta’s messaging policies and opt-in guidelines.',
    },
    {
      question: 'What documents are required for WhatsApp API verification in India?',
      answer:
        'To verify your Meta Business Manager, you typically need an official Indian government-issued business registration document (such as a GST Registration Certificate, Udyam MSME Registration, or MCA Certificate of Incorporation) and a utility bill or bank statement showing your registered business name and address.',
    },
    {
      question: 'What is the 24-hour customer service window?',
      answer:
        'When a customer messages your business on WhatsApp, Meta opens a 24-hour "customer service window." During this period, your business can send free-form messages, images, and documents without needing pre-approved templates. Once 24 hours have elapsed without a customer reply, outbound messages must use an approved Meta template.',
    },
    {
      question: 'Does WhatNexis support local Indian languages?',
      answer:
        'Yes. You can create and broadcast WhatsApp templates in Hindi, Kannada, Tamil, Telugu, Marathi, Bengali, Gujarati, and other regional Indian languages supported by Meta.',
    },
  ],
})
whatsappBusinessApiIndiaSeo.jsonLd = [
  generateWebPageSchema(whatsappBusinessApiIndiaSeo),
  generateSoftwareApplicationSchema(),
  generateFaqSchema(whatsappBusinessApiIndiaSeo.faqList),
  generateBreadcrumbSchema(whatsappBusinessApiIndiaSeo.breadcrumb),
]

// 2. WhatsApp API Pricing
export const whatsappApiPricingSeo = constructPageSeo({
  route: '/whatsapp-api-pricing',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp API Pricing India: Meta Charges & Plans',
  description:
    'Understand WhatsApp API pricing in India. Compare Meta conversation rates with WhatNexis plans starting at ₹1,499/mo plus 18% GST. See complete breakdown.',
  primaryKeyword: 'WhatsApp API pricing',
  secondaryKeywords: [
    'WhatsApp API cost India',
    'Meta conversation charges',
    'WhatNexis pricing',
    'WhatsApp marketing rates',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.95,
  breadcrumb: getBreadcrumbsForRoute('/whatsapp-api-pricing', 'WhatsApp API Pricing'),
  faqList: [
    {
      question: 'Are there any setup fees or hidden activation costs?',
      answer:
        'No. There are zero hidden activation or onboarding fees. You only pay your chosen monthly subscription tier plus the message credits you consume for outbound Meta broadcasts.',
    },
    {
      question: 'How do I pay for Meta message charges?',
      answer:
        'You maintain a prepaid message wallet inside your WhatNexis dashboard. When you send marketing or utility broadcasts, credits are deducted at exact official Meta rates. You can recharge this wallet instantly via UPI, NetBanking, or Indian credit/debit cards.',
    },
    {
      question: 'What happens if a customer replies to my marketing broadcast?',
      answer:
        'When a customer responds to your broadcast, a 24-hour service conversation window opens. Within this window, your support agents can exchange unlimited two-way messages without incurring additional per-message Meta fees.',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      answer:
        'Yes. You can change your subscription tier at the end of any 30-day billing cycle directly from your account settings without cancellation penalties.',
    },
  ],
})
whatsappApiPricingSeo.jsonLd = [
  generateWebPageSchema(whatsappApiPricingSeo),
  generateFaqSchema(whatsappApiPricingSeo.faqList),
  generateBreadcrumbSchema(whatsappApiPricingSeo.breadcrumb),
]

// 3. Instagram DM Automation
export const instagramDmAutomationSeo = constructPageSeo({
  route: '/instagram-dm-automation',
  classification: 'INDEX',
  indexable: true,
  title: 'Instagram DM Automation Tool for Indian Brands',
  description:
    'Turn Instagram comments, story mentions, and Reels into sales with official Instagram DM automation. AI replies and shared inbox. Plans from ₹1,499/month.',
  primaryKeyword: 'Instagram DM automation',
  secondaryKeywords: [
    'Instagram automation India',
    'Instagram auto reply tool',
    'Reel comment automation',
    'Instagram DM bot',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: getBreadcrumbsForRoute('/instagram-dm-automation', 'Instagram DM Automation'),
  faqList: [
    {
      question: 'Will using Instagram automation get my account shadowbanned?',
      answer:
        'No. WhatNexis uses Meta’s official Instagram Graph API for all messaging. Unlike unofficial tools that ask for your Instagram password and mimic human clicks, official API automation is 100% sanctioned by Meta and carries zero risk of shadowbans or account suspension.',
    },
    {
      question: 'Do I need an Instagram Business Account?',
      answer:
        'Yes. Meta’s official automation API requires an Instagram Professional account (Business or Creator) that is connected to a verified Facebook Page.',
    },
    {
      question: 'Can the bot transfer a conversation to a human support agent?',
      answer:
        'Yes. If a user types a query the automated flow does not recognize (or types "help" or "agent"), WhatNexis immediately routes the conversation to your shared inbox and notifies your human team to step in.',
    },
    {
      question: 'Can I set different auto-replies for different Reels?',
      answer:
        'Yes. You can create unique automation triggers for individual posts or Reels, or set a global auto-reply rule that applies across all content.',
    },
  ],
})
instagramDmAutomationSeo.jsonLd = [
  generateWebPageSchema(instagramDmAutomationSeo),
  generateSoftwareApplicationSchema(),
  generateFaqSchema(instagramDmAutomationSeo.faqList),
  generateBreadcrumbSchema(instagramDmAutomationSeo.breadcrumb),
]

// 4. Google Reviews Automation
export const googleReviewsAutomationSeo = constructPageSeo({
  route: '/google-reviews-automation',
  classification: 'INDEX',
  indexable: true,
  title: 'Google Reviews Automation Software for Businesses',
  description:
    'Automate 5-star Google review collection via WhatsApp and SMS. Boost your local SEO rankings in India automatically. Plans start at ₹1,499/mo. Book demo.',
  primaryKeyword: 'Google reviews automation',
  secondaryKeywords: [
    'Google review management India',
    'local SEO booster',
    'WhatsApp review collection',
    'Google Maps 5 star reviews',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: getBreadcrumbsForRoute('/google-reviews-automation', 'Google Reviews Automation'),
  faqList: [
    {
      question: 'Is it legal to automate Google review requests?',
      answer:
        'Yes. Google’s policies encourage businesses to invite authentic customer reviews. WhatNexis helps you reach your real customers directly on WhatsApp to solicit genuine feedback without using fake or incentivized schemes.',
    },
    {
      question: 'Can WhatNexis remove existing negative Google reviews?',
      answer:
        'No software can directly delete legitimate negative Google reviews. However, WhatNexis helps you bury occasional negative reviews under a steady, high-volume stream of genuine 5-star reviews from satisfied customers.',
    },
    {
      question: 'Do customers need to log in to Google to leave a review?',
      answer:
        'Yes. Google requires reviewers to have an active Google account on their device to prevent spam. Since virtually all smartphone users already have an active Google session, the review link opens seamlessly without asking for credentials.',
    },
    {
      question: 'Can I customize the WhatsApp message sent to customers?',
      answer:
        'Yes. You can fully customize the message copy, add your company logo, personalize the customer’s name, and support regional Indian languages like Hindi, Tamil, Kannada, and Marathi.',
    },
  ],
})
googleReviewsAutomationSeo.jsonLd = [
  generateWebPageSchema(googleReviewsAutomationSeo),
  generateFaqSchema(googleReviewsAutomationSeo.faqList),
  generateBreadcrumbSchema(googleReviewsAutomationSeo.breadcrumb),
]

// 5. WhatsApp CRM for Shopify & D2C Stores
export const shopifyD2cCrmSeo = constructPageSeo({
  route: '/whatsapp-crm-shopify-d2c',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp CRM for Shopify & D2C Stores in India',
  description:
    'Recover abandoned carts, send automated COD confirmations, and track orders via WhatsApp CRM for Shopify and D2C stores. Start from ₹1,499/month.',
  primaryKeyword: 'WhatsApp CRM for Shopify',
  secondaryKeywords: [
    'Shopify WhatsApp integration India',
    'D2C WhatsApp automation',
    'COD confirmation bot',
    'WhatsApp cart recovery',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: getBreadcrumbsForRoute('/whatsapp-crm-shopify-d2c', 'WhatsApp CRM for Shopify & D2C'),
  faqList: [
    {
      question: 'Does WhatNexis slow down my Shopify store’s loading speed?',
      answer:
        'No. WhatNexis connects to Shopify via secure server-side webhooks. We do not inject heavy tracking scripts into your frontend theme, ensuring your site speed and Core Web Vitals remain completely unaffected.',
    },
    {
      question: 'Can I convert COD orders to prepaid using WhatNexis?',
      answer:
        'Yes. Our COD confirmation flow includes an automated "Pay Online & Save ₹50" button that generates a secure UPI/Razorpay payment link. Once paid, the order tag in Shopify automatically updates from "Pending" to "Paid".',
    },
    {
      question: 'What courier aggregators are supported?',
      answer:
        'WhatNexis integrates with popular Indian logistics platforms including Shiprocket, Delhivery, BlueDart, Pickrr, and standard Shopify fulfillment webhooks to trigger automated delivery notifications.',
    },
    {
      question: 'Do I need developer assistance to set this up?',
      answer:
        'No. Connecting your Shopify store involves pasting your store URL and authorization token into your WhatNexis dashboard. Our Bengaluru support team provides free 1-on-1 setup assistance if you need guidance.',
    },
  ],
})
shopifyD2cCrmSeo.jsonLd = [
  generateWebPageSchema(shopifyD2cCrmSeo),
  generateSoftwareApplicationSchema(),
  generateFaqSchema(shopifyD2cCrmSeo.faqList),
  generateBreadcrumbSchema(shopifyD2cCrmSeo.breadcrumb),
]

// 6. WhatNexis vs Wati Comparison
export const whatnexisVsWatiSeo = constructPageSeo({
  route: '/whatnexis-vs-wati',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatNexis vs Wati: Comparison for Indian SMBs',
  description:
    'Compare WhatNexis and Wati on pricing, Indian support, Meta API charges, and ease of use. Discover which WhatsApp Business platform fits your budget best.',
  primaryKeyword: 'WhatNexis vs Wati',
  secondaryKeywords: [
    'Wati comparison India',
    'Wati alternative Bengaluru',
    'WhatsApp API pricing comparison',
    'Wati pricing vs WhatNexis',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.85,
  breadcrumb: getBreadcrumbsForRoute('/whatnexis-vs-wati', 'WhatNexis vs Wati'),
  faqList: [
    {
      question: 'Can I migrate my phone number from Wati to WhatNexis?',
      answer:
        'Yes. Meta allows businesses to migrate their WhatsApp Business API phone number between different Business Solution Providers (BSPs) without losing their phone number or green tick status. Our onboarding team assists you with the 2-step migration process.',
    },
    {
      question: 'Is WhatNexis as reliable as Wati for high-volume broadcasts?',
      answer:
        'Yes. Both WhatNexis and Wati run on Meta’s official Cloud API infrastructure. Message throughput, delivery speeds, and encryption are managed directly by Meta’s enterprise servers, guaranteeing 99.9% delivery reliability.',
    },
    {
      question: 'Does WhatNexis charge extra for additional chat agents?',
      answer:
        'Our Growth and Advance plans include multiple agent seats out of the box, with affordable add-on options if your team expands. Check our pricing page for complete seat limits.',
    },
    {
      question: 'Can I try WhatNexis before switching?',
      answer:
        'Yes. We offer interactive live demos and guided trials so your team can test the interface, test message speeds, and experience our chatbot builder before making a commitment.',
    },
  ],
})
whatnexisVsWatiSeo.jsonLd = [
  generateWebPageSchema(whatnexisVsWatiSeo),
  generateFaqSchema(whatnexisVsWatiSeo.faqList),
  generateBreadcrumbSchema(whatnexisVsWatiSeo.breadcrumb),
]

// 7. Wati Alternatives in India
export const watiAlternativesSeo = constructPageSeo({
  route: '/wati-alternatives-india',
  classification: 'INDEX',
  indexable: true,
  title: 'Top Wati Alternatives in India for 2026',
  description:
    'Looking for affordable Wati alternatives in India? Compare top WhatsApp Business API tools by features, pricing in INR, and local support. Find your fit.',
  primaryKeyword: 'Wati alternatives in India',
  secondaryKeywords: [
    'Wati alternatives',
    'best WhatsApp Business API India',
    'Wati competitors',
    'AiSensy vs Wati',
    'Interakt vs Wati',
  ],
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.85,
  breadcrumb: getBreadcrumbsForRoute('/wati-alternatives-india', 'Wati Alternatives in India'),
  faqList: [
    {
      question: 'Which Wati alternative is best for Shopify stores in India?',
      answer:
        'For stores seeking both abandoned cart recovery and omnichannel social DM automation, WhatNexis provides the strongest balance of features and affordability, with plans starting at ₹1,499/mo compared to higher multi-tier platforms.',
    },
    {
      question: 'Do alternative platforms mark up Meta’s official conversation rates?',
      answer:
        'Some platforms charge a 5% to 20% convenience markup on top of Meta’s standard conversation fees. WhatNexis strictly charges zero markup, passing through Meta’s exact regional rates for marketing, utility, and authentication messages.',
    },
    {
      question: 'Can I test an alternative platform before canceling my Wati subscription?',
      answer:
        'Yes. You can test WhatNexis using a secondary phone number or an interactive sandbox environment to evaluate our chatbot flows and shared inbox before initiating number migration.',
    },
    {
      question: 'How does Indian GST invoicing work with local alternatives?',
      answer:
        'Unlike international providers where overseas payments require reverse charge mechanisms, WhatNexis is an Indian registered entity. Every subscription fee and message wallet recharge includes a GST tax invoice with 18% Input Tax Credit (ITC).',
    },
  ],
})
watiAlternativesSeo.jsonLd = [
  generateWebPageSchema(watiAlternativesSeo),
  generateFaqSchema(watiAlternativesSeo.faqList),
  generateBreadcrumbSchema(watiAlternativesSeo.breadcrumb),
]

// 8. Blog: WhatsApp Business App vs API
export const blogAppVsApiSeo = constructPageSeo({
  route: '/blog/whatsapp-business-app-vs-api',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp Business App vs API: Which One to Use?',
  description:
    'Compare WhatsApp Business App vs API. Learn key differences in broadcast limits, chatbots, green tick, and pricing to pick the right one for your business.',
  primaryKeyword: 'WhatsApp Business App vs API',
  secondaryKeywords: [
    'WhatsApp API vs app',
    'WhatsApp broadcast limit 256',
    'WhatsApp green tick difference',
    'WhatsApp API price India',
  ],
  ogImage: '/banner.png',
  ogType: 'article',
  changeFrequency: 'monthly',
  priority: 0.8,
  breadcrumb: [
    { name: 'Home', url: `${siteConfig.baseUrl}/` },
    { name: 'Blog', url: `${siteConfig.baseUrl}/#insights` },
    { name: 'WhatsApp Business App vs API', url: `${siteConfig.baseUrl}/blog/whatsapp-business-app-vs-api` },
  ],
  faqList: [
    {
      question: 'Can I keep my existing phone number when switching to the API?',
      answer:
        'Yes. You can use your existing mobile or landline number for the API. However, you must first delete your account from the standard WhatsApp mobile app before Meta’s Cloud API can register it. WhatNexis provides complete onboarding support during this transition.',
    },
    {
      question: 'Do I lose my chat history when upgrading from the App to the API?',
      answer:
        'Because the API operates on a cloud dashboard rather than your local smartphone storage, historical chats stored locally on your device do not automatically sync to the API dashboard. We recommend exporting important chat backups before switching.',
    },
    {
      question: 'How long does it take to activate the WhatsApp Business API?',
      answer:
        'With WhatNexis, most Indian businesses with a verified Meta Business Manager complete onboarding and launch their first broadcast within 48 to 72 hours.',
    },
    {
      question: 'Can I switch back to the regular app if I don’t like the API?',
      answer:
        'Yes. If your business requirements change, you can offboard your number from the Cloud API and re-register it on the standard WhatsApp Business mobile app at any time.',
    },
  ],
})
blogAppVsApiSeo.jsonLd = [
  generateWebPageSchema(blogAppVsApiSeo),
  generateFaqSchema(blogAppVsApiSeo.faqList),
  generateBreadcrumbSchema(blogAppVsApiSeo.breadcrumb),
]

// 9. Blog: How to Get WhatsApp Green Tick in India
export const blogGreenTickSeo = constructPageSeo({
  route: '/blog/how-to-get-whatsapp-green-tick-india',
  classification: 'INDEX',
  indexable: true,
  title: 'How to Get WhatsApp Green Tick in India: Guide',
  description:
    'Step-by-step guide on how to get the WhatsApp green tick in India. Learn Meta verification requirements, eligibility criteria, and common rejection reasons.',
  primaryKeyword: 'How to get the WhatsApp green tick in India',
  secondaryKeywords: [
    'WhatsApp green tick India',
    'Meta official business account',
    'WhatsApp verification badge',
    'green badge WhatsApp eligibility',
  ],
  ogImage: '/banner.png',
  ogType: 'article',
  changeFrequency: 'monthly',
  priority: 0.8,
  breadcrumb: [
    { name: 'Home', url: `${siteConfig.baseUrl}/` },
    { name: 'Blog', url: `${siteConfig.baseUrl}/#insights` },
    { name: 'WhatsApp Green Tick Guide', url: `${siteConfig.baseUrl}/blog/how-to-get-whatsapp-green-tick-india` },
  ],
  faqList: [
    {
      question: 'Does Meta charge a fee for the WhatsApp Green Tick?',
      answer:
        'No. Applying for the WhatsApp green tick is completely free. Meta does not levy any application fee, and WhatNexis does not charge extra for assisting you with the submission.',
    },
    {
      question: 'Can a brand-new startup get the Green Tick?',
      answer:
        'Yes, provided the startup has completed Meta Business verification and can demonstrate public notability through reputable news coverage or significant market traction.',
    },
    {
      question: 'Does getting the Green Tick reduce Meta’s conversation charges?',
      answer:
        'No. Per-message charges for marketing, utility, and authentication messages remain identical regardless of whether an account possesses a green tick.',
    },
    {
      question: 'Will changing my display name remove the Green Tick?',
      answer:
        'Yes. If you request a change to your approved display name after receiving the green tick, Meta will revoke the badge and require you to re-apply under the new name.',
    },
  ],
})
blogGreenTickSeo.jsonLd = [
  generateWebPageSchema(blogGreenTickSeo),
  generateFaqSchema(blogGreenTickSeo.faqList),
  generateBreadcrumbSchema(blogGreenTickSeo.breadcrumb),
]

// 10. Blog: How to Get WhatsApp Message Templates Approved
export const blogTemplatesSeo = constructPageSeo({
  route: '/blog/how-to-get-whatsapp-template-approved',
  classification: 'INDEX',
  indexable: true,
  title: 'How to Get WhatsApp Templates Approved by Meta',
  description:
    'Learn how to get WhatsApp message templates approved by Meta on the first try. Avoid rejections, format variables correctly, and understand 2026 guidelines.',
  primaryKeyword: 'How to get WhatsApp message templates approved',
  secondaryKeywords: [
    'WhatsApp message template approval',
    'Meta template rejection reasons',
    'WhatsApp broadcast template rules',
    'WhatsApp marketing template guidelines',
  ],
  ogImage: '/banner.png',
  ogType: 'article',
  changeFrequency: 'monthly',
  priority: 0.8,
  breadcrumb: [
    { name: 'Home', url: `${siteConfig.baseUrl}/` },
    { name: 'Blog', url: `${siteConfig.baseUrl}/#insights` },
    { name: 'WhatsApp Template Approval Guide', url: `${siteConfig.baseUrl}/blog/how-to-get-whatsapp-template-approved` },
  ],
  faqList: [
    {
      question: 'How long does Meta take to approve a message template?',
      answer:
        'Most standard templates submitted via WhatNexis are evaluated by Meta’s automated AI within 1 to 5 minutes. In rare cases where human review is triggered, approval may take up to 24 hours.',
    },
    {
      question: 'Can I edit a message template after it has been approved?',
      answer:
        'Yes. Meta allows you to edit approved templates. However, any modification sends the template back through the review process, during which the previous version cannot be sent.',
    },
    {
      question: 'What are Quick Reply buttons versus Call-to-Action buttons?',
      answer:
        'Quick Reply Buttons allow users to tap a pre-defined text response (e.g., "Confirm COD", "Speak to Agent"), sending that text back into the chat. Call-to-Action Buttons direct the user to an external website URL (e.g., "Track Order") or trigger a phone call to your business.',
    },
    {
      question: 'Can I include emojis in WhatsApp templates?',
      answer:
        'Yes. Emojis are fully supported and encourage engagement when used tastefully. Avoid stuffing sentences with continuous emoji strings, which can trigger spam filters.',
    },
  ],
})
blogTemplatesSeo.jsonLd = [
  generateWebPageSchema(blogTemplatesSeo),
  generateFaqSchema(blogTemplatesSeo.faqList),
  generateBreadcrumbSchema(blogTemplatesSeo.breadcrumb),
]
