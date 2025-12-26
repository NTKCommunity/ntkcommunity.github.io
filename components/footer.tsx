import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Community Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src="/images/logos/ntk.jpg"
                  alt="Nepal Tek Community Logo"
                  className="h-6 w-6 object-contain"
                />
                </div>
              <span className="text-xl font-bold">Nepal Tek Community</span>
            </div>
            <p className="text-accent-foreground/80 leading-relaxed mb-6 max-w-md">
              Empowering the next generation of tech innovators at NCIT, Nepal.
              Join us in building a vibrant community of learners, creators, and
              leaders in technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Mentorship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60">
            © 2024 Nepal Tek Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
