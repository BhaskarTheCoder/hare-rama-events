import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

const services = [
  {
    id: 1,
    name: "Birthday Event Planner",
    image: "/images/services/service1.png",
    description: "At Hare Rama Events, we are a team of passionate event planners who thrive on crafting unique and personalized birthday celebrations. With years of experience in the industry, we have curated a diverse range of themed birthday events, from magical fairytale gatherings to vibrant and trendy parties. Our mission is simple: to turn your dream birthday into a reality, filled with laughter, love, and lasting memories."
  },
  {
    id: 2,
    name: "Wedding Event Planner",
    image: "/images/services/service2.png",
    description: "At Hare Rama Events, we are a team of experienced wedding planners who are passionate about crafting unforgettable love-filled celebrations. With years of expertise in the industry, we have planned weddings of all sizes, from intimate elopements to grand destination weddings. Our mission is simple: to make your wedding day the most magical and stress-free experience of your life."
  },
  {
    id: 3,
    name: "Receptions",
    image: "/images/services/service3.png",
    description: "Elevate your special day with our exceptional reception planning services. At Hare Rama Events, we understand that your reception is more than just a gathering; it's a celebration of love, joy, and new beginnings. Our experienced team is dedicated to curating a reception that reflects your unique story and exceeds your expectations."
  },
  {
    id: 4,
    name: "Festivals",
    image: "/images/services/service4.png",
    description: "We believe that festivals are not just occasions; they are expressions of joy, culture, and traditions. Our festival services are dedicated to curating extraordinary and memorable celebrations that bring communities together and leave a lasting impact on everyone involved. Whether it's a cultural festival, religious observance, corporate event, or private gathering, we are your trusted partners in creating immersive and unforgettable festival experiences."
  },
  {
    id: 5,
    name: "House Warming Ceremony",
    image: "/images/services/service5.png",
    description: "We understand that moving into a new home is an exciting and significant milestone in your life. It marks a fresh chapter, filled with new memories and possibilities. Our housewarming services are designed to make this transition seamless, stress-free, and unforgettable. Let us help you transform your new house into a warm and welcoming home that reflects your personality and style."
  },
  {
    id: 6,
    name: "Baby Shower",
    image: "/images/services/service6.png",
    description: "We believe that every baby deserves a grand and joyous welcome into the world. Our baby shower services are designed to create heartwarming and unforgettable celebrations that honor the parents-to-be and their precious little one. With attention to detail and a touch of magic, we curate baby showers that are as unique and special as the bundle of joy on the way."
  },
  {
    id: 7,
    name: "Sweet 16",
    image: "/images/services/service7.png",
    description: "Celebrate the journey into the exciting world of sweet sixteen with our extraordinary event planning services. At Hare Rama Events, we understand that a Sweet 16 isn't just a birthday; it's a milestone that deserves a memorable and magical celebration. Each young person is unique, and our Sweet 16 event planning starts with selecting a theme that resonates with their style and interests."
  },
  {
    id: 8,
    name: "Half Saree Functions",
    image: "/images/services/service8.png",
    description: "Explore the enchanting world of Half Saree Functions with Hare Rama Events, where tradition meets contemporary elegance. Immerse yourself in the vibrant celebrations and fashion showcases, as we curate unforgettable experiences that embrace the beauty and grace of this timeless Indian attire."
  },
  {
    id: 9,
    name: "Graduation Ceremony",
    image: "/images/services/service9.png",
    description: "We understand that graduation is a significant milestone in every student's life, marking the culmination of years of hard work, dedication, and academic achievement. Our graduation ceremony services are designed to create a memorable and dignified celebration that honors graduates and their accomplishments."
  },
  {
    id: 10,
    name: "Get Together Events",
    image: "/images/services/service10.png",
    description: "A well-planned get-together strengthens relationships and creates opportunities for meaningful interactions, fostering connections that extend beyond the event. At Hare Rama Events, we're not just planning an event; we're creating an atmosphere of warmth, camaraderie, and joy."
  },
  {
    id: 11,
    name: "Private Parties",
    image: "/images/services/service11.png",
    description: "Private parties are more than celebrations; they're moments that create lasting memories. Elevate your private parties to new heights with our exceptional event planning services. Whether it's an intimate gathering or an extravagant affair, we specialize in creating unforgettable experiences that cater to your every desire."
  },
  {
    id: 12,
    name: "Social Events",
    image: "/images/services/service12.png",
    description: "Social events are about fostering connections and creating cherished memories. At Hare Rama Events, we're not just planning an event; we're crafting a social experience that celebrates connections, joy, and shared moments. Let us turn your vision into a reality."
  },
  {
    id: 13,
    name: "Corporate Events",
    image: "/images/services/service13.png",
    description: "We understand the importance of corporate events in fostering business growth, strengthening relationships, and creating lasting impressions. Our corporate events services are designed to deliver exceptional experiences that align with your company's goals. Whether it's a conference, seminar, product launch, or team-building retreat, we are your trusted partners."
  },
  {
    id: 14,
    name: "Party Rentals",
    image: "/images/services/service14.png",
    description: "No matter the size or theme of your event, our extensive rental inventory offers endless possibilities to transform your vision into reality. At Hare Rama Events, we're not just providing party rentals; we're offering a gateway to creativity and ambiance. Let us help you curate an event space that reflects your style."
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageScale = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page-full">
      {/* Hero Section */}
      <motion.section 
        className="services-hero-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="services-hero-overlay" />
        <motion.div 
          className="services-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive event planning and celebration services for every milestone</p>
          <div className="hero-badge">
            <span>✨ 10,000+ Events Completed</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="services-content-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-detail-card ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={fadeInUp}
            >
              <motion.div 
                className="service-image-container"
                variants={imageScale}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={service.image} 
                  alt={service.name}
                  loading="lazy"
                />
                <div className="image-overlay">Premium Service</div>
              </motion.div>
              <div className="service-text-content">
                <div className="service-number">0{service.id}</div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <button 
                  className="service-cta-btn"
                  onClick={() => navigate("/contact")}
                  aria-label={`Book ${service.name} service`}
                >
                  Book This Service →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <motion.section 
        className="philosophy-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="philosophy-content">
          <h2>Transparent, Honest, and Open</h2>
          <p>
            Communication is at the heart of our philosophy. We value transparent and honest 
            communication with our clients, ensuring that you are informed and involved in 
            every decision throughout the planning process.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="services-final-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Plan Your Dream Event?</h2>
        <p>Let us bring your vision to life with our expertise and dedication</p>
        <div className="cta-buttons">
          <button 
            className="cta-primary"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </button>
          <button 
            className="cta-secondary"
            onClick={() => navigate("/packages")}
          >
            View Packages
          </button>
        </div>
      </motion.section>
    </div>
  );
}
