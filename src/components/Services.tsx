import React from "react";
import {
  Wrench,
  Settings,
  Snowflake,
  Shield,
  Clock,
  PenTool as Tools,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "AC Repair & Troubleshooting",
      description:
        "Expert diagnosis and repair of all AC brands and models. From cooling issues to electrical problems.",
      features: [
        "All brands serviced",
        "Same-day repair",
        "Genuine spare parts",
        "Free diagnosis",
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "AC Installation",
      description:
        "Professional installation of new AC units with proper sizing and optimal placement.",
      features: [
        "Free site survey",
        "Professional installation",
        "Warranty included",
        "Post-installation support",
      ],
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "AC Maintenance",
      description:
        "Regular maintenance services to keep your AC running efficiently and extend its lifespan.",
      features: [
        "Annual contracts",
        "Filter replacement",
        "Coil cleaning",
        "Performance optimization",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Emergency AC Service",
      description:
        "24/7 emergency repair services for urgent cooling issues, especially during hot weather.",
      features: [
        "24/7 availability",
        "Quick response",
        "Emergency repairs",
        "Holiday service",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "AC Gas Refilling",
      description:
        "Professional refrigerant refilling and leak detection to restore your AC's cooling efficiency.",
      features: [
        "Leak detection",
        "R-22 & R-410A gas",
        "Pressure testing",
        "System optimization",
      ],
    },
    {
      icon: <Tools className="w-8 h-8" />,
      title: "Commercial AC Services",
      description:
        "Specialized services for offices, shops, and commercial establishments with bulk AC requirements.",
      features: [
        "Bulk servicing",
        "Corporate contracts",
        "Preventive maintenance",
        "Quick turnaround",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">AC Services</span>
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Comprehensive air conditioning solutions for residential and
            commercial properties across Kochi and Ernakulam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="card-body">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="card-title text-xl mb-3">{service.title}</h3>
                <p className="opacity-70 mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="card-actions justify-end mt-6">
                  <a href="#contact" className="btn btn-primary btn-sm">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+919562994324" className="btn btn-primary btn-lg gap-2">
            <Clock size={20} />
            Book Service Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
