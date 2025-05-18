
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MembershipPlans from "@/components/MembershipPlans";
import ProviderFinder from "@/components/ProviderFinder";
import PriceTransparency from "@/components/PriceTransparency";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose DentaSave?
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                We're on a mission to make dental care affordable and accessible for everyone.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-dentasave-100 text-dentasave-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Save 20-60% on Dental Services</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our members enjoy significant discounts on everything from routine cleanings to major procedures.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-dentasave-100 text-dentasave-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No Waiting Periods</h3>
                <p className="mt-2 text-base text-gray-500">
                  Start using your benefits immediately after joining, with no annual maximums or claim forms.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-dentasave-100 text-dentasave-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Wide Provider Network</h3>
                <p className="mt-2 text-base text-gray-500">
                  Choose from thousands of qualified dentists across the country who participate in our network.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-dentasave-100 text-dentasave-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Price Transparency</h3>
                <p className="mt-2 text-base text-gray-500">
                  Know exactly what you'll pay before your visit with our cost estimation tools.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <MembershipPlans />
        <ProviderFinder />
        <PriceTransparency />
        
        <section className="py-16 bg-dentasave-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Ready to save on your dental care?
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Join DentaSave today and start enjoying affordable dental care with no waiting periods, 
                  annual maximums, or complicated paperwork.
                </p>
                <div className="mt-8 flex">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dentasave-500 hover:bg-dentasave-600"
                    >
                      Join Now
                    </a>
                  </div>
                  <div className="ml-3 inline-flex">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-dentasave-600 bg-white hover:bg-gray-50"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="px-6 py-8 sm:p-10">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-dentasave-500 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Feedback from our members</h3>
                      </div>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-100 pt-6">
                      <blockquote>
                        <div>
                          <p className="text-base text-gray-500">
                            "DentaSave saved me over $800 on my recent dental work. The price transparency tool 
                            helped me understand exactly what I would pay before my appointment."
                          </p>
                        </div>
                        <footer className="mt-3">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-dentasave-400 text-white">
                                MS
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">Michael S.</p>
                              <p className="text-sm text-gray-500">Member since 2023</p>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-100 pt-6">
                      <blockquote>
                        <div>
                          <p className="text-base text-gray-500">
                            "As someone without dental insurance, DentaSave has been a lifesaver. I can finally 
                            afford the dental care my family needs without breaking the bank."
                          </p>
                        </div>
                        <footer className="mt-3">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-dentasave-400 text-white">
                                JR
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">Jennifer R.</p>
                              <p className="text-sm text-gray-500">Member since 2022</p>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
