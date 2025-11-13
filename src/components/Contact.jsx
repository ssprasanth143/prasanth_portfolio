import React from 'react'

export default function Contact() {
  return (
    <section className="mt-10" id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="card">
          <p><strong>Email:</strong> ssprasanth143@gmail.com</p>
          <p className="mt-1"><strong>Phone:</strong> 99444 51438</p>
          <p className="mt-1"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/prasanth2207" target="_blank" className="text-accent">linkedin.com/in/prasanth2207</a></p>
        </div>
        <form className="card space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Your name" />
          <input className="w-full border p-2 rounded" placeholder="Your email" />
          <textarea className="w-full border p-2 rounded" rows="4" placeholder="Message" />
          <button type="button" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}