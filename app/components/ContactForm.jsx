export default function ContactForm() {
  return (
    <section id="contact" className="py-10 px-6 text-center">
      <h2 className="text-3xl">Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
