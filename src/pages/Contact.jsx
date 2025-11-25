import React, { useEffect } from 'react'
import '../styles/pages/Contact.css'
export default function Contact() {
  let contactDetailsObject={
    name:"",
    email:"",
    message:""
  };
  const[details,setDetails]=React.useState(contactDetailsObject);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Thank you, ${details.name}! Your message "${details.message}" has been received. We will contact you at ${details.email} soon.`);
    setDetails(contactDetailsObject);
  }
  useEffect(() => {
    document.title = "E-Learner - Contact";
  }, []);
  return (
      <div>
        <h1>Contact Page</h1>
        <div className='contactWrapper'>
          <form onSubmit={handleSubmit} className='contactForm'>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} required />
            <label>Email:</label>
            <input type="email" name="email" id="email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} required />
            <label>Message:</label>
            <textarea name="message" id="message" value={details.message} onChange={e => setDetails({ ...details, message: e.target.value })} required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
  )
}
