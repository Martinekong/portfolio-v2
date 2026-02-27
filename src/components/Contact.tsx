import {items} from '../lib/contactItem';
import ContactCard from './ContactCard';

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <span className="tracking-widest uppercase text-[#B5CCF7]">contact</span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">Get in Touch</h2>
      <p className="mt-4 max-w-2xl text-white/80 mx-auto">
        Want to collaborate, ask a question or just say hi? Reach out through
        any of these channels.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ContactCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
