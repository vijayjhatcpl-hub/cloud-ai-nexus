import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader, ServiceCard } from "@/components/shared";
import {
  Cloud, Server, GitBranch, DollarSign, Shield, Layers,
  ArrowRight, CheckCircle2
} from "lucide-react";

const cloudServices = [
  { icon: Layers, title: "Cloud Architecture Design", description: "We design resilient, scalable multi-cloud architectures tailored to enterprise workloads and compliance needs." },
  { icon: Cloud, title: "Cloud Migration", description: "Seamless lift-and-shift, re-platform, or re-architect migrations with minimal downtime and risk." },
  { icon: GitBranch, title: "DevOps & CI/CD", description: "Automate deployments, testing, and infrastructure provisioning with modern DevOps practices." },
  { icon: DollarSign, title: "Cloud Cost Optimization", description: "Reduce cloud spend by up to 40% with right-sizing, reserved instances, and FinOps best practices." },
  { icon: Shield, title: "Security & Compliance", description: "Implement zero-trust security, encryption, IAM policies, and regulatory compliance frameworks." },
  { icon: Server, title: "Hybrid & Multi-Cloud", description: "Unified management across AWS, Azure, and OCI with seamless workload portability." },
];

const providers = [
  { name: "Amazon Web Services", abbr: "AWS", features: ["EC2, Lambda, EKS", "S3, RDS, DynamoDB", "CloudFormation, CDK"] },
  { name: "Oracle Cloud", abbr: "OCI", features: ["Autonomous Database", "OCI Compute & Networking", "Oracle Integration Cloud"] },
  { name: "Microsoft Azure", abbr: "Azure", features: ["Azure Kubernetes Service", "Azure SQL & Cosmos DB", "Azure DevOps Pipelines"] },
];

const CloudServicesPage = () => {
  return (
    <main>
      <PageHero
        badge="Cloud Services"
        title="Enterprise Cloud Solutions"
        description="Design, migrate, and optimize your cloud infrastructure across AWS, Oracle Cloud, and Microsoft Azure with enterprise-grade reliability."
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Get Started <ArrowRight size={18} /></Link>
        </Button>
      </PageHero>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Multi-Cloud Expertise"
            title="Your Cloud, Our Expertise"
            description="We help enterprises navigate the complexity of multi-cloud environments, delivering scalable, secure, and cost-effective infrastructure solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Cloud Platforms"
            title="Certified Across Major Cloud Providers"
            description="Our team holds advanced certifications across all major cloud platforms."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providers.map((p, i) => (
              <div key={i} className="bg-card rounded-xl p-8 card-shadow border border-border text-center hover:card-shadow-hover transition-all duration-300">
                <div className="w-16 h-16 rounded-xl gradient-card flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-heading font-bold text-lg">{p.abbr}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">{p.name}</h3>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                      <CheckCircle2 size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Modernize Your Cloud Infrastructure?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Our cloud architects are ready to design a solution that fits your enterprise needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CloudServicesPage;
