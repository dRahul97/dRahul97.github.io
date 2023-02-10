import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import mail from "../../images/mail.png";
import linkedin_30 from "../../images/linkedin-30.png";
import twitter_30 from "../../images/twitter-30.png";
import phone_20 from "../../images/phone-20.png";
import { useToast, Button } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3734n0f",
        "portfolio_1template",
        form.current,
        "l6cIlK8OhPONSDTA8"
      )
      .then((result) => {
        console.log(result.text);

        toast({
          title: "Thank you!",
          description: "We've recieved your mail.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <div id="contact" className="nav-link contact">
      <div className="top-sec">
        {/* Heading */}
        <div className="contact-name">
          <span className="dash"></span>
          <h2 className="contact-heading">Contact Me</h2>
          <span className="dash"></span>
        </div>
        <p>
          😊 Please Drop a message, let's connect, will reach out as soon as
          possible.
        </p>
      </div>
      {/* Contact */}
      <div className="contactContainer">
        <div className="contact-section1">
          <div>
            <h3>My Info:</h3>
            <h3>
              <img src={mail} alt="" />:
              <a
                id="contact-email"
                href="mailto:drahul.official@gmail.com"
                target="_blank"
              >
                drahul.official@gmail.com
              </a>
            </h3>
            <h3 id="contact-phone">
              {" "}
              <img src={phone_20} alt="" /> : +91-8446459594
            </h3>
          </div>
          <div>
            <img src={linkedin_30} alt="" />
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/rahul-dudka-23557a1a1/"
              target="_blank"
            >
              Send a message
            </a>
          </div>
          <div>
            <img src={twitter_30} alt="" />
            <h3>Twitter</h3>
            <a href="https://twitter.com/rahul_dudka" target="_blank">
              Send a message
            </a>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />

          <input type="email" name="email" placeholder="Email" />

          <textarea name="message" placeholder="Message . . ." />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
