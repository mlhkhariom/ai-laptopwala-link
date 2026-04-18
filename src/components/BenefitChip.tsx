import { LucideIcon } from "lucide-react";

interface BenefitChipProps {
  icon: LucideIcon;
  label: string;
}

export const BenefitChip = ({ icon: Icon, label }: BenefitChipProps) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/25 bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
    <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
    {label}
  </span>
);
