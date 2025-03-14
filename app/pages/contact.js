import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
