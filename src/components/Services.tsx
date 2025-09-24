import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";
import { motion, useStaggerAnimation, useScrollAnimation } from "./hooks/useScrollAnimation";

const services = [
  {
    icon: Globe,
    title: "Website Optimization",
    description: "Transform your website into a powerful lead generation tool that converts visitors into customers.",
    features: ["SEO optimization", "Conversion rate improvement", "User experience enhancement", "Mobile responsiveness"]
  },
  {
    icon: TrendingUp,
    title: "Digital Advertising",
    description: "Cost-effective ad campaigns that reach your ideal customers and deliver measurable results.",
    features: ["Google Ads management", "Social media advertising", "Budget optimization", "Performance tracking"]
  },
  {
    icon: Users,
    title: "Social Media Strategy",
    description: "Build genuine connections with your audience through authentic, engaging social media presence.",
    features: ["Content strategy", "Community engagement", "Brand storytelling", "Platform optimization"]
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with smart automation that nurtures leads while you focus on your business.",
    features: ["Email marketing", "Lead nurturing", "Customer journey mapping", "CRM integration"]
  }
];

export function Services() {
  const titleAnimation = useScrollAnimation(0);
  const cardsAnimation = useStaggerAnimation(0.15);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-secondary/5 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/10 blur-xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"
          animate={{ 
            scale: [1.5, 1, 1.5],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2 className="text-3xl sm:text-4xl">
            Services That Drive <span className="text-primary">Real Growth</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need to take your business to the next level, without the complexity or overwhelming costs.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
          ref={cardsAnimation.ref}
          variants={cardsAnimation.containerVariants}
          initial="hidden"
          animate={cardsAnimation.animate}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardsAnimation.itemVariants}>
              <motion.div
                whileHover={{ y: -8, rotateY: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-white to-primary/5 h-full">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <service.icon className="h-6 w-6 text-white" />
                        </motion.div>
                      </div>
                      <div className="ml-4">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}