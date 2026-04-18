import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  href: string;
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  variant?: "default" | "primary";
  external?: boolean;
}

export const LinkCard = ({ href, icon: Icon, label, sublabel, variant = "default", external = true }: LinkCardProps) => {
  const isPrimary = variant === "primary";
  return (
    <a
      href={href}
      target={external && href.startsWith("http") ? "_blank" : undefined}
      rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex w-full items-center gap-4 rounded-2xl border px-5 py-4 shadow-card transition-smooth hover:-translate-y-0.5 hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isPrimary
          ? "border-transparent bg-gradient-brand text-primary-foreground"
          : "border-border bg-card text-card-foreground hover:border-brand-orange/40",
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-smooth",
          isPrimary ? "bg-white/20 text-primary-foreground" : "bg-gradient-brand text-primary-foreground",
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="flex flex-1 flex-col text-left">
        <span className="text-base font-semibold leading-tight">{label}</span>
        {sublabel && (
          <span className={cn("text-xs leading-tight", isPrimary ? "text-primary-foreground/85" : "text-muted-foreground")}>
            {sublabel}
          </span>
        )}
      </span>
    </a>
  );
};
