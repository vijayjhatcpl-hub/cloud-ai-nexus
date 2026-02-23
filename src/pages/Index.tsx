import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader, ServiceCard } from "@/components/shared";
import {
  Cloud, Brain, Database, Server,
  Shield, Zap, Users, Globe,
  Building2, HeartPulse, Landmark, ShoppingCart,
  Factory, Plane, GraduationCap, Quote,
  ArrowRight, CheckCircle2
} from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Services", description: "Multi-cloud architecture, migration, and optimization across AWS, Azure, and Oracle Cloud.", link: "/cloud-services" },
  { icon: Brain, title: "AI & MLOps", description: "Intelligent database management, predictive analytics, and end-to-end ML lifecycle automation.", link: "/ai-solutions" },
  { icon: Database, title: "Data Engineering", description: "Scalable ETL pipelines, real-time analytics, and enterprise data governance.", link: "/data-engineering" },
  { icon: Server, title: "Oracle EBS Integration", description: "Seamless Oracle EBS modernization, ERP cloud migration, and hybrid solutions.", link: "/oracle-ebs" },
];

const strengths = [
  { icon: Shield, title: "Enterprise Security", description: "SOC 2, HIPAA, and GDPR compliant solutions with zero-trust architecture." },
  { icon: Zap, title: "Scalable Performance", description: "Built for high-throughput enterprise workloads with 99.99% uptime." },
  { icon: Users, title: "Expert Team", description: "Certified architects across AWS, Azure, OCI, and major AI platforms." },
  { icon: Globe, title: "Global Delivery", description: "24/7 support with teams across North America, Europe, and APAC." },
];

const industries = [
  { icon: Landmark, name: "Financial Services" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail & E-commerce" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Travel & Logistics" },
  { icon: Building2, name: "Government" },
  { icon: GraduationCap, name: "Education" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, FinVault Inc.", quote: "NexaSphere transformed our cloud infrastructure, reducing costs by 40% while improving performance across all our services." },
  { name: "Marcus Johnson", role: "VP Engineering, MedFlow", quote: "Their AI-driven database optimization saved us hundreds of engineering hours and made our systems incredibly reliable." },
  { name: "Elena Rodriguez", role: "Director of IT, RetailPro", quote: "The Oracle EBS migration was seamless. NexaSphere's expertise in hybrid cloud made a complex project feel effortless." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_80%_50%/0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(280_70%_40%/0.2),transparent_60%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-light/5 rounded-full blur-3xl" />
        
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-primary-foreground/10 text-primary-foreground/90 animate-fade-up">
              Enterprise Cloud & AI Consulting
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up-delay-1">
              Transforming Cloud, Data & AI into{" "}
              <span className="bg-gradient-to-r from-purple-glow to-primary-foreground bg-clip-text text-transparent">
                Scalable Enterprise Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
              We architect, migrate, and optimize your Cloud, AI, Data Engineering, and Oracle ecosystems — delivering measurable business outcomes at enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/cloud-services">Explore Services <ArrowRight size={18} /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Our Services"
            title="End-to-End Enterprise Solutions"
            description="From cloud infrastructure to AI-driven insights, we provide comprehensive solutions tailored to your business needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className="group">
                <ServiceCard icon={s.icon} title={s.title} description={s.description} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Why NexaSphere"
            title="Built for Enterprise Excellence"
            description="We combine deep technical expertise with a proven enterprise methodology to deliver solutions that scale."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl gradient-card flex items-center justify-center mx-auto mb-4">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Industries"
            title="Trusted Across Industries"
            description="We serve enterprises across diverse sectors with tailored cloud and AI solutions."
          />
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
                <ind.icon size={20} className="text-primary" />
                <span className="font-medium text-sm">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-8 card-shadow border border-border relative">
                <Quote size={32} className="text-primary/10 absolute top-6 right-6" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how our Cloud, AI, and Data solutions can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Journey <ArrowRight size={18} /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
