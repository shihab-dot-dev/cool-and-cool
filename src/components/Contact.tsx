import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Ready to fix your AC? Contact us now for fast, reliable service.
            We're here to help 24/7 with all your cooling needs.
          </p>
        </div>

        <div className="grid">
          <div className="space-y-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href="tel:+919562994324"
                        className="text-primary hover:underline"
                      >
                        +91 9562994324
                      </a>
                      <p className="text-sm opacity-60">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:info@cooltechac.com"
                        className="text-secondary hover:underline"
                      >
                        info@cooltechac.com
                      </a>
                      <p className="text-sm opacity-60">
                        We'll respond within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Area</h4>
                      <p className="text-accent">Kochi & Ernakulam</p>
                      <p className="text-sm opacity-60">25km radius coverage</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Clock className="text-success" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-success">24/7 Emergency Service</p>
                      <p className="text-sm opacity-60">
                        Regular: 8 AM - 8 PM daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919562994324"
                className="btn btn-primary btn-lg gap-2"
              >
                <Phone size={20} />
                Call Now
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
          </div>

          {/* <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6">Request a Service</h3>

              {formSubmitted ? (
                <div className="alert alert-success">
                  <CheckCircle size={20} />
                  <span>Thank you! We'll contact you within 30 minutes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Name *</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Phone *
                        </span>
                      </label>
                      <input
                        type="tel"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Service Type
                      </span>
                    </label>
                    <select className="select select-bordered">
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>AC Maintenance</option>
                      <option>Emergency Service</option>
                      <option>Gas Refilling</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your area in Kochi/Ernakulam"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Describe the Problem
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Tell us about your AC issue..."
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">
                        Emergency service needed
                      </span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full gap-2"
                  >
                    <Send size={20} />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
