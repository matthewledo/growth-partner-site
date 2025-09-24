import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScrollAnimation, useStaggerAnimation } from "./hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Deep Dive Discovery",
    description: "We start by understanding your business, goals, and challenges. No generic solutions here."
  },
  {
    number: "02", 
    title: "Custom Strategy Development",
    description: "Based on your unique situation, we create a tailored marketing plan that fits your budget and timeline."
  },
  {
    number: "03",
    title: "Implementation & Optimization",
    description: "We work hand-in-hand with you to execute the strategy, making adjustments based on real performance data."
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description: "As your business grows, we adapt and evolve your marketing to ensure continued success."
  }
];

export function Approach() {
  const titleAnimation = useScrollAnimation(0);
  const stepsAnimation = useStaggerAnimation(0.2);
  const imageAnimation = useScrollAnimation(0.3);

  return (
    <section id="approach" className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 relative">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 -right-20 w-40 h-40 rounded-full bg-gradient-to-bl from-primary/20 to-accent/20 blur-2xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            x: [0, -20, 0],
            opacity: [0.7, 0.4, 0.7]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <motion.div
              ref={titleAnimation.ref}
              initial="hidden"
              animate={titleAnimation.controls}
              variants={titleAnimation.variants}
            >
              <h2 className="text-3xl sm:text-4xl mb-6">
                Our <span className="text-primary">Proven Approach</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in building genuine partnerships, not just client relationships. That's why we only work with one client at a time.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              ref={stepsAnimation.ref}
              variants={stepsAnimation.containerVariants}
              initial="hidden"
              animate={stepsAnimation.animate}
            >
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  variants={stepsAnimation.itemVariants}
                >
                  <div className="flex-shrink-0 mr-4">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white text-lg shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <h4 className="text-lg">One Client at a Time Guarantee</h4>
              </div>
              <p className="text-gray-600">
                You get our complete focus and attention. No competing priorities, no rushed work, just dedicated partnership focused on your success.
              </p>
            </div>
          </div>
          
          <motion.div 
            className="mt-12 lg:mt-0"
            ref={imageAnimation.ref}
            initial="hidden"
            animate={imageAnimation.controls}
            variants={imageAnimation.variants}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -3 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687862528147-0ecb1aa4b81d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTc1ODczOTk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Marketing strategy planning session"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}