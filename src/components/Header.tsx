import { Button } from "./ui/button";
import { motion } from "./hooks/useScrollAnimation";

export function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Next Step Marketing</h1>
              <p className="text-sm text-muted-foreground">Your Next Step to Real, Lasting Growth</p>
            </motion.div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { href: "#services", label: "Services" },
                { href: "#approach", label: "Our Approach" },
                { href: "#why-us", label: "Why Choose Us" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="text-gray-600 hover:text-primary px-3 py-2 transition-colors relative"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}