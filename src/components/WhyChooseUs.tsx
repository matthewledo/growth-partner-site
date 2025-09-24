import { Card, CardContent } from "./ui/card";
import { DollarSign, Users, Target, Shield } from "lucide-react";
import { motion, useStaggerAnimation, useScrollAnimation } from "./hooks/useScrollAnimation";

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. You know exactly what you're paying for and why.",
    highlight: "Starting at a fraction of traditional agency costs"
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Work directly with an experienced marketing consultant, not a junior account manager.",
    highlight: "One client at a time means you get 100% of our focus"
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by your business growth, not vanity metrics that don't matter.",
    highlight: "Every strategy is designed to drive real business outcomes"
  },
  {
    icon: Shield,
    title: "Risk-Free Partnership",
    description: "We're so confident in our approach that we offer flexible terms and clear success metrics.",
    highlight: "Your success is our success"
  }
];

export function WhyChooseUs() {
  const titleAnimation = useScrollAnimation(0);
  const cardsAnimation = useStaggerAnimation(0.15);

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Why Small Businesses <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges you face. Traditional marketing agencies are expensive, impersonal, and often deliver results that don't translate to real business growth.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          ref={cardsAnimation.ref}
          variants={cardsAnimation.containerVariants}
          initial="hidden"
          animate={cardsAnimation.animate}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardsAnimation.itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-secondary/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 mb-3">{benefit.description}</p>
                        <p className="text-sm text-primary">{benefit.highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gradient-to-br from-gray-50 to-secondary/20 rounded-xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl mb-6">
              The Traditional Agency Problem
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl mb-4">💸</div>
                <h4 className="text-lg mb-2">High Costs</h4>
                <p className="text-gray-600">$5,000-15,000+ monthly retainers that quickly add up</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🏭</div>
                <h4 className="text-lg mb-2">Factory Approach</h4>
                <p className="text-gray-600">Cookie-cutter strategies that don't fit your unique business</p>
              </div>
              <div>
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg mb-2">Vanity Metrics</h4>
                <p className="text-gray-600">Reports full of numbers that don't translate to real growth</p>
              </div>
            </div>
            <p className="text-xl text-gray-700">
              We built Next Step Marketing to solve these exact problems. Personal attention, transparent pricing, and results that matter to your bottom line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}