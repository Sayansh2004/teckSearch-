import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Languages, Mic, FileText, Sparkles } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Speak Any Language",
    description:
      "Communicate in the language you're comfortable with, and let TechoBridge translate it in real time for the person on the other end.",
  },
  {
    icon: Mic,
    title: "Live Voice Agent",
    description:
      "New users get a live voice call with an agent who speaks on your behalf — just tell the agent what you want to say, and they'll handle the conversation for you.",
  },
  {
    icon: FileText,
    title: "Free Transcripts",
    description:
      "Every conversation on the free tier comes with a complete transcript, so you never lose track of what was said.",
  },
  {
    icon: Sparkles,
    title: "Understand in Minutes",
    description:
      "No more struggling with a new city's language. Whether you're moving from Kolkata to Punjab or Chennai to Bangalore, TechoBridge helps you settle in fast.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="mb-2">
          Founded in 2026
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About TechoBridge
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We simplify your life — professionally and personally — by breaking
          down the one barrier that holds people back the most: language.
        </p>
      </div>

      <Separator className="my-16" />

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            TechoBridge was founded in 2026 by{" "}
            <span className="text-foreground font-medium">Sayansh Chopra</span>{" "}
            with one goal in mind — to bridge the gap between people and the
            languages they don't speak.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Think of a child moving from a small Bengali-speaking hometown to
            a new city like Punjab or Bangalore. Suddenly, everyday life —
            school, friends, even asking for directions — feels harder simply
            because of a language they've never learned. TechoBridge exists
            to make that transition effortless.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            We help you speak, understand, and be understood — in any
            language, within minutes. Whether it's a casual conversation or
            an important professional call, TechoBridge removes the language
            barrier so you can focus on what actually matters.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform is built for real-life moments: relocating to a new
            city, navigating unfamiliar surroundings, or simply talking to
            someone who doesn't speak your language.
          </p>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Features grid */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">Why TechoBridge</h2>
          <p className="text-muted-foreground">
            Everything you need to communicate without limits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-muted">
              <CardContent className="pt-6 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      {/* Closing statement */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Language should never be the reason someone feels lost. TechoBridge
          is here so that wherever you go — a new city, a new country, or
          just a new conversation — you're always understood.
        </p>
      </div>
    </div>
  );
}