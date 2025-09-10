import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Edappally, Kochi',
      rating: 5,
      text: 'Excellent service! My AC was not cooling properly and they fixed it within an hour. Very professional and reasonably priced.',
      service: 'AC Repair'
    },
    {
      name: 'Priya Nair',
      location: 'Marine Drive, Ernakulam',
      rating: 5,
      text: 'Quick response time and honest pricing. The technician explained everything clearly and the AC has been working perfectly since.',
      service: 'AC Maintenance'
    },
    {
      name: 'Mohammed Ali',
      location: 'Kakkanad, Kochi',
      rating: 5,
      text: 'I called them for emergency service on a Sunday evening and they came within 30 minutes. Great customer service!',
      service: 'Emergency Service'
    },
    {
      name: 'Lakshmi Menon',
      location: 'Fort Kochi',
      rating: 5,
      text: 'Professional installation of my new AC unit. Clean work, no damage to walls, and they cleaned up everything afterwards.',
      service: 'AC Installation'
    },
    {
      name: 'Suresh Babu',
      location: 'Palarivattom, Kochi',
      rating: 5,
      text: 'Been using their annual maintenance service for 3 years. My AC runs efficiently and I rarely have problems.',
      service: 'Annual Maintenance'
    },
    {
      name: 'Anjali Sharma',
      location: 'Vyttila, Ernakulam',
      rating: 5,
      text: 'Trustworthy and reliable. They diagnosed the problem accurately and fixed it with genuine parts. Highly recommended!',
      service: 'AC Repair'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            across Kochi and Ernakulam have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="card-body">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="text-primary opacity-50" size={24} />
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="opacity-70 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm opacity-60">{testimonial.location}</p>
                    </div>
                    <div className="badge badge-primary badge-sm">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="stats stats-horizontal shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Star className="fill-current" size={24} />
              </div>
              <div className="stat-title">Average Rating</div>
              <div className="stat-value text-primary">4.9/5</div>
              <div className="stat-desc">Based on 200+ reviews</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="text-3xl">💯</div>
              </div>
              <div className="stat-title">Satisfaction Rate</div>
              <div className="stat-value text-secondary">99%</div>
              <div className="stat-desc">Happy customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;