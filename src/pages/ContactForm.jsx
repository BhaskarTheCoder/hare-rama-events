"use client";
import React, { useState } from "react";
import { db } from "../firebase"; // Firestore must be exported correctly
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../styles/ContactForm.css";

// === Suppress ResizeObserver loop errors ===
window.addEventListener("error", (event) => {
  if (event.message.includes("ResizeObserver loop")) {
    event.stopImmediatePropagation();
  }
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    otherService: "",
    date: "",
    time: "",
    venue: "",
    message: "",
    optIn: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    "Birthday Event",
    "Wedding Event",
    "Reception",
    "Festival",
    "House Warming",
    "Baby Shower",
    "Sweet 16",
    "Graduation Ceremony",
    "Other",
  ];

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.serviceType) newErrors.serviceType = "Select a service type";
    if (formData.serviceType === "Other" && !formData.otherService.trim())
      newErrors.otherService = "Please specify your service";
    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.time) newErrors.time = "Select a time";
    if (!formData.optIn) newErrors.optIn = "You must agree to be contacted";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        serviceType: formData.serviceType === "Other" ? formData.otherService : formData.serviceType,
        createdAt: serverTimestamp(),
      });
      alert("Contact saved successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        otherService: "",
        date: "",
        time: "",
        venue: "",
        message: "",
        optIn: false,
      });
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Failed to save contact. Check console for details.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <h2>Contact Hare Rama Events</h2>
      <p>Fill out the form and let’s turn your dream event into reality!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        >
          <option value="">Select Service Type</option>
          {services.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.serviceType && <span className="error">{errors.serviceType}</span>}

        {formData.serviceType === "Other" && (
          <input
            type="text"
            name="otherService"
            placeholder="Specify your service"
            value={formData.otherService}
            onChange={handleChange}
          />
        )}
        {errors.otherService && <span className="error">{errors.otherService}</span>}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <span className="error">{errors.time}</span>}

        <input
          type="text"
          name="venue"
          placeholder="Venue Address"
          value={formData.venue}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Additional Details"
          value={formData.message}
          onChange={handleChange}
          maxLength={500}
        ></textarea>

        <div className="opt-in-container">
          <label className="opt-in-label">
            <input
              type="checkbox"
              name="optIn"
              checked={formData.optIn}
              onChange={handleChange}
              className="opt-in-checkbox"
            />
            <span className="opt-in-text">
              I agree to be contacted by Hare Rama Events via call, email, and text for event services. 
              To opt out, you can reply 'stop' at any time or reply 'help' for assistance. 
              You can also click the unsubscribe link in the emails. 
              Message and data rates may apply. Message frequency may vary.{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                View Privacy Policy
              </a>
            </span>
          </label>
          {errors.optIn && <span className="error">{errors.optIn}</span>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div>
        <div className="space"></div>
      </div>
    </section>
  );
}
