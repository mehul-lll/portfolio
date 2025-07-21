"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll reply soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+91 7573838218",
      link: "tel:+917573838218",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "mehulprajapati.ds@gmail.com",
      link: "mailto:mehulprajapati.ds@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: "https://maps.google.com/?q=ahmedabad,Gujarat,India",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "@Mehul",
      link: "https://www.linkedin.com/in/mehul-prajapati-b57652296/",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
        <div className="h-1 w-28 bg-primary mx-auto mb-10 rounded-full shadow-md" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <a
                        href={info.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Message Card */}
          <Card className="shadow-lg flex items-center justify-center">
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <p className="text-muted-foreground">
                I'm currently not accepting messages through the site. <br />
                But feel free to reach out via{" "}
                <a
                  href="mailto:mehulprajapati.ds@gmail.com"
                  className="underline text-primary"
                >
                  email
                </a>{" "}
                or{" "}
                <a
                  href="https://www.linkedin.com/in/mehul-prajapati-b57652296/"
                  className="underline text-primary"
                >
                  LinkedIn
                </a>
                .
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <a href="mailto:mehulprajapati.ds@gmail.com">
                  <Button>Send Email</Button>
                </a>
                <a href="https://www.linkedin.com/in/mehul-prajapati-b57652296/" target="_blank">
                  <Button variant="outline">Connect on LinkedIn</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
