import Hero from './components/Hero';
import Vision from './components/Vision';
import Team from './components/Team';
import Advantages from './components/Advantages';
// import ServicesRoadmap from './components/ServicesRoadmap'; // <-- Переместили сюда
import Founder from './components/Founder';
import TargetAudience from './components/TargetAudience';
import Tools from './components/Tools';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Vision />
      <Team />
      <Advantages />
      {/* <ServicesRoadmap /> */} {/* Теперь идет после Преимуществ и перед Основателем */}
      <Founder />
      <TargetAudience />
      <Tools />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}