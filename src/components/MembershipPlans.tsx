
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 9.95,
    description: "Essential coverage for individuals seeking preventive care",
    features: [
      "20% discount on preventive services",
      "10% discount on basic treatments",
      "Access to network dentists",
      "No waiting periods",
      "Price transparency tools"
    ],
    highlight: false
  },
  {
    name: "Standard",
    price: 19.95,
    description: "Comprehensive coverage for individuals and families",
    features: [
      "40% discount on preventive services",
      "25% discount on basic treatments",
      "15% discount on major procedures",
      "Access to larger network of dentists",
      "Price transparency tools",
      "Payment plan options"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: 29.95,
    description: "Maximum savings for those needing extensive care",
    features: [
      "60% discount on preventive services",
      "40% discount on basic treatments",
      "30% discount on major procedures",
      "Access to all network dentists",
      "Price transparency tools",
      "Flexible payment plan options",
      "Emergency dental coverage"
    ],
    highlight: false
  }
];

const MembershipPlans = () => {
  return (
    <section className="py-16 bg-gray-50" id="membership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Membership Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose a plan that works for you and your family
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto lg:grid-cols-3 lg:max-w-none">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`flex flex-col h-full ${plan.highlight ? 'border-dentasave-400 shadow-lg shadow-dentasave-100/50' : ''}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-dentasave-500 text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-dentasave-500" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.highlight ? 'bg-dentasave-500 hover:bg-dentasave-600' : ''}`} 
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-500">
            All plans are billed monthly with no long-term contracts.
            <br />
            <a href="#" className="text-dentasave-500 hover:text-dentasave-600 font-medium">
              View full plan details →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
