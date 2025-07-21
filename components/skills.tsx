"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Library,
  Lightbulb,
  Smartphone,
} from "lucide-react";

export default function Skills() {
 const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    skills: ["Python", "JavaScript", "SQL", "React"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Library className="h-8 w-8 text-primary" />,
    skills: ["FastAPI", "Django", "LangChain", "Transformers"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    skills: ["Generative AI", "Fine-tuning Models", "AI Agents", "Chatbots"],
  },
  {
    title: "NLP & LLMs",
    icon: <Layers className="h-8 w-8 text-primary" />,
    skills: ["RAG", "Prompt Engineering", "Text Classification", "NER"],
  },
  {
    title: "Development Tools",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "Postman", "Docker", "VS Code"],
  },
  {
    title: "Deployment & Ops",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["Model Deployment", "Cloud Functions", "API Integration"],
  },
  {
    title: "Problem Solving",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    skills: ["Data Structures", "Algorithm Design", "System Design", "Debugging"],
  },
];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-muted/5 to-muted/20"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-3 text-center drop-shadow-sm">
          Skills
        </h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-lg bg-background border border-primary/30 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 cursor-default"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-xl tracking-wide  dark:text-primary-light">
                    {category.title}
                  </h3>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="
          bg-muted-foreground/10
          text-muted-foreground
          dark:bg-white/10
          dark:text-muted-foreground/80
          px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shadow-sm
          hover:bg-primary hover:text-white transition-colors duration-200
        "
                      aria-label={`${skill} skill badge`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
