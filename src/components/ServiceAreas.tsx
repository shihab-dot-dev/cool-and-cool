import React from "react";
import { MapPin, CheckCircle } from "lucide-react";

const ServiceAreas: React.FC = () => {
  const areas = [
    "Fort Kochi",
    "Mattancherry",
    "Ernakulam",
    "Kakkanad",
    "Palarivattom",
    "Edappally",
    "Vyttila",
    "Kaloor",
    "Kadavanthra",
    "Panampilly Nagar",
    "Marine Drive",
    "MG Road",
    "Broadway",
    "Willingdon Island",
    "Kumbakonam",
    "Thevara",
    "Kundanoor",
    "Maradu",
    "Tripunithura",
    "Udyogamandal",
  ];

  return (
    <section id="areas" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Service Areas</span> We Cover
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Providing reliable AC services across Kochi, Ernakulam, and
            surrounding areas with quick response times and professional service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="text-primary" size={24} />
                  Coverage Map
                </h3>

                <div className="stats stats-vertical shadow-sm mb-6">
                  <div className="stat">
                    <div className="stat-title">Average Response Time</div>
                    <div className="stat-value text-primary">30 minutes</div>
                    <div className="stat-desc">Within Kochi-Ernakulam</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Service Radius</div>
                    <div className="stat-value text-secondary">25 km</div>
                    <div className="stat-desc">From city center</div>
                  </div>
                </div>

                <div className="alert alert-info">
                  <MapPin size={16} />
                  <div>
                    <h4 className="font-bold">Extended Coverage</h4>
                    <div className="text-xs">
                      We also serve nearby areas on request with minimal travel
                      charges
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-success" size={24} />
              Areas We Serve
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-lg p-3 hover:badge-primary transition-colors"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="alert alert-success">
                <CheckCircle size={16} />
                <span>
                  <strong>Kochi & Ernakulam:</strong> Same-day service available
                </span>
              </div>
              <div className="alert alert-warning">
                <MapPin size={16} />
                <span>
                  <strong>Other Areas:</strong> Service within 24 hours
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="opacity-70 mb-4">
                Don't see your area listed? Give us a call! We're constantly
                expanding our service network.
              </p>
              <a href="tel:+919562994324" className="btn btn-primary gap-2">
                <MapPin size={16} />
                Check Service Availability
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
