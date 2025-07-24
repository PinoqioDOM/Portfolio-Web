import React from 'react';
import '../design/contacts.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import VideoComponent from '../components/VideoComponent';

const Contacts = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const firstname = formData.get('firstname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const description = formData.get('description');

    if (!firstname || !email || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
        footer: '<a href="#">Need help?</a>',
      });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xrblpvey', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully!',
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while sending your message!',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Network error or server problem!',
      });
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="contact-form">
      <VideoComponent />
      <button className="home-btn" onClick={handleGoHome}>Home</button>

      <form onSubmit={onSubmit}>
        <h1 className="form-title">Get In Touch</h1>

        <div className="row">
          <div className="input-group">
            <input
              type="text"
              placeholder="What's your name"
              className="form-control"
              name="firstname"
              id="firstname"
              required
            />
            <label htmlFor="firstname">Firstname</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="What's your email address"
              className="form-control"
              name="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <input
              type="tel"
              placeholder="What's your phone number"
              className="form-control"
              name="phone"
              id="phone"
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="What's your company name"
              className="form-control"
              name="company"
              id="company"
            />
            <label htmlFor="company">Company Name</label>
          </div>
        </div>

        <div className="input-group">
          <textarea
            placeholder="What's your contact reason"
            className="form-control"
            name="description"
            id="description"
            rows="4"
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>

        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contacts;
