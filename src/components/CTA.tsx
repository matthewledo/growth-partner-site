import { Button } from "./ui/button";
import { motion, useScrollAnimation } from "./hooks/useScrollAnimation";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MessageCircle } from "lucide-react";

export function CTA() {
  const ctaAnimation = useScrollAnimation(0);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            ref={ctaAnimation.ref}
            initial="hidden"
            animate={ctaAnimation.controls}
            variants={ctaAnimation.variants}
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              Ready to Take the <span className="text-yellow-200 drop-shadow-lg">Next Step?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's have a no-pressure conversation about your business goals and how we can help you achieve them. If we're not the right fit, we'll tell you honestly.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "15-minute discovery call to understand your needs",
                "Custom strategy proposal within 48 hours", 
                "No obligation, no pressure, no sales pitch"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-yellow-300 rounded-full mr-3"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" variant="secondary" className="px-8 bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" variant="outline" className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send a Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc1ODY2NDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business growth chart"
                    className="w-full rounded-lg mb-6"
                  />
                  <div className="text-center">
                    <h3 className="text-xl mb-2">Current Availability</h3>
                    <p className="text-gray-100 mb-4">
                      We're currently accepting <strong>one new client</strong> for Q1 2025.
                    </p>
                    <motion.div 
                      className="bg-yellow-300/20 border border-yellow-300/30 rounded-lg p-4"
                      whileHover={{ backgroundColor: "rgba(252, 211, 77, 0.3)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-yellow-100 text-sm">
                        ⭐ Limited availability ensures you get our complete focus and best results
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}