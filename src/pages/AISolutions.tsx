import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader, ServiceCard } from "@/components/shared";
import {
  Brain, Activity, TrendingUp, Sparkles, Cpu, Workflow, BarChart3,
  ArrowRight
} from "lucide-react";

const aiServices = [
  { icon: Brain, title: "Intelligent Database Optimization", description: "AI-driven query optimization, indexing, and resource allocation that continuously learns and adapts." },
  { icon: Activity, title: "AI-Powered Monitoring", description: "Real-time anomaly detection, predictive alerting, and automated remediation for database systems." },
  { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast demand, capacity, and performance trends to proactively manage infrastructure." },
  { icon: Sparkles, title: "Data Quality Automation", description: "ML-powered data validation, cleansing, and enrichment for enterprise-grade data quality." },
  { icon: Cpu, title: "Model Deployment Pipelines", description: "End-to-end ML model training, testing, deployment, and versioning with CI/CD for ML." },
  { icon: Workflow, title: "MLOps Lifecycle Management", description: "Complete MLOps platform setup including experiment tracking, model registry, and monitoring." },
  { icon: BarChart3, title: "Automated Scaling & Governance", description: "Intelligent auto-scaling based on workload patterns with built-in governance and compliance." },
];

const AISolutionsPage = () => {
  return (
    <main>
      <PageHero
        badge="AI & MLOps"
        title="AI-Driven Database & MLOps Solutions"
        description="Harness the power of artificial intelligence to optimize databases, automate operations, and deploy ML models at enterprise scale."
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Explore AI Solutions <ArrowRight size={18} /></Link>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="AI Capabilities"
            title="Intelligence at Every Layer"
            description="Our AI solutions enhance performance, reduce costs, and improve reliability across your entire data infrastructure."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Impact"
            title="Measurable Business Outcomes"
            description="Our AI solutions deliver tangible results for enterprise clients."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { metric: "60%", label: "Reduction in Database Incidents" },
              { metric: "3x", label: "Faster Model Deployment" },
              { metric: "45%", label: "Lower Infrastructure Costs" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-card rounded-xl card-shadow border border-border">
                <p className="font-heading text-5xl font-bold gradient-text mb-2">{item.metric}</p>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Unlock the Power of AI for Your Enterprise
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let our AI experts design a solution tailored to your infrastructure and business goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Talk to an AI Expert <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AISolutionsPage;
