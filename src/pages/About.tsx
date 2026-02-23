import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader } from "@/components/shared";
import {
  Target, Eye, Users, Cpu, Workflow, ArrowRight, CheckCircle2
} from "lucide-react";

const leaders = [
  { name: "David Park", role: "CEO & Founder", bio: "20+ years in enterprise technology consulting with Fortune 500 clients." },
  { name: "Dr. Aisha Rahman", role: "Chief Technology Officer", bio: "Former AWS Principal Architect. PhD in Distributed Systems." },
  { name: "Michael Torres", role: "VP of Cloud Services", bio: "15+ years leading cloud transformation programs across major platforms." },
  { name: "Jennifer Liu", role: "Head of AI & Data", bio: "Former ML lead at a major tech company. Expert in enterprise AI deployments." },
];

const expertise = [
  "AWS, Azure, Oracle Cloud (OCI)",
  "Kubernetes, Docker, Terraform",
  "Apache Spark, Kafka, Airflow",
  "TensorFlow, PyTorch, MLflow",
  "Oracle EBS, Fusion, PeopleSoft",
  "CI/CD, GitOps, DevSecOps",
];

const AboutPage = () => {
  return (
    <main>
      <PageHero
        badge="About Us"
        title="Empowering Enterprises Through Technology"
        description="NexaSphere is a premier cloud and AI consulting firm dedicated to helping enterprises achieve digital transformation."
      />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-lg gradient-card flex items-center justify-center mb-5">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize enterprise-grade cloud, AI, and data solutions — making cutting-edge technology accessible, scalable, and impactful for organizations of every size.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-lg gradient-card flex items-center justify-center mb-5">
                <Eye size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted partner for enterprise digital transformation, pioneering AI-driven cloud solutions that define the future of business technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            description="Industry veterans with deep expertise across cloud, AI, and enterprise systems."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l, i) => (
              <div key={i} className="bg-card rounded-xl p-6 card-shadow border border-border text-center">
                <div className="w-20 h-20 rounded-full gradient-card flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{l.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{l.role}</p>
                <p className="text-muted-foreground text-sm">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Technology"
            title="Our Technology Expertise"
            description="We maintain deep expertise across the modern enterprise technology stack."
          />
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertise.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-secondary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Methodology"
            title="Enterprise-Focused Approach"
            description="Our proven methodology ensures predictable outcomes, transparent communication, and measurable value."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Discovery & Strategy", desc: "Deep-dive assessment of your technology landscape, business objectives, and transformation roadmap." },
              { icon: Cpu, title: "Architecture & Build", desc: "Solution design, development, and rigorous testing with enterprise-grade quality assurance." },
              { icon: Workflow, title: "Deploy & Evolve", desc: "Smooth production rollouts with ongoing support, optimization, and continuous improvement." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-8 card-shadow border border-border text-center">
                <div className="w-14 h-14 rounded-xl gradient-card flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Partner with NexaSphere to accelerate your enterprise transformation.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
