import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Flag, Languages, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-muted/10 to-muted/30"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-2 text-center">About Me</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col space-y-8">
            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-4 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Career Objective
                </h3>
                <p className="text-muted-foreground">
                    {/* AI-focused Python developer with 3+ years of experience, specializing in building 
                    intelligent systems using FastAPI, Django, and modern AI frameworks. Skilled in 
                    fine-tuning models, developing AI agents, and creating conversational chatbots with 
                    LangChain and RAG pipelines. Adept at designing scalable backend architectures and 
                    deploying Generative AI applications in production environments. */}
                Python/AI developer with 3+ years of experience, specializing in backend development with 
                FastAPI and Django, and AI systems using LangChain, RAG, and model fine-tuning. Experienced 
                in deploying LLM-powered chatbots, building intelligent agents, and integrating scalable 
                generative AI solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-2 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Education
                </h3>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">
                    Bachelor of Computer Applications
                  </p>
                  <p className="text-muted-foreground">
                    6.60 CGPA • Graduated in 2023
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col space-y-8">
            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 space-y-4 h-full">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <User className="text-primary" /> Personal Info
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoRow
                    icon={<User className="text-primary" />}
                    label="Full Name"
                    value="Mehul Prajapati"
                  />
                  <InfoRow
                    icon={<Calendar className="text-primary" />}
                    label="Date of Birth"
                    value="24/02/2003"
                  />
                  <InfoRow
                    icon={<Flag className="text-primary" />}
                    label="Nationality"
                    value="Indian"
                  />
                  <InfoRow
                    icon={<Languages className="text-primary" />}
                    label="Languages"
                    value="English, Hindi, Gujarati"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-xl border border-primary/20">
              <CardContent className="p-6 h-full">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="text-primary" /> Additional
                  Information
                </h3>
                <p className="text-muted-foreground">
                  Driven by a passion for AI and problem-solving through Python. 
                  Continuously learning and optimizing intelligent systems with a 
                  strong focus on performance, scalability, and real-world impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-base font-medium">{value}</p>
      </div>
    </div>
  );
}
