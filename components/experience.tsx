"use client";
import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Gaytes Information System Privet Ltd.",
    period: "Jan 2022 – Jun 2022",
    description:
      "Worked on data preprocessing, analysis, and visualization using Python. Assisted in building internal analytics tools and automated reporting pipelines to support business intelligence efforts.",
  },
  {
    title: "Python/AI Developer",
    company: "Brainerhub Solutions - Software Development Company in India",
    period: "Jun 2023 – Present",
    description:
      "Building AI-driven applications using Python, FastAPI, and Django. Experienced in fine-tuning LLMs, creating AI agents, chatbots, and implementing RAG pipelines with LangChain. Focused on scalable architectures and deploying generative AI systems into production.",
  }
];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="relative border-l-2 border-primary/30 pl-6 space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Icon */}
              <span className="absolute -left-3 top-1.5 bg-primary text-white rounded-full p-1 shadow-md">
                <Briefcase className="w-4 h-4" />
              </span>

              {/* Card */}
              <Card className="transition hover:shadow-xl border border-primary/30 rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-primary font-medium mb-2">
                    {exp.period}
                  </p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
