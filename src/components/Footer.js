import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-gray-100 text-lg font-bold mb-2">About Us</h5>
            <ul>
              <li><a href="/about" className="hover:text-white">Our Story</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-gray-100 text-lg font-bold mb-2">Resources</h5>
            <ul>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/guides" className="hover:text-white">Travel Guides</a></li>
              <li><a href="/newsletter" className="hover:text-white">Newsletter</a></li>
              <li><a href="/support" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-gray-100 text-lg font-bold mb-2">Legal</h5>
            <ul>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="text-gray-100 text-lg font-bold mb-2">Follow Us</h5>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" className="hover:text-white"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com" className="hover:text-white"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" className="hover:text-white"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm cursor-pointer">
          <p>&copy; {new Date().getFullYear()} Wanderwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
