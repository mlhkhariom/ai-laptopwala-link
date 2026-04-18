import { MapPin, Navigation } from "lucide-react";

interface BranchCardProps {
  name: string;
  address: string;
  mapUrl?: string;
}

export const BranchCard = ({ name, address, mapUrl }: BranchCardProps) => {
  const href = mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card transition-smooth hover:shadow-hover">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
          <MapPin className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{address}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <Navigation className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};
