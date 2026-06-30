import { Phone, Instagram, Facebook, Youtube } from 'lucide-react';


const getAssetPath = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : '/indianatraderskkd';
  if (basePath && path.startsWith(basePath)) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};

export default function Footer() {
  return (
    <footer className="bg-[#012A4A] text-white pt-20 pb-10 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Branding Column */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <a href={getAssetPath("/#hero")} className="flex flex-col w-fit">
              <span className="font-headings text-2xl font-bold tracking-wider text-white">
                INDIANA TRADERS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#89C2D9] font-body -mt-1 font-semibold">
                Container Solutions
              </span>
            </a>
            <p className="text-xs text-[#89C2D9] leading-relaxed font-normal opacity-100" style={{ color: '#89C2D9', opacity: 1 }}>
              Crafting luxury container homes, modular offices, site cabins, and customized steel structures with engineering excellence in Kakinada, Andhra Pradesh.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/indianatraders.kkd/?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#89C2D9] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590805607966" target="_blank" rel="noopener noreferrer" className="text-[#89C2D9] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com/@indianatraders1936/" target="_blank" rel="noopener noreferrer" className="text-[#89C2D9] hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Solutions</h4>
            <ul className="space-y-3 text-xs font-normal">
              <li><a href="/#services" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Container Homes</a></li>
              <li><a href="/#services" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Modular Corporate Offices</a></li>
              <li><a href="/#services" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Portable Site Cabins</a></li>
              <li><a href="/#services" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Secure Storage Containers</a></li>
              <li><a href="/#services" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Bespoke Commercial Cafés</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Quick Navigation</h4>
            <ul className="space-y-3 text-xs font-normal">
              <li><a href="/#about" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">About Our Studio</a></li>
              <li><a href="/#projects" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Featured Projects</a></li>
              <li><a href="/#gallery" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Image Gallery</a></li>
              <li><a href="/#connect" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Connect</a></li>
              <li><a href="/#consultation" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Consultation Form</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Kakinada Office</h4>
            <p className="text-xs text-[#89C2D9] leading-relaxed font-normal opacity-100" style={{ color: '#89C2D9', opacity: 1 }}>
              FCI Colony,<br />
              Vakalapudi,<br />
              Kakinada, Andhra Pradesh – 533005
            </p>
            <div className="pt-2">
              <a
                href="tel:+919296553252"
                className="text-xs font-semibold text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out flex items-center gap-1.5 opacity-100"
              >
                <Phone size={12} />
                <span>+91 92965 53252</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-[#89C2D9] font-semibold tracking-wider uppercase opacity-100">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="opacity-100">© {new Date().getFullYear()} Indiana Traders. All Rights Reserved.</span>
            <div className="flex items-center gap-2 justify-center sm:justify-start opacity-100">
              <img
                src={getAssetPath("/images/jk-logo.png")}
                alt="JK & Co."
                className="w-5 h-5 rounded-full object-contain shrink-0"
                loading="lazy"
              />
              <span className="opacity-100">Designed and Managed by JK & Co.</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href={getAssetPath("/#hero")} className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Back To Top</a>
            <span className="text-[#89C2D9] opacity-100">•</span>
            <a href={getAssetPath("/privacy-policy/")} target="_blank" rel="noopener noreferrer" className="text-[#89C2D9] hover:text-white transition-colors duration-300 ease-in-out opacity-100">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
