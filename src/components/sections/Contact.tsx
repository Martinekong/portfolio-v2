import {contactItems} from '../../lib/contact/contactItems';
import ContactCard from '../cards/ContactCard';
import SectionHeader from '../ui/SectionHeader';

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
        {contactItems.map((item) => (
          <ContactCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
