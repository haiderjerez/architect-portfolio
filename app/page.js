import HeroSection from "@/app/components/HeroSection";
import Projects from "@/app/components/Projects";
import ContactForm from '@/app/components/ContactForm';


export default function Home() {
    return (
        <div>
            <HeroSection />
            <Projects />
            <ContactForm />
        </div>
    );
}