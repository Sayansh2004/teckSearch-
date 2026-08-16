import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "For casual, everyday use",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Current Plan",
    features: [
      "Up to 15 transcripts per day",
      "Text translation in 20+ languages",
      "Basic conversation history (7 days)",
      "Community support",
      "Standard response speed",
    ],
  },
  {
    name: "Pro",
    tagline: "For frequent travelers & professionals",
    monthlyPrice: 9,
    annualPrice: 90,
    cta: "Upgrade to Pro",
    highlighted: true,
    features: [
      "Unlimited transcripts",
      "Live voice call with AI agent",
      "Translation in 50+ languages",
      "Full conversation history",
      "Priority response speed",
      "Email support",
    ],
  },
  {
    name: "Elite",
    tagline: "For teams & power users",
    monthlyPrice: 29,
    annualPrice: 290,
    cta: "Upgrade to Elite",
    features: [
      "Everything in Pro, plus:",
      "Dedicated live agent priority queue",
      "Custom language & dialect support",
      "Team seats & shared history",
      "API access",
      "24/7 priority support",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="secondary">Pricing</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Start for free. Upgrade anytime as your conversations grow.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <span
            className={`text-sm font-medium ${
              !annual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span
            className={`text-sm font-medium ${
              annual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Annually
          </span>
          <Badge variant="outline" className="ml-1 text-xs">
            Save ~17%
          </Badge>
        </div>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 items-start">
        {plans.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          const period = annual ? "/year" : "/month";

          return (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-muted"
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="space-y-2 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.name === "Free" && (
                    <Badge variant="secondary" className="text-xs">
                      Default
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl font-bold tracking-tight">
                    ${price}
                  </span>
                  {price > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 gap-6">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  disabled={plan.name === "Free"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-muted-foreground mt-12">
        All plans include a 14-day money-back guarantee. Prices shown in USD.
      </p>
    </div>
  );
}