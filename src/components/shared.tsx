import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export const SectionHeader = ({ badge, title, description, light, center = true }: SectionHeaderProps) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
    {badge && (
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
        light ? "bg-primary-foreground/10 text-primary-foreground" : "bg-secondary text-secondary-foreground"
      }`}>
        {badge}
      </span>
    )}
    <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
      light ? "text-primary-foreground" : "text-foreground"
    }`}>
      {title}
    </h2>
    {description && (
      <p className={`text-lg leading-relaxed ${
        light ? "text-primary-foreground/70" : "text-muted-foreground"
      }`}>
        {description}
      </p>
    )}
  </div>
);

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => (
  <div className={`group bg-card rounded-xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-up-delay-${index % 4}`}>
    <div className="w-12 h-12 rounded-lg gradient-card flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
      <Icon size={24} className="text-primary-foreground" />
    </div>
    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export const PageHero = ({ badge, title, description, children }: PageHeroProps) => (
  <section className="gradient-hero pt-32 lg:pt-40 pb-16 lg:pb-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_80%_50%/0.3),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(280_70%_40%/0.2),transparent_60%)]" />
    <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-primary-foreground/10 text-primary-foreground animate-fade-up">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up-delay-1">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
          {description}
        </p>
        {children && <div className="mt-8 animate-fade-up-delay-3">{children}</div>}
      </div>
    </div>
  </section>
);
