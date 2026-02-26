import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import qtechLogo from "@/assets/qtech-logo.png";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={qtechLogo} alt="QTech Solutions" className="h-[60px] w-auto" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transforming enterprises through Cloud, AI, and Data solutions. Your trusted partner for digital transformation.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/cloud-services" className="hover:text-primary-foreground transition-colors">Cloud Services</Link></li>
              <li><Link to="/ai-solutions" className="hover:text-primary-foreground transition-colors">AI Solutions</Link></li>
              <li><Link to="/data-engineering" className="hover:text-primary-foreground transition-colors">Data Engineering</Link></li>
              <li><Link to="/oracle-ebs" className="hover:text-primary-foreground transition-colors">Oracle EBS Integration</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Mail size={14} /> info@qtechsolns.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +1 (516)-880-9996</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> 118 Spruce Street, West Hempstead, NY 11552</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} NexaSphere Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
