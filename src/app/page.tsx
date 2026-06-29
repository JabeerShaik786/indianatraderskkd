'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import initialGalleryItems from './gallery-data.json';
import {
  Shield,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Zap,
  Hammer,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Check
} from 'lucide-react';

import Header from '@/components/Header';
import Lightbox from '@/components/Lightbox';
import ConsultationForm from '@/components/ConsultationForm';
import CountUp from '@/components/CountUp';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sectionReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 0.08
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  // Trust metrics
  const trustMetrics = [
    { value: '500+', label: 'Projects Delivered', desc: 'Across Andhra Pradesh' },
    { value: '10+', label: 'Years Experience', desc: 'Precision Engineering' },
    { value: '98%', label: 'Client Satisfaction', desc: 'Word-of-Mouth Legacy' },
    { value: 'End-to-End', label: 'Service Delivery', desc: 'Design to Crane-Lifting' },
  ];

  // Services list
  const services = [
    {
      title: 'Container Homes',
      desc: 'Luxurious, eco-friendly living spaces designed with modern architectural aesthetics and premium thermal insulation.',
      image: '/images/container_home.png',
    },
    {
      title: 'Modular Offices',
      desc: 'Sleek, high-productivity workspaces engineered with clean electrical conduits and modern corporate aesthetics.',
      image: '/images/modular_office.png',
    },
    {
      title: 'Site Offices',
      desc: 'Durable, weather-proof, and easily transportable cabins tailored for site managers and remote operations.',
      image: '/images/site_office.png',
    },
    {
      title: 'Storage Containers',
      desc: 'High-security, heavy-duty COR-TEN steel storage units designed to endure harsh coastal environments.',
      image: '/images/storage_container.png',
    },
    {
      title: 'Container Cafés',
      desc: 'Chic, customizable retail storefronts with hydraulic service bays and premium exterior wood paneling.',
      image: '/images/container_cafe.png',
    },
    {
      title: 'Custom Structures',
      desc: 'Bespoke design-build architectural solutions tailored to unique shapes, decks, and structural needs.',
      image: '/images/custom_structure.png',
    },
  ];

  // Featured Projects (Architectural Portfolio style)
  const projects = [
    {
      name: 'Modern Container Office',
      location: 'Kakinada, AP',
      type: 'Container Office',
      time: '4 Weeks',
      structure: 'Premium ISO Container Steel',
      image: '/images/project_office.jpg',
      desc: 'A premium custom-built container office featuring modern architecture, spacious interiors, panoramic glass windows, and a professional workspace designed for businesses and site operations.',
    },
    {
      name: 'Global Vision School',
      location: 'Rajahmundry, AP',
      type: 'Container School',
      time: '8 Weeks',
      structure: 'Premium ISO Container Steel',
      image: '/images/project_school.jpg',
      desc: 'A modular container school designed to provide safe, durable, and functional learning spaces with modern classrooms, excellent ventilation, and fast construction.',
    },
    {
      name: 'Hill View Guest House',
      location: 'Araku, AP',
      type: 'Container Guest House',
      time: '12 Weeks',
      structure: 'Premium ISO Container Steel',
      image: '/images/project_guesthouse.jpg',
      desc: 'A premium multi-level container guest house designed for comfortable stays, offering spacious balconies, scenic views, modern interiors, and durable steel construction.',
    },
    {
      name: 'The Urban Container Café',
      location: 'Visakhapatnam, AP',
      type: 'Container Café',
      time: '6 Weeks',
      structure: 'Premium ISO Container Steel',
      image: '/images/project_cafe.jpg',
      desc: 'A stylish container café featuring contemporary architecture, inviting outdoor seating, premium interiors, and a welcoming atmosphere for customers.',
    },
  ];

  // Gallery items state (loaded statically at compile-time)
  const [galleryItems] = useState(initialGalleryItems);

  const filteredGallery = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    // Find index in the filtered gallery list
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
  };

  const categories = ['All', 'Houses', 'Bed-bunkers', 'Washrooms', 'Offices', 'Cafes'];

  // Testimonials
  const testimonials = [
    {
      quote: "Indiana Traders built our dream beach cottage on the outskirts of Kakinada. The architectural guidance, thermal proofing, and finishing are absolutely elite. It feels cooler than our concrete house!",
      name: 'Dr. Srinivas Raju',
      role: 'Homeowner',
      location: 'Kakinada',
    },
    {
      quote: "We required high-quality, relocatable engineering cabins for our harbor site. Indiana Traders delivered robust, high-performance site offices. Their engineering standards are second to none in Andhra Pradesh.",
      name: 'Suresh Naidu',
      role: 'Infrastructure Director',
      location: 'Visakhapatnam',
    },
    {
      quote: "Our boutique coffee shop container became an overnight sensation on Instagram. The build quality is amazing, and the hydraulic serving counter makes packing up at night incredibly secure.",
      name: 'Preethi G.',
      role: 'Founder, Brews & Co.',
      location: 'Rajahmundry',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#012A4A] flex flex-col font-sans antialiased selection:bg-[#01497C]/25 selection:text-[#012A4A]">
      <Header />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center pt-20 overflow-hidden bg-[#012A4A]">
        {/* Hero Background Image - full screen background covering the entire hero */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="relative w-full h-full">
            <motion.img
              src="/images/hero_sunset_hill.jpg"
              alt="Premium Container House by Indiana Traders"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="w-full h-full object-cover object-center"
            />
            {/* Soft left-to-right gradient overlay to improve text readability */}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(1,42,74,0.65) 0%, rgba(1,42,74,0.45) 25%, rgba(1,42,74,0.20) 50%, rgba(1,42,74,0.05) 70%, rgba(1,42,74,0) 100%)'
              }}
            />
          </div>
        </div>

        <div className="w-full pl-[8%] md:pl-[8%] lg:pl-[10%] pr-6 relative z-10">
          <div className="max-w-2xl flex flex-col space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-headings text-5xl sm:text-6xl lg:text-[4.5rem] font-medium text-white leading-[1.05] tracking-normal max-w-[800px] [text-shadow:0_2px_8px_rgba(0,0,0,0.15)]"
            >
              Modern Container Solutions <br />
              Built to Last.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full"
            >
              <a
                href="#consultation"
                className="w-full sm:w-48 h-12 inline-flex items-center justify-center bg-white text-[#012A4A] text-[15px] font-bold tracking-[0.02em] font-headings transition-all duration-200 active:scale-[0.98] rounded-[10px] shadow-sm hover:shadow-md hover:-translate-y-[2px] px-4"
              >
                Request a Quote
              </a>
              <a
                href="https://wa.me/919491632123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-48 h-12 inline-flex items-center justify-center bg-transparent border border-white text-white text-[15px] font-bold tracking-[0.02em] font-headings transition-all duration-200 active:scale-[0.98] rounded-[10px] shadow-sm hover:shadow-md hover:-translate-y-[2px] gap-2 px-4 group/btn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0 text-white transition-colors duration-150">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.99S14.64 1.252 12.008 1.252c-5.441 0-9.866 4.42-9.869 9.866-.001 1.77.463 3.498 1.345 5.021l-.98 3.586 3.673-.963zm10.702-6.559c-.299-.15-1.77-.874-2.043-.973-.274-.099-.474-.149-.673.15-.198.298-.77.973-.943 1.171-.173.199-.347.223-.646.074-.299-.15-1.265-.466-2.41-1.484-.89-.793-1.49-1.772-1.664-2.07-.173-.299-.018-.46.131-.609.135-.133.298-.347.447-.521.15-.173.199-.298.298-.497.1-.198.05-.371-.025-.521-.075-.15-.673-1.62-.922-2.206-.24-.58-.485-.5-.673-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.77-.724 2.02-1.424.248-.699.248-1.299.173-1.424-.075-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        className="bg-[#F8FBFD] border-y border-[rgba(1,42,74,0.08)] py-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric, idx) => {
              const numberMatch = metric.value.match(/^(\d+)(.*)$/);
              return (
                <div key={idx} className="flex flex-col border-l-2 border-[#01497C] pl-6">
                  <span className="font-headings text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#012A4A] leading-[1.1]">
                    {numberMatch ? (
                      <CountUp end={parseInt(numberMatch[1], 10)} suffix={numberMatch[2]} />
                    ) : (
                      metric.value
                    )}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#012A4A] font-semibold mt-1">
                    {metric.label}
                  </span>
                  <span className="text-xs text-[#6B7280] mt-0.5">
                    {metric.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 3. ABOUT INDIANA TRADERS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="about"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Box */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageReveal}
              >
                <div className="overflow-hidden rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]">
                  <img
                    src="/images/about_container_home.png"
                    alt="Premium Container Solution Home"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">About Us</span>
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
                Premium Container Solutions Since Day One.
              </h2>
              <div className="text-base text-[#4B5563] leading-relaxed space-y-4">
                <p>
                  Indiana Traders creates modern container spaces for homes, offices, cafés and industrial use.
                </p>
                <p>
                  Every project is custom built with quality materials, careful workmanship and on-time delivery.
                </p>
              </div>

              {/* Bullet Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-6 border-t border-[rgba(1,42,74,0.08)]">
                {[
                  "Custom Designs for Every Requirement",
                  "Premium Quality Materials",
                  "Fast & Reliable Installation",
                  "Durable & Weather-Resistant Construction",
                  "Delivered Across Andhra Pradesh",
                  "Transparent & Honest Pricing"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#01497C]/10 flex items-center justify-center text-[#01497C] shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-[#01497C]/20">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-[#4B5563] group-hover:text-[#012A4A] transition-colors duration-200">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Premium Button */}
              <div className="pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-[#012A4A] text-white text-[15px] font-bold tracking-[0.02em] font-headings h-12 px-8 rounded-[10px] shadow-sm hover:shadow-md hover:bg-[#013A63] hover:-translate-y-[2px] transition-all duration-200 active:scale-[0.98]"
                >
                  Explore Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>



      {/* 4. SERVICES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="services"
        className="py-24 bg-[#F8FBFD] border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Comprehensive Capabilities</span>
            <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
              Container Architecture Services
            </h2>
            <p className="text-base text-[#4B5563]">
              From residential homes to commercial storefronts and high-capacity industrial units, we build modular steel solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-[rgba(1,42,74,0.08)] rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-lg hover:border-[#2A6F97] flex flex-col h-full"
              >
                <div>
                  <div className="relative h-60 overflow-hidden rounded-t-[12px] bg-gray-100">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={imageReveal}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-headings text-xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15] mb-3 group-hover:text-[#01497C] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. FEATURED PROJECTS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="projects"
        className="py-24 bg-white border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Architectural Portfolio</span>
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
                Featured Commissions
              </h2>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#012A4A] hover:text-[#01497C] transition-colors border-b border-[#012A4A] pb-1 hover:border-[#01497C]"
            >
              Explore Full Gallery
            </a>
          </div>

          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Block */}
                <div className={`lg:col-span-7 bg-white border border-[rgba(1,42,74,0.08)] p-3 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-lg ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="overflow-hidden relative group">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={imageReveal}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-5 space-y-6 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  {/* Project metadata */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-[#4B5563] font-semibold">
                    <div className="flex items-center gap-1.5 text-[#2C7DA0]">
                      <MapPin size={12} className="text-[#2C7DA0]" />
                      <span>{project.location}</span>
                    </div>
                    <div>•</div>
                    <div>{project.type}</div>
                  </div>

                  <h3 className="font-headings text-2xl sm:text-3xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
                    {project.name}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-[rgba(1,42,74,0.08)] py-4 my-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B7280]">Timeline</span>
                      <p className="text-sm font-semibold text-[#012A4A] mt-1">{project.time}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B7280]">Structure</span>
                      <p className="text-sm font-semibold text-[#012A4A] mt-1">{project.structure}</p>
                    </div>
                  </div>

                  <a
                    href="#consultation"
                    className="inline-flex items-center justify-center px-5 py-3 bg-[#01497C] text-white hover:bg-[#013A63] active:scale-[0.98] text-[16px] font-semibold tracking-[0.02em] font-headings transition-all duration-150"
                  >
                    <span>View Similar Project</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. SOCIAL MEDIA SHOWCASE (HIGH PRIORITY) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="connect"
        className="py-24 bg-white border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Social Proof & Updates</span>
            <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
              Follow Our Builds
            </h2>
            <p className="text-sm text-[#4B5563]">
              We post daily footage of raw containers transforming into luxury cabins. Explore our workshops, client interviews, and live crane installations.
            </p>

            {/* Social Channel stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-6">
              <a href="https://www.instagram.com/indianatraders.kkd/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <Instagram size={18} className="text-[#01497C] transition-transform duration-250 group-hover:rotate-[5deg]" />
                <span className="text-xs font-semibold text-[#012A4A]">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@indianatraders1936/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <Youtube size={18} className="text-[#01497C] transition-transform duration-250 group-hover:rotate-[5deg]" />
                <span className="text-xs font-semibold text-[#012A4A]">YouTube</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590805607966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <Facebook size={18} className="text-[#01497C] transition-transform duration-250 group-hover:rotate-[5deg]" />
                <span className="text-xs font-semibold text-[#012A4A]">Facebook</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* YouTube Simulated Card */}
            <div
              className="group border border-[#F2F4F7] bg-white flex flex-col justify-between rounded-[22px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 p-8"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <a
                href="https://youtu.be/4nBoigEfv_8"
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-1 flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/profile_avatar.jpg"
                      alt="Indiana Traders"
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#F2F4F7]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] tracking-tight">Indiana Traders</h4>
                      <p className="text-[11px] text-[#9CA3AF] mt-0.5 font-medium">2 weeks ago</p>
                    </div>
                  </div>
                  <Youtube size={20} className="text-[#9CA3AF] transition-transform duration-250 group-hover:rotate-[5deg]" />
                </div>
                {/* Simulated Thumbnail */}
                <div className="relative h-48 bg-[#F9FAFB] overflow-hidden rounded-[16px] mb-6">
                  <img src="/images/sdc_news_thumbnail.png" alt="YT thumbnail" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FAFAFA]/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-250">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-[#012A4A] border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black text-white text-[10px] px-1.5 py-0.5 font-mono rounded">14:22</span>
                </div>
              </a>
              <div className="flex w-full gap-3 mt-auto">
                <a
                  href="https://youtu.be/4nBoigEfv_8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#0F2D52] text-[#0F2D52] bg-white hover:bg-[#0F2D52] hover:text-white rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1.5 group/btn shadow-sm"
                >
                  <span>Watch Video</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 duration-[200ms]" />
                </a>
                <a
                  href="https://www.youtube.com/@indianatraders1936/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#E5E7EB] text-[#374151] bg-white hover:bg-[#F9FAFB] hover:border-[#D1D5DB] rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1 group/btn shadow-sm"
                >
                  <span>Subscribe Channel</span>
                </a>
              </div>
            </div>

            {/* Instagram Simulated Card */}
            <div
              className="group border border-[#F2F4F7] bg-white flex flex-col justify-between rounded-[22px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 p-8"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <a
                href="https://www.instagram.com/reel/DNaUtCpPb9_/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-1 flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/profile_avatar.jpg"
                      alt="Indiana Traders"
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#F2F4F7]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] tracking-tight">indianatraders.kkd</h4>
                      <p className="text-[11px] text-[#9CA3AF] mt-0.5 font-medium">3 days ago</p>
                    </div>
                  </div>
                  <Instagram size={20} className="text-[#9CA3AF] transition-transform duration-250 group-hover:rotate-[5deg]" />
                </div>
                {/* Simulated Thumbnail */}
                <div className="relative h-48 bg-[#F9FAFB] overflow-hidden rounded-[16px] mb-6">
                  <img src="/images/instagram_reel_thumbnail.png" alt="IG post" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
              </a>
              <div className="flex w-full gap-3 mt-auto">
                <a
                  href="https://www.instagram.com/reel/DNaUtCpPb9_/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#0F2D52] text-[#0F2D52] bg-white hover:bg-[#0F2D52] hover:text-white rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1.5 group/btn shadow-sm"
                >
                  <span>Watch Reel</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 duration-[200ms]" />
                </a>
                <a
                  href="https://www.instagram.com/indianatraders.kkd/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#E5E7EB] text-[#374151] bg-white hover:bg-[#F9FAFB] hover:border-[#D1D5DB] rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1 group/btn shadow-sm"
                >
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            {/* Facebook Simulated Card */}
            <div
              className="group border border-[#F2F4F7] bg-white flex flex-col justify-between rounded-[22px] shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 p-8"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <a
                href="https://www.facebook.com/photo/?fbid=122103014037360186&set=a.122103014721360186"
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-1 flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/profile_avatar.jpg"
                      alt="Indiana Traders"
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#F2F4F7]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] tracking-tight">Indiana Traders</h4>
                      <p className="text-[11px] text-[#9CA3AF] mt-0.5 font-medium">Yesterday</p>
                    </div>
                  </div>
                  <Facebook size={20} className="text-[#9CA3AF] transition-transform duration-250 group-hover:rotate-[5deg]" />
                </div>
                {/* Simulated Thumbnail */}
                <div className="relative h-48 bg-[#F9FAFB] overflow-hidden rounded-[16px] mb-6">
                  <img src="/images/facebook_thumbnail.jpg" alt="FB post" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
              </a>
              <div className="flex w-full gap-3 mt-auto">
                <a
                  href="https://www.facebook.com/photo/?fbid=122103014037360186&set=a.122103014721360186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#0F2D52] text-[#0F2D52] bg-white hover:bg-[#0F2D52] hover:text-white rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1.5 group/btn shadow-sm"
                >
                  <span>View Post</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 duration-[200ms]" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590805607966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-[#E5E7EB] text-[#374151] bg-white hover:bg-[#F9FAFB] hover:border-[#D1D5DB] rounded-[14px] text-xs font-semibold tracking-[0.02em] transition-all duration-[200ms] active:scale-[0.98] flex items-center justify-center gap-1.5 group/btn shadow-sm"
                >
                  <span>Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. PROJECT GALLERY (MASONRY & LIGHTBOX) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="gallery"
        className="py-24 bg-[#F8FBFD] border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Image Catalog</span>
            <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
              Design Gallery
            </h2>
            <p className="text-sm text-[#4B5563]">
              Browse detailed interior and exterior profiles of our modular office units, storage setups, and custom container homes.
            </p>

            {/* Category Filter */}
            <div className="flex items-center justify-start md:justify-center gap-3 pt-6 overflow-x-auto scrollbar-none max-w-full pb-2 md:pb-0 px-2 md:px-0">
              <div className="flex flex-nowrap md:flex-wrap gap-3 mx-auto">
                {categories.map((cat) => (
                  <button
                     key={cat}
                     onClick={() => setSelectedCategory(cat)}
                     className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'border-[#01497C] bg-[#01497C] text-white'
                        : 'border-[rgba(1,42,74,0.08)] bg-white text-[#6B7280] hover:border-[#01497C]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
                    }
                  }
                }}
                onClick={() => openLightbox(idx)}
                className="relative cursor-pointer overflow-hidden border border-[rgba(1,42,74,0.08)] bg-white p-2 md:p-2.5"
              >
                <div className="overflow-hidden aspect-square md:aspect-auto md:h-72 relative bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>



      {/* 9. CLIENT TESTIMONIALS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="testimonials"
        className="py-24 bg-white border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Client Testimonials</span>
            <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
              Verified Client Reviews
            </h2>
            <p className="text-sm text-[#4B5563]">
              Read how clients across Andhra Pradesh evaluate our structures, delivery times, and engineering discipline.
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-4 marquee-container">
            {/* Soft gradient fade overlay for premium appearance */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

            <div className="marquee-wrapper overflow-hidden w-full">
              <div className="animate-marquee-ltr flex">
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                  <div
                    key={idx}
                    className="w-[85vw] sm:w-[50vw] md:w-[340px] lg:w-[380px] shrink-0 px-4"
                  >
                    <div className="bg-white border border-[rgba(1,42,74,0.08)] p-8 flex flex-col justify-between h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="space-y-4">
                        {/* Rating Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#01497C] text-sm">★</span>
                          ))}
                        </div>
                        <p className="text-sm text-[#4B5563] italic leading-relaxed">
                          "{t.quote}"
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-[rgba(1,42,74,0.08)]">
                        <h4 className="text-sm font-semibold text-[#012A4A] font-headings">{t.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10. CONSULTATION SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="consultation"
        className="py-24 bg-white border-t border-[rgba(1,42,74,0.08)] relative overflow-hidden"
      >
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#01497C]/5 to-transparent rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#01497C] font-bold">Start Your Commission</span>
            <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm text-[#4B5563] max-w-lg mx-auto">
              Submit your project ideas, location, and estimated budget below. Our engineering team will review and contact you with design proposals and price structures.
            </p>
          </div>

          <ConsultationForm />
        </div>
      </motion.section>

      {/* 11. CONTACT SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        id="contact"
        className="py-24 bg-[#F8FBFD] border-t border-[rgba(1,42,74,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-headings text-3xl sm:text-4xl font-semibold text-[#012A4A] tracking-[-0.02em] leading-[1.15]">
                  Reach Out To Us
                </h2>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Have a question about layouts, crane operations, site permissions, or custom prices? Contact us via call, WhatsApp, or visit our Kakinada fabrication yard.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 border border-[rgba(1,42,74,0.08)] bg-white flex items-center justify-center text-[#01497C] shrink-0 transition-transform duration-300 group-hover:rotate-[5deg]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#012A4A]">Call / WhatsApp</h4>
                    <p className="text-sm text-[#4B5563] mt-1 hover:text-[#01497C] transition-colors font-semibold">
                      <a href="tel:+919296553252">+91 92965 53252</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 border border-[rgba(1,42,74,0.08)] bg-white flex items-center justify-center text-[#01497C] shrink-0 transition-transform duration-300 group-hover:rotate-[5deg]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#012A4A]">Email</h4>
                    <p className="text-sm text-[#4B5563] mt-1 hover:text-[#01497C] transition-colors">
                      <a href="mailto:indianatraders.kkd@gmail.com">indianatraders.kkd@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 border border-[rgba(1,42,74,0.08)] bg-white flex items-center justify-center text-[#01497C] shrink-0 transition-transform duration-300 group-hover:rotate-[5deg]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#012A4A]">Fabrication Yard</h4>
                    <p className="text-sm text-[#4B5563] mt-1 leading-relaxed">
                      FCI Colony, Vakalapudi,<br />
                      Kakinada, Andhra Pradesh, 533005
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 border border-[rgba(1,42,74,0.08)] bg-white flex items-center justify-center text-[#01497C] shrink-0 transition-transform duration-300 group-hover:rotate-[5deg]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#012A4A]">Working Hours</h4>
                    <p className="text-sm text-[#4B5563] mt-1">
                      Monday - Saturday: 9:00 AM - 6:30 PM<br />
                      Sunday: Closed (By Appointment Only)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map & Directions Container */}
            <div className="lg:col-span-7 bg-white border border-[rgba(1,42,74,0.08)] p-3 flex flex-col justify-between h-[450px]">
              <div className="w-full flex-1 relative overflow-hidden rounded-[8px] bg-gray-100 mb-3">
                <iframe
                  src="https://maps.google.com/maps?q=FCI%20Colony,%20Vakalapudi,%20Kakinada,%20Andhra%20Pradesh%20533005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=FCI+Colony,+Vakalapudi,+Kakinada,+Andhra+Pradesh+533005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#01497C] text-white hover:bg-[#013A63] text-[16px] font-semibold tracking-[0.02em] font-headings active:scale-[0.98] transition-all duration-150 shadow-sm hover:shadow-md shrink-0"
              >
                <MapPin size={14} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 12. PREMIUM FOOTER */}
      <Footer />

      {/* Interactive Lightbox Container */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
}
