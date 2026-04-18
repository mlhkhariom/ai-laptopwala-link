import { ClipboardList, Instagram, Youtube, Facebook, Phone, MessageCircle, Mail, ShieldCheck, BadgeCheck, Gift, Repeat } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { LinkCard } from "@/components/LinkCard";
import { BranchCard } from "@/components/BranchCard";
import { BenefitChip } from "@/components/BenefitChip";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Soft gradient blob background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{ background: "var(--gradient-soft)" }}
      />

      <main className="relative mx-auto flex w-full max-w-[480px] flex-col items-center px-5 pb-16 pt-10 sm:pt-14">
        {/* Header */}
        <header className="flex flex-col items-center text-center animate-fade-up">
          <div className="rounded-full bg-gradient-brand p-1 shadow-hover">
            <img
              src={logo}
              alt="AI Laptopwala logo"
              className="h-24 w-24 rounded-full border-4 border-background object-cover"
            />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground">
            AI <span className="text-gradient-brand">Laptopwala</span>
          </h1>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Asati Infotech · Indore's Trusted Laptop Store
          </p>
          <p className="mt-3 max-w-[340px] text-sm leading-relaxed text-foreground/80">
            Study, office or gaming — find the perfect laptop & expert repairs at Bhawar Kuan, Indore.
          </p>
        </header>

        {/* Benefits */}
        <section className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-up" style={{ animationDelay: "60ms" }}>
          <BenefitChip icon={ShieldCheck} label="1 Year Warranty" />
          <BenefitChip icon={BadgeCheck} label="100% Tested" />
          <BenefitChip icon={Gift} label="5 Free Gifts" />
          <BenefitChip icon={Repeat} label="Easy Exchange" />
        </section>

        {/* Links */}
        <section className="mt-8 flex w-full flex-col gap-3" aria-label="Links">
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <LinkCard
              href="#enquiry"
              icon={ClipboardList}
              label="Fill Enquiry Form"
              sublabel="Tell us what you need"
              variant="primary"
              external={false}
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <LinkCard
              href="https://www.instagram.com/ailaptopwala"
              icon={Instagram}
              label="Instagram"
              sublabel="@AiLaptopWala"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <LinkCard
              href="https://www.youtube.com/@AiLaptopwalaindore"
              icon={Youtube}
              label="YouTube"
              sublabel="AI Laptopwala Official"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
            <LinkCard
              href="https://www.facebook.com/profile.php?id=61563386652422"
              icon={Facebook}
              label="Facebook"
              sublabel="AI Laptopwala Indore"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "280ms" }}>
            <LinkCard href="tel:+919893496163" icon={Phone} label="Call Us" sublabel="+91 98934 96163" external={false} />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "320ms" }}>
            <LinkCard
              href="https://wa.me/919893496163"
              icon={MessageCircle}
              label="WhatsApp"
              sublabel="Chat with us instantly"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "360ms" }}>
            <LinkCard
              href="mailto:contact@ailaptopwala.com"
              icon={Mail}
              label="Email Us"
              sublabel="contact@ailaptopwala.com"
              external={false}
            />
          </div>
        </section>

        {/* Branches */}
        <section className="mt-10 w-full" aria-labelledby="branches-heading">
          <h2 id="branches-heading" className="mb-3 text-center text-lg font-bold text-foreground">
            Our <span className="text-gradient-brand">Branches</span>
          </h2>
          <div className="flex flex-col gap-3">
            <BranchCard
              name="Branch 1 — Silver Mall"
              address="LB-21, Block-B, Silver Mall, 8-A, RNT Marg, South Tukoganj, Indore, MP 452001"
              mapUrl="https://maps.app.goo.gl/Z4e1Z91HVKwjm5xp9"
            />
            <BranchCard
              name="Branch 2 — Sai Residency"
              address="21, G3, Sai Residency, Ashish Nagar, Near Bangali Chouraha, Indore, MP 452016"
              mapUrl="https://maps.app.goo.gl/drVLkuS9tGjEmwUF7"
            />
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquiry" className="mt-10 w-full scroll-mt-6" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading" className="mb-1 text-center text-lg font-bold text-foreground">
            Enquiry <span className="text-gradient-brand">Form</span>
          </h2>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Fill the form & our team will reach out shortly.
          </p>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScxuqTNvb_KpgsksTnAf4foq9vCUlMmtGGXOEETkAV3QayWLA/viewform?embedded=true"
              width="640"
              height="1460"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="AI Laptopwala Enquiry Form"
              className="block w-full"
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ailaptopwala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-smooth hover:bg-gradient-brand hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@AiLaptopwalaindore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-smooth hover:bg-gradient-brand hover:text-primary-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563386652422"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-smooth hover:bg-gradient-brand hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Laptopwala · Asati Infotech
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
