'use client';

const getAssetPath = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const basePath = '/indianatraderskkd';
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};

import { motion } from 'framer-motion';
import { Shield, Clock, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          Indiana Traders values customer privacy and is committed to protecting your personal information. This Privacy Policy details how we collect, use, store, and secure the information you share with us through our website, online forms, WhatsApp communication, or direct business channels. By using our services, you consent to the practices described in this policy.
        </p>
      )
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: (
        <div className="space-y-4">
          <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
            We collect information that helps us provide you with customized container solutions. This includes:
          </p>
          <ul className="list-none pl-0 space-y-2.5 font-body text-[#4B5563] text-[15px]">
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span><strong>Identity Information:</strong> Name and business name.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span><strong>Contact Information:</strong> Phone number, WhatsApp contact info, and email address.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span><strong>Project Location:</strong> Delivery location or fabrication site coordinates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span><strong>Project Details:</strong> Size, structure preferences, budget configurations, and structural specifications voluntarily submitted through our consultation forms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span><strong>Communication Content:</strong> Any information or design files voluntarily submitted through email, direct messaging, or WhatsApp channels.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-we-use-information',
      title: '3. How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
            We utilize the information we collect to coordinate projects, manufacture structures, and run our operations. Specifically:
          </p>
          <ul className="list-none pl-0 space-y-2.5 font-body text-[#4B5563] text-[15px]">
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span>Responding to project enquiries and consult requests.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span>Providing accurate project quotations, drafts, and architectural layouts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span>Providing customer support and scheduling site inspections.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span>Managing project construction progress, logistic updates, and delivery timelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#01497C] font-semibold mt-0.5">•</span>
              <span>Improving website performance, client experiences, and customizing solutions.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'information-sharing',
      title: '4. Information Sharing',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          Indiana Traders does not sell, trade, rent, or lease customer information to third parties. We value your trust. We will only disclose your information when required to do so by applicable law, or in response to valid legal requests by regulatory bodies or law enforcement authorities.
        </p>
      )
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          We implement industry-standard physical, electronic, and administrative security measures to safeguard your personal data from unauthorized access, alteration, disclosure, or loss. However, please note that no transmission method over the internet or database storage mechanism is completely secure, and we cannot guarantee absolute security.
        </p>
      )
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          Our website may use cookies and similar tracking identifiers to analyze site traffic, improve user experience, and monitor website performance. You can choose to accept or decline cookies through your browser settings, though declining cookies may disable or impact certain functional features of this website.
        </p>
      )
    },
    {
      id: 'third-party-services',
      title: '7. Third-Party Services',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          Our website links to or utilizes third-party integrations, such as Google Maps (for yard locations), WhatsApp (for direct consultation chat), and analytics trackers. These external entities collect and process details in compliance with their own independent privacy guidelines. We recommend reviewing the privacy statements of those third-party services before sharing information.
        </p>
      )
    },
    {
      id: 'your-rights',
      title: '8. Your Rights',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          You hold rights regarding your personal information. You may request to view, correct, update, or permanently delete the personal data we store by writing to us. We will process all valid requests in a timely manner.
        </p>
      )
    },
    {
      id: 'contact-information',
      title: '9. Contact Information',
      content: (
        <div className="bg-gray-50 border border-[rgba(1,42,74,0.08)] p-6 rounded-[8px] space-y-4">
          <h5 className="font-headings text-lg font-bold text-[#012A4A]">Indiana Traders</h5>
          <div className="space-y-3 font-body text-[#4B5563] text-[14px]">
            <a href="tel:+919296553252" className="flex items-center gap-3 hover:text-[#01497C] transition-colors">
              <Phone size={16} className="text-[#01497C] shrink-0" />
              <span>+91 92965 53252</span>
            </a>
            <a href="mailto:indianatraders.kkd@gmail.com" className="flex items-center gap-3 hover:text-[#01497C] transition-colors">
              <Mail size={16} className="text-[#01497C] shrink-0" />
              <span>indianatraders.kkd@gmail.com</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#01497C] mt-0.5 shrink-0" />
              <span>
                FCI Colony, Vakalapudi,<br />
                Kakinada, Andhra Pradesh – 533005
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'policy-updates',
      title: '10. Updates to this Policy',
      content: (
        <p className="font-body text-[#4B5563] text-[15px] leading-relaxed">
          Indiana Traders reserves the right to modify or update this Privacy Policy periodically. Any changes will be published directly on this page with the modified effective date. We recommend visiting this page regularly to stay informed about how we safeguard your data.
        </p>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Breadcrumbs / Back button */}
          <div className="mb-10">
            <a 
              href={getAssetPath("/")} 
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#01497C] hover:text-[#012A4A] transition-colors font-headings group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </a>
          </div>

          {/* Hero Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={pageTransition}
            className="border-b border-[rgba(1,42,74,0.08)] pb-8 mb-12"
          >
            <div className="flex items-center gap-3 text-[#01497C] mb-4">
              <Shield size={24} />
              <span className="text-xs uppercase tracking-[0.2em] font-headings font-bold">Privacy Center</span>
            </div>
            <h1 className="font-headings text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#012A4A] mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-2 text-xs text-[#6B7280] font-body">
              <Clock size={12} />
              <span>Last Updated: June 27, 2026</span>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-12 max-w-3xl"
          >
            {sections.map((section, idx) => (
              <motion.section 
                key={section.id}
                variants={pageTransition}
                className="scroll-mt-24"
              >
                <h2 className="font-headings text-xl md:text-2xl font-bold text-[#012A4A] mb-4 pb-2 border-b border-[rgba(1,42,74,0.05)]">
                  {section.title}
                </h2>
                {section.content}
              </motion.section>
            ))}
          </motion.div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
