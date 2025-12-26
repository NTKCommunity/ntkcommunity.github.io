import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Rocket, Handshake } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: BookOpen,
      title: "Promote Learning",
      description:
        "Foster continuous learning through workshops, seminars, and hands-on projects that enhance technical skills and knowledge.",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Rocket,
      title: "Cultivate Innovation",
      description:
        "Encourage creative thinking and innovative solutions to real-world problems through hackathons and project competitions.",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Handshake,
      title: "Facilitate Collaboration",
      description:
        "Build strong networks and partnerships between students, faculty, and industry professionals for mutual growth.",
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Objectives</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We are committed to achieving these core objectives that drive our community forward and create lasting
            impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <Card
                key={index}
                className="glass-effect hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${objective.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
