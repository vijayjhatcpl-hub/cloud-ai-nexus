import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader, ServiceCard } from "@/components/shared";
import {
  Database, ArrowLeftRight, Warehouse, Zap, ShieldCheck, Plug, Network,
  ArrowRight
} from "lucide-react";

const dataServices = [
  { icon: Database, title: "Data Consolidation & Transformation", description: "Unify disparate data sources into a single source of truth with automated transformation pipelines." },
  { icon: ArrowLeftRight, title: "ETL / ELT Pipelines", description: "Build robust, scalable ETL and ELT pipelines using Apache Spark, Airflow, dbt, and cloud-native tools." },
  { icon: Warehouse, title: "Data Warehousing", description: "Design and implement modern data warehouses on Snowflake, BigQuery, Redshift, or Oracle ADW." },
  { icon: Zap, title: "Real-Time Analytics", description: "Stream processing with Kafka, Flink, and real-time dashboards for instant business insights." },
  { icon: ShieldCheck, title: "Data Governance", description: "Implement data catalogs, lineage tracking, access controls, and compliance frameworks." },
  { icon: Plug, title: "Enterprise Data Integration", description: "Connect ERP, CRM, SaaS, and legacy systems with modern API-driven integration patterns." },
  { icon: Network, title: "Large-Scale System Integration", description: "Architect and deliver complex multi-system integrations across enterprise technology landscapes." },
];

const DataEngineeringPage = () => {
  return (
    <main>
      <PageHero
        badge="Data Engineering"
        title="Scalable Data Engineering & Integration"
        description="Build enterprise-grade data pipelines, warehouses, and real-time analytics platforms that scale with your business."
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Start Your Data Journey <ArrowRight size={18} /></Link>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Capabilities"
            title="Enterprise Data at Scale"
            description="We design and build data infrastructure that handles billions of records with reliability and performance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide">
          <SectionHeader
            badge="Our Process"
            title="From Raw Data to Business Value"
            description="A proven methodology that turns complex data challenges into actionable insights."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Assess data landscape, sources, and business objectives." },
              { step: "02", title: "Design", desc: "Architect scalable pipelines and governance frameworks." },
              { step: "03", title: "Build", desc: "Implement, test, and deploy data infrastructure." },
              { step: "04", title: "Optimize", desc: "Monitor, tune, and evolve for peak performance." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <span className="font-heading text-4xl font-bold gradient-text">{item.step}</span>
                <h3 className="font-heading font-semibold text-lg mt-3 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Build Your Data Foundation Today
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let our data engineers design a scalable, future-proof data platform for your enterprise.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Discuss Your Data Needs <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default DataEngineeringPage;
