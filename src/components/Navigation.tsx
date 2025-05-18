
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-dentasave-600">
                Denta<span className="text-dentasave-400">Save</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-dentasave-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/plans" className="text-gray-600 hover:text-dentasave-500 px-3 py-2 rounded-md text-sm font-medium">
                Membership Plans
              </Link>
              <Link to="/find-dentist" className="text-gray-600 hover:text-dentasave-500 px-3 py-2 rounded-md text-sm font-medium">
                Find a Dentist
              </Link>
              <Link to="/tools" className="text-gray-600 hover:text-dentasave-500 px-3 py-2 rounded-md text-sm font-medium">
                Cost Tools
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-dentasave-500 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Join Now</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dentasave-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <Link to="/" className="text-gray-600 hover:bg-dentasave-50 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/plans" className="text-gray-600 hover:bg-dentasave-50 block px-3 py-2 rounded-md text-base font-medium">
              Membership Plans
            </Link>
            <Link to="/find-dentist" className="text-gray-600 hover:bg-dentasave-50 block px-3 py-2 rounded-md text-base font-medium">
              Find a Dentist
            </Link>
            <Link to="/tools" className="text-gray-600 hover:bg-dentasave-50 block px-3 py-2 rounded-md text-base font-medium">
              Cost Tools
            </Link>
            <Link to="/about" className="text-gray-600 hover:bg-dentasave-50 block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-x-2">
                <Button variant="outline" className="w-1/2 justify-center">Log In</Button>
                <Button className="w-1/2 justify-center">Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
