import React from "react";
import whatsappIcon from "../../Images/whatsapp/whatsp.png";

const WhatsAppButton = () => {
  const phoneNumber = "+919832480087";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn fixed-bottom fixed-end m-4"
      style={{
        width: "50px",
        height: "50px",
        backgroundImage: `url(${whatsappIcon})`,
        backgroundSize: "cover",
        display: "block",
      }}
    ></a>
  );
};

export default WhatsAppButton;
