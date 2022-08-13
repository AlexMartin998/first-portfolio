import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

import './contact.css';
import { useForm } from '../../hooks/useForm';

export const Contact = () => {
  const form = useRef();
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formValues;

  const sendEmail = async e => {
    e.preventDefault();

    await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    );

    reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>changalombo.adrian@gmail.com</h5>
            <a
              href="mailto:changalombo.adrian@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+593 999 9999 9999</h5>
            {/* <a href="https://api.whatsapp.com/send?phone=+59395036951">Send a message</a> */}
            <a
              href="https://wa.me/59395036951"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
