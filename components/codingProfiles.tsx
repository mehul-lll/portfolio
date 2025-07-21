"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Lightbulb } from "lucide-react";

export default function CodingProfiles() {
  const profiles = [
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      label: "LeetCode",
      username: "@mehulprajapati",
      description: "Problem solving",
      link: "https://leetcode.com/u/mehulprajapati/",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: "GitHub",
      username: "@Mehul",
      description: "Open Source + Side Projects",
      link: "https://github.com/mehul-lll",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="coding-profiles">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Coding Profiles</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, idx) => (
            <Card
              key={idx}
              className="shadow-lg bg-background border border-primary/30 hover:shadow-primary/20 transition-shadow"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {profile.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {profile.label}
                  </p>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-semibold"
                  >
                    {profile.username}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
