const ContactForm = () => {
  return (
    <section id="contact" className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border border-gray-600 rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-2 border border-gray-600 rounded-lg" />
        <textarea placeholder="Your Message" className="p-2 border border-gray-600 rounded-lg"></textarea>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm; 
