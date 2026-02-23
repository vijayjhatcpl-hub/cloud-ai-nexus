import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader, ServiceCard } from "@/components/shared";
import {
  Server, Cloud, ArrowUpCircle, Plug, Layers, Gauge, Headphones,
  ArrowRight
} from "lucide-react";

const oracleServices = [
  { icon: Server, title: "Oracle EBS Modernization", description: "Upgrade, patch, and modernize your Oracle E-Business Suite with minimal disruption to operations." },
  { icon: Cloud, title: "OCI Integration", description: "Seamlessly integrate Oracle EBS with Oracle Cloud Infrastructure for enhanced performance and scalability." },
  { icon: ArrowUpCircle, title: "ERP Cloud Migration", description: "Migrate Oracle EBS workloads to the cloud with proven methodologies and zero data loss." },
  { icon: Plug, title: "API Integration & Middleware", description: "Build robust APIs and middleware layers connecting Oracle EBS to modern applications and services." },
  { icon: Layers, title: "Hybrid Cloud for Oracle", description: "Design hybrid architectures that bridge on-premises Oracle systems with cloud-native services." },
  { icon: Gauge, title: "Performance Optimization", description: "Tune Oracle EBS performance with advanced indexing, caching, and query optimization strategies." },
  { icon: Headphones, title: "Managed Services & Support", description: "24/7 managed services including monitoring, patching, backup, and disaster recovery." },
];

const OracleEBSPage = () => {
  return (
    <main>
      <PageHero
        badge="Oracle Solutions"
        title="Oracle EBS & Cloud Integration Solutions"
        description="Modernize your Oracle E-Business Suite and seamlessly integrate with Oracle Cloud Infrastructure for enterprise-grade performance."
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Explore Oracle Solutions <ArrowRight size={18} /></Link>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Oracle Expertise"
            title="Complete Oracle Ecosystem Solutions"
            description="Deep expertise in Oracle EBS, OCI, and the broader Oracle ecosystem to modernize your enterprise applications."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oracleServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approach */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Integration"
            title="Seamless Cloud + Oracle Ecosystem"
            description="Our integration approach ensures your Oracle investments are protected while unlocking cloud benefits."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 card-shadow border border-border">
              <h3 className="font-heading font-semibold text-xl mb-4">On-Premises Excellence</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {["EBS R12 Upgrades & Patching", "Custom Development & Extensions", "Performance Tuning & Optimization", "Database Administration (RAC, ASM)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><ArrowRight size={14} className="text-primary shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 card-shadow border border-border">
              <h3 className="font-heading font-semibold text-xl mb-4">Cloud Transformation</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {["OCI Lift & Shift Migrations", "Oracle Autonomous Database", "Oracle Integration Cloud (OIC)", "Cloud-Native Application Development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><ArrowRight size={14} className="text-primary shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Modernize Your Oracle Environment
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Our Oracle-certified architects will help you plan and execute a seamless modernization strategy.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Expert Guidance <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OracleEBSPage;
