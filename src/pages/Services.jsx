import React from "react";
import "../styles/Services.css" // optional if using separate CSS

export default function Services() {
  return (
    <h1 className="under-construction">
      Under Construction........
    </h1>
  );
}

// import React from "react";
// import "../styles/Services.css";

// const services = [
//   { name: "Birthday Event Planner", img: "/images/services/service1.png" },
//   { name: "Wedding Event Planner", img: "/images/services/service2.png" },
//   { name: "Receptions", img: "/images/services/service3.png" },
//   { name: "Festivals", img: "/images/services/service4.png" },
//   { name: "House Warming Ceremony", img: "/images/services/service5.png" },
//   { name: "Baby Shower", img: "/images/services/service6.png" },
//   { name: "Sweet 16", img: "/images/services/service7.png" },
//   { name: "Half Saree", img: "/images/services/service8.png" },
//   { name: "Graduation Ceremony", img: "/images/services/service9.png" },
//   { name: "Get Together Events", img: "/images/services/service10.png" },
//   { name: "Private Parties", img: "/images/services/service11.png" },
//   { name: "Social Events", img: "/images/services/service12.png" },
//   { name: "Corporate Events", img: "/images/services/service13.png" },
//   { name: "Party Rentals", img: "/images/services/service14.png" },
// ];

// export default function Services() {
//   return (
//     <section className="services">
//       <h2 className="services-title">Our Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <img
//               src={service.img}
//               alt={service.name}
//               className="service-image"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
