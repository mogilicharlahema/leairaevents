import React from "react";
import getpic from "../Assets/getpic.png";
import "../Styles/getintouch.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    Swal.fire({
      title: "Sending...",
      text: "Please wait while your message is being sent.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const serviceID = "service_rpwtali";
    const templateID = "template_uev4ann";
    const publicKey = "HP9HGIw-7S-y6F7rb";

    const templateParams = {
      name: formData.user_name,        
      user_email: formData.user_email,  
      phone: formData.user_phone,       
      message: formData.message,       
    };
   


    console.log(
      "Attempting to send the following contact data to EmailJS:",
      templateParams
    );
    console.log("Using Service ID:", serviceID);
    console.log("Using Template ID:", templateID);

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log(
            "SUCCESS! EmailJS response:",
            response.status,
            response.text
          );
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Your message has been sent successfully! We'll get back to you soon.",
            confirmButtonColor: "#4CAF50",
          });

          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED... EmailJS error:", error);

          Swal.fire({
            icon: "error",
            title: "Oops... Message Not Sent",
            text: `Something went wrong. Please try again. Error: ${
              error.text || JSON.stringify(error)
            }`,
            confirmButtonColor: "#d33",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="get-in-touch-container">
      <h1 className="main-heading-git">Get In Touch</h1>
      <div className="content-wrapper-git">
        <div className="left-panel-git">
          <img
            src={getpic}
            alt="Business meeting discussion"
            className="panel-background-image-git"
          />
          <div className="image-overlay-content-git">
            <h2 className="overlay-heading-git">Get In Touch</h2>
            <p className="overlay-paragraph-git">
              Reach out and let's turn your ideas into an experience worth
              remembering. Our team is here to help you with planning,
              collaboration, and all the little details that make big moments.
            </p>
            <div className="contact-details-git">
              <p className="address-label-git">Address</p>
              <p>+91 9177-05-7705</p>
              <p>
                <a href="mailto:Operations@leairaevents.com">
                  operations@leairaevents.com
                </a>
              </p>
              <p>
                4th Floor, And 5, Plot No: 4, <br />
                Arunodaya Colony, Vittal Rao Nagar, <br />
                Madhapur, Hyderabad, Telangana - <br />
                500081
              </p>
            </div>
          </div>
        </div>
        <div className="right-panel-git">
          <form className="contact-form-git" onSubmit={handleSubmit}>
            <div className="form-group-git">
              <label htmlFor="user_name">Enter Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name" 
                placeholder="Enter your name"
                value={formData.user_name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <label htmlFor="user_email">Enter Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email" 
                placeholder="Enter your Email-id"
                value={formData.user_email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <label htmlFor="user_phone">Enter Phone Number</label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone" 
                placeholder="Enter your phone number"
                value={formData.user_phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <label htmlFor="message">Send a message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
              />
            </div>
            <button type="submit" className="submit-button-git" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;