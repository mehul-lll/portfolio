import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Mehul Prajapati. All rights
            reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Made with{" "}
            <Heart className="h-3 w-3 inline-block text-red-500 mx-1" /> using
            React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
