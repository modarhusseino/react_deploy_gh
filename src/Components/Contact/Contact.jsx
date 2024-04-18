import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "da20da6a-8a43-422a-96ce-e2ea4f3767f1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get IN TOUCH</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects. So feel free to send me a message about anything that you want me to work on. Contact me in anytime you want.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt=""  /><p>romanhussein30@gmail.com</p>

            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+905367006123</p>

            </div>
            <div className="contact-detail">
              <img src={location_icon} alt=""  /><p>Istanbul-Turkey</p>

            </div>
            
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
          <label htmlFor='name'>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor='email'>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor='message'>Your message</label>
          <textarea name="message" rows={8}placeholder='Enter your message here' name='message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact