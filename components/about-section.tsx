import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Nepal Tek Community</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Nepal Tek Community (NTK) is a vibrant student-led organization at NCIT, Nepal, dedicated to fostering
            innovation, collaboration, and technological excellence among students. We believe in the power of
            community-driven learning and the potential of young minds to shape the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an inclusive environment where students can explore, learn, and innovate in the field of
                technology while building meaningful connections with peers and industry professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-secondary/20 hover:glow-effect transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading tech community in Nepal that empowers students to become innovative leaders and
                contributors to the global technology ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-accent/20 hover:glow-effect transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, collaboration, inclusivity, and continuous learning form the foundation of our community. We
                celebrate diversity and encourage creative problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
