
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const procedures = [
  { 
    name: "Dental Exam & Cleaning", 
    averagePrice: 150, 
    savingsRange: "20-60%",
    lowSavings: 30,
    highSavings: 90,
    description: "Regular check-up and professional cleaning"
  },
  { 
    name: "Dental X-Rays (Full Set)", 
    averagePrice: 150, 
    savingsRange: "25-40%",
    lowSavings: 37.50,
    highSavings: 60,
    description: "Complete series of dental radiographs"
  },
  { 
    name: "Tooth Filling", 
    averagePrice: 200, 
    savingsRange: "15-40%",
    lowSavings: 30,
    highSavings: 80,
    description: "Silver amalgam or composite resin filling"
  },
  { 
    name: "Root Canal", 
    averagePrice: 1200, 
    savingsRange: "20-35%",
    lowSavings: 240,
    highSavings: 420,
    description: "Endodontic treatment for infected tooth pulp"
  },
  { 
    name: "Porcelain Crown", 
    averagePrice: 1300, 
    savingsRange: "15-30%",
    lowSavings: 195,
    highSavings: 390,
    description: "Tooth-shaped cap for damaged teeth"
  },
  { 
    name: "Tooth Extraction", 
    averagePrice: 200, 
    savingsRange: "20-45%",
    lowSavings: 40,
    highSavings: 90,
    description: "Removal of damaged or problematic tooth"
  }
];

const alternativeOptions = [
  {
    title: "Dental Schools",
    description: "Receive care from supervised dental students at 50-70% lower costs",
    benefits: [
      "High-quality, supervised care",
      "Comprehensive treatment options",
      "Teaching environments with latest techniques",
      "Sliding fee scales often available"
    ]
  },
  {
    title: "Community Health Centers",
    description: "Federally qualified health centers offering income-based dental services",
    benefits: [
      "Sliding fee scales based on income",
      "Accept most insurance plans",
      "Comprehensive dental services",
      "Locations throughout the country"
    ]
  },
  {
    title: "Dental Hygiene Schools",
    description: "Receive preventive care from hygiene students at significant discounts",
    benefits: [
      "Very low-cost cleanings and preventive care",
      "Supervised by licensed professionals",
      "Thorough, educational experiences",
      "Most accept patients without insurance"
    ]
  }
];

const PriceTransparency = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-16 bg-white" id="price-transparency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Price Transparency Tools
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Know the cost of your dental care before you go
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="estimator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="estimator">Cost Estimator</TabsTrigger>
              <TabsTrigger value="alternatives">Alternative Options</TabsTrigger>
            </TabsList>
            <TabsContent value="estimator">
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {procedures.map((procedure, index) => (
                  <motion.div key={procedure.name} variants={fadeIn}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{procedure.name}</CardTitle>
                        <CardDescription>{procedure.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">Average Cost</span>
                              <span className="text-sm font-medium">${procedure.averagePrice}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gray-500 h-2 rounded-full w-full"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">With DentaSave</span>
                              <span className="text-sm font-medium text-dentasave-600">
                                ${(procedure.averagePrice - procedure.highSavings).toFixed(2)} - ${(procedure.averagePrice - procedure.lowSavings).toFixed(2)}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-dentasave-500 h-2 rounded-full" 
                                style={{ width: `${(1 - (procedure.lowSavings / procedure.averagePrice)) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="pt-2 border-t border-gray-100">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">Your savings</span>
                              <span className="text-sm font-medium text-dentasave-600">{procedure.savingsRange}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 text-center text-gray-500">
                <p className="text-sm">
                  * Prices are estimates based on average costs. Actual prices may vary by provider and location.
                </p>
                <p className="text-sm mt-2">
                  Our members save an average of 35% on all dental procedures.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="alternatives">
              <motion.div 
                className="grid gap-6 md:grid-cols-3"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {alternativeOptions.map((option) => (
                  <motion.div key={option.title} variants={fadeIn}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {option.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-dentasave-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                          <a href="#" className="text-dentasave-500 hover:text-dentasave-600 text-sm font-medium">
                            Find locations near you →
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 text-center bg-dentasave-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Need help finding affordable dental care?</h3>
                <p className="text-gray-600 mb-4">
                  Our care navigators can help connect you with affordable dental care options in your area.
                </p>
                <button className="bg-dentasave-500 hover:bg-dentasave-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Talk to a Care Navigator
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PriceTransparency;
