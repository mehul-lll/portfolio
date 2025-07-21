import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderCode } from "lucide-react";

export default function Projects() {
const projects = [
  {
    title: "Document-QA RAG System",
    description:
      "A retrieval-augmented generation (RAG) system where users upload PDFs or TXT files, and the AI provides accurate answers by retrieving and analyzing document context. Built using FastAPI and PostgreSQL.",
    technologies: ["Python", "FastAPI", "RAG", "PostgreSQL", "LangChain"],
    links: [],
  },
  {
    title: "AI Email Generator & Sender",
    description:
      "AI-powered email automation system that generates email content based on user-provided topics and sends emails via SMTP. Utilizes Mistral API for language generation.",
    technologies: ["Python", "Mistral API", "SMTP", "FastAPI", "Generative AI"],
    links: [],
  },
  {
    title: "Web-Based QA from Scraped Data",
    description:
      "A web-scraping powered AI tool that extracts data from websites and answers user questions based on the extracted content. Built using Python and Streamlit.",
    technologies: ["Python", "Web Scraping", "Streamlit", "BeautifulSoup", "LangChain"],
    links: [],
  },
  {
    title: "English-Learning Voice Assistant",
    description:
      "An AI-based voice assistant designed to help users improve English. Provides real-time sentence corrections and conversational feedback using speech recognition and NLP.",
    technologies: ["Python", "Speech Recognition", "NLP", "Chatbot", "Generative AI"],
    links: [],
  },
  {
    title: "News-AI Summarizer",
    description:
      "Automated news summarization system that scrapes articles from news APIs, embeds and stores them, and emails topic-specific summaries to users.",
    technologies: ["Python", "News API", "RAG", "Embedding", "PostgreSQL", "SMTP"],
    links: [],
  },
  {
    title: "Daily Task Generator",
    description:
      "AI-powered planner that analyzes uploaded PDF project files to extract project names, timelines, and summaries, then generates a day-by-day task schedule.",
    technologies: ["Python", "LangChain", "RAG", "PDF Parsing", "Generative AI"],
    links: [],
  },
  {
    title: "Instagram Clone (FastAPI)",
    description:
      "Instagram-like social media backend built with FastAPI and PostgreSQL. Features include user authentication, post creation, likes, comments, and feed viewing.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "REST API", "JWT Authentication"],
    links: [],
  },
  {
    title: "Fruit Image Classification (Fine-Tuned)",
    description:
      "Custom image classification model fine-tuned on a fruit dataset using Hugging Face Transformers. Trained and evaluated for accurate multi-class classification.",
    technologies: ["Python", "Hugging Face", "Transformers", "Fine-tuning", "PyTorch"],
    links: [],
  },
];


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-lg bg-background border border-primary/30 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-primary/20 cursor-default"
            >
              <CardHeader className="pb-3 border-b border-primary/20">
                <CardTitle className="flex items-center gap-3  font-semibold">
                  <div className="bg-muted-foreground/10 p-2 rounded-md flex items-center justify-center">
                    <FolderCode className="h-6 w-6 text-muted-foreground text-primary" />
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow mt-4">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="
                        bg-muted-foreground/10
                        text-muted-foreground
                        dark:bg-white/10
                        dark:text-muted-foreground/80
                        px-3 py-1 rounded-full font-medium text-sm
                        shadow-sm
                        transition-colors
                        hover:bg-primary hover:text-white
                        cursor-default
                      "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.links.length > 0 && (
                <CardFooter className="pt-4 border-t border-primary/20 flex flex-wrap gap-3 justify-start">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center gap-1"
                    >
                      <a
                        // href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        {/* {link.name} */}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
