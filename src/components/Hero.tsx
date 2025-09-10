import React from "react";
import { Phone, Clock, MapPin, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-16">
      <div className="hero-content text-center lg:text-left max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert <span className="text-primary">AC Services</span> in Kochi
              & Ernakulam
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional air conditioning repair, installation, and
              maintenance services. Fast, reliable, and affordable solutions for
              your cooling needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+919562994324"
                className="btn btn-primary btn-lg gap-2"
              >
                <Phone size={20} />
                Call Now: +91 9562994324
              </a>

              <a
                href="https://wa.me/919562994324"
                className="btn btn-success btn-lg gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-sm">
              <div className="flex items-center gap-2 text-success">
                <CheckCircle size={16} />
                24/7 Emergency Service
              </div>

              <div className="flex items-center gap-2 text-success">
                <CheckCircle size={16} />6 months Warranty
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card bg-base-100 shadow-2xl p-6">
              <h3 className="text-2xl font-bold text-center mb-6">
                Quick Service Request
              </h3>

              <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-6">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <Clock size={24} />
                  </div>
                  <div className="stat-title">Response Time</div>
                  <div className="stat-value text-primary">30min</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div className="stat-title">Service Areas</div>
                  <div className="stat-value text-secondary">15+</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="alert alert-info">
                  <Clock size={16} />
                  <span>Available 24/7 for Emergency Repairs</span>
                </div>
                <div className="alert alert-success">
                  <MapPin size={16} />
                  <span>Serving Kochi, Ernakulam & Surrounding Areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
