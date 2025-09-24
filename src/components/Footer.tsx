export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">Next Step Marketing</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for simple, effective marketing that drives real business growth. One client at a time.
            </p>
            <p className="text-sm text-gray-400">
              Your Next Step to Real, Lasting Growth
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Website Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Advertising</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Marketing Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#contact" className="hover:text-white transition-colors">Schedule a Call</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Send a Message</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Next Step Marketing. All rights reserved. | Building lasting partnerships, one business at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}