import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Zap, Shield, Bell, BarChart3, Smartphone, Clock, Users, Lock } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Monitoring",
    description:
      "Monitor from 15+ locations worldwide including US, Europe, Asia, and South America for comprehensive coverage.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Checks",
    description: "30-second monitoring intervals ensure you're the first to know when something goes wrong.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified via email, SMS, Slack, or webhook the moment your site goes down.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive uptime reports, response time trends, and performance insights.",
  },
  {
    icon: Shield,
    title: "SSL Certificate Monitoring",
    description: "Track SSL certificate expiration dates and get alerts before they expire.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Monitor your websites on the go with our iOS and Android mobile applications.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "We guarantee 99.9% uptime for our monitoring service with full transparency.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share monitoring dashboards with your team and manage user permissions.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with enterprise-grade security and data protection.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Everything you need to monitor your websites</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive monitoring tools designed to keep your websites running smoothly and your users happy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
