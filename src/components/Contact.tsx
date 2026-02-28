import {items} from '../lib/contactItem';
import ContactCard from './ContactCard';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div>
        <SectionHeader
          teaser="contact"
          title="Get in Touch"
          color="text-accent-purple"
        />

        <p className="mt-4 max-w-2xl text-white/80 mx-auto">
          Want to collaborate, ask a question or just say hi? Reach out through
          any of these channels.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ContactCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
