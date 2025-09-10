import React from "react";
import { Users, Award, Clock, Shield } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, number: "500+", label: "Happy Customers" },
    { icon: <Award size={24} />, number: "8+", label: "Years Experience" },
    { icon: <Clock size={24} />, number: "24/7", label: "Support Available" },
    {
      icon: <Shield size={24} />,
      number: "100%",
      label: "Satisfaction Guaranteed",
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl leading-relaxed lg:text-5xl lg:leading-relaxed font-bold mb-6">
              Why Choose <span className="text-primary">Coll & Cool</span>?
            </h2>
            <p className="text-lg opacity-70 mb-6 leading-relaxed">
              With over 8 years of experience serving Kochi and Ernakulam, we've
              built a reputation for reliable, honest, and professional AC
              services. Our certified technicians are equipped with the latest
              tools and genuine spare parts to ensure quality repairs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Certified Technicians</h4>
                  <p className="opacity-70">
                    All our technicians are trained and certified to work on
                    major AC brands
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Transparent Pricing</h4>
                  <p className="opacity-70">
                    No hidden charges. We provide detailed quotes before
                    starting any work
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Quality Guarantee</h4>
                  <p className="opacity-70">
                    1-year warranty on all repairs and installations
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
              Get Started Today
            </a>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-lg text-center"
                >
                  <div className="card-body py-8">
                    <div className="text-primary mx-auto mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card bg-primary text-primary-content shadow-lg">
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-2xl mb-2">
                  Emergency Service
                </h3>
                <p className="opacity-80 mb-4">
                  AC not working? Don't sweat it! Our emergency team is ready to
                  help.
                </p>
                <a href="tel:+919562994324" className="btn btn-secondary">
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
