import React from "react";
import "../App.css";

const StatsAndTestimonials = () => {
  const stats = [
    { label: "Visitors", value: "70+" },
    { label: "Page Views", value: "300+" },
    { label: "Bounce Rate", value: "25%" },
    { label: "Mobile Users", value: "60%" },
    { label: "Desktop Users", value: "40%" },
    { label: "India Visitors", value: "98%" },
    { label: "France Visitors", value: "2%" },
    { label: "Android", value: "55%" },
    { label: "Windows", value: "19%" },
    { label: "Mac", value: "13%" },
    { label: "Linux", value: "9%" },
    { label: "iOS", value: "4%" },
  ];

  const testimonials = [
    {
      name: "Aditi Sharma",
      feedback:
        "I’ve used multiple DSA resources, but this site just clicked with me. The real-life examples made concepts stick instantly.",
    },
    {
      name: "Karan Verma",
      feedback:
        "As a beginner, I was always intimidated by DSA. Here, even tough topics like graphs feel intuitive because they’re tied to real-world scenarios.",
    },
    {
      name: "Rohit Singh",
      feedback:
        "Honestly, I thought this would be another generic coding site. But the clarity here is unmatched — I could explain recursion to a friend using your analogies.",
    },
    {
      name: "Meera Patel",
      feedback:
        "The fact that I stayed on the site for hours without realizing it says something. It’s engaging, simple, and relatable.",
    },
    {
      name: "Arjun Nair",
      feedback:
        "I usually bounce off DSA content quickly, but this site kept me hooked. It almost feels like learning from a friend.",
    },
    {
      name: "Sophie Laurent (France)",
      feedback:
        "Even though English isn’t my first language, the examples made it easy for me to follow. Very practical approach!",
    },
  ];

  return (
    <div className="stats-testimonials">
      <h2 className="testimonial-title">Our Early Impact</h2>
      <div className="testimonial-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="testimonial-stat-card">
            <p className="testimonial-stat-label">{stat.label}</p>
            <h3 className="testimonial-stat-value">{stat.value}</h3>
          </div>
        ))}
      </div>

      <h2 className="testimonial-title">💬 What Learners Are Saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4 className="testimonial-name">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsAndTestimonials;
