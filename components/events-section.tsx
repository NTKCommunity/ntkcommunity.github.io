import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      location: "NCIT Auditorium",
      attendees: "200+",
      status: "Completed",
      description:
        "A comprehensive summit featuring industry leaders discussing the latest trends in AI, blockchain, and web development.",
      image: "/tech-summit-conference-hall-with-speakers.jpg",
    },
    {
      title: "Hackathon: Code for Nepal",
      date: "April 20-21, 2024",
      location: "NCIT Campus",
      attendees: "150+",
      status: "Completed",
      description:
        "48-hour hackathon focused on creating solutions for local challenges using modern technology stack.",
      image: "/hackathon-coding-event-with-laptops-and-teamwork.jpg",
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "May 10, 2024",
      location: "Computer Lab",
      attendees: "80+",
      status: "Completed",
      description:
        "Hands-on workshop covering fundamentals of AI/ML with practical implementation using Python and TensorFlow.",
      image: "/ai-machine-learning-workshop-with-computers-and-co.jpg",
    },
  ]

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Recent <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our recent events and activities that have brought together the tech community for learning and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="glass-effect hover:glow-effect transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">{event.status}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.description}</p>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
