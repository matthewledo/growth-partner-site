import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScrollAnimation } from "./hooks/useScrollAnimation";

export function Hero() {
  const titleAnimation = useScrollAnimation(0);
  const contentAnimation = useScrollAnimation(0.2);
  const imageAnimation = useScrollAnimation(0.4);

  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/20 to-secondary/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center relative z-10">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              ref={titleAnimation.ref}
              initial="hidden"
              animate={titleAnimation.controls}
              variants={titleAnimation.variants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2">
                  Your All-in-One Marketing Growth Partner
                </Badge>
              </motion.div>
              
              <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Your Next Step to</span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Real, Lasting Growth
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              ref={contentAnimation.ref}
              initial="hidden"
              animate={contentAnimation.controls}
              variants={contentAnimation.variants}
            >
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We make marketing simple and effective for small businesses. No confusing jargon, no hidden costs — just practical, results-driven strategies that make growth straightforward and achievable.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Your Growth Journey
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline" size="lg" className="px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      Learn More
                    </Button>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="mt-4 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  ✓ One client at a time for personalized attention<br/>
                  ✓ Transparent pricing with no hidden fees<br/>
                  ✓ Results-focused strategies that actually work
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            ref={imageAnimation.ref}
            initial="hidden"
            animate={imageAnimation.controls}
            variants={imageAnimation.variants}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753161618037-e6a8f740fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nJTIwbGFwdG9wfGVufDF8fHx8MTc1ODczOTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Small business owner working on laptop"
                className="w-full rounded-lg shadow-xl"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}