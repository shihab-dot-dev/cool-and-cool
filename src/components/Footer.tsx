import React from "react";
import { Snowflake, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto">
        <aside>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Coll & Cool</span>
          </div>
          <p className="max-w-xs">
            Your trusted partner for all AC services in Kochi and Ernakulam.
            Professional, reliable, and affordable cooling solutions since 2016.
          </p>
        </aside>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <nav className="grid">
            <header className="footer-title">Services</header>
            <a className="link link-hover">AC Repair</a>
            <a className="link link-hover">AC Installation</a>
            <a className="link link-hover">AC Maintenance</a>
            <a className="link link-hover">Emergency Service</a>
            <a className="link link-hover">Gas Refilling</a>
            <a className="link link-hover">Commercial AC</a>
          </nav>

          <nav className="grid">
            <header className="footer-title">Service Areas</header>
            <a className="link link-hover">Kochi</a>
            <a className="link link-hover">Ernakulam</a>
            <a className="link link-hover">Fort Kochi</a>
            <a className="link link-hover">Kakkanad</a>
            <a className="link link-hover">Edappally</a>
            <a className="link link-hover">Marine Drive</a>
          </nav>

          <nav className="grid">
            <header className="footer-title">Contact Info</header>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919562994324" className="link link-hover">
                  +91 9562994324
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:Shabishabeer945@gmail.com"
                  className="link link-hover"
                >
                  Shabishabeer945@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kochi, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer footer-center p-4 bg-neutral-focus border-t border-neutral-content/20">
        <aside>
          <p className="text-sm">
            Copyright © 2025 Coll & Cool Services. All rights reserved. |
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
