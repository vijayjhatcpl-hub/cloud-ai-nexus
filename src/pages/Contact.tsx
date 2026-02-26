import { useState } from "react";
import { PageHero } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@qtechsolns.com" },
  { icon: Phone, label: "Phone", value: "+1 (516)-880-9996" },
  { icon: MapPin, label: "Address", value: "118 Spruce Street, West Hempstead, NY 11552" },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM EST" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <main>
      <PageHero
        badge="Contact Us"
        title="Let's Start a Conversation"
        description="Ready to transform your enterprise? Reach out to our team for a free consultation."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h3 className="font-heading font-semibold text-2xl mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Input id="service" placeholder="e.g. Cloud Migration" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project and goals..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h3 className="font-heading font-semibold text-xl mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <c.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{c.label}</p>
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h3 className="font-heading font-semibold text-xl mb-3">Book a Consultation</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Schedule a free 30-minute consultation with one of our enterprise architects to discuss your specific needs.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden card-shadow border border-border">
                <div className="h-48 gradient-subtle flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">West Hempstead, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
