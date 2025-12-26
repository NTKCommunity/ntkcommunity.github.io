import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Tech Lead",
      image: "/professional-headshot-young-male-developer.jpg",
      bio: "Full-stack developer passionate about AI and blockchain technology.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      image: "/professional-headshot-young-female-tech-leader.jpg",
      bio: "Community builder focused on creating inclusive tech spaces.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Arjun Thapa",
      role: "Event Coordinator",
      image: "/professional-headshot-young-male-event-organizer.jpg",
      bio: "Event management expert with a passion for tech education.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Sita Gurung",
      role: "Design Lead",
      image: "/placeholder-k6260.png",
      bio: "UX/UI designer creating beautiful and functional digital experiences.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Bikash Rai",
      role: "Tech Lead",
      image: "/placeholder-hbmib.png",
      bio: "Backend specialist with expertise in cloud technologies.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Anita Shrestha",
      role: "Marketing Head",
      image: "/professional-headshot-young-female-marketing-profe.jpg",
      bio: "Digital marketing strategist promoting tech community growth.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Suresh Tamang",
      role: "Tech Lead",
      image: "/professional-headshot-young-male-tech-lead.jpg",
      bio: "Mobile app developer and IoT enthusiast.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Kamala Adhikari",
      role: "Content Creator",
      image: "/professional-headshot-young-female-content-creator.jpg",
      bio: "Technical writer and content strategist for tech education.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Deepak Karki",
      role: "Tech Lead",
      image: "/professional-headshot-young-male-developer-mentor.jpg",
      bio: "DevOps engineer and mentor for junior developers.",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our dedicated team of passionate individuals working together to build and nurture the tech community at
            NCIT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-effect hover:glow-effect transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
