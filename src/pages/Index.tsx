
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import LearningPaths from '@/components/LearningPaths';
import LeaderboardPreview from '@/components/LeaderboardPreview';
import { ArrowUp, BookOpen, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo';

const Index = () => {
  // Scroll to top button functionality
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-veloz-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Cursos Interativos', description: 'Aprenda com vídeos, quizzes e projetos práticos' },
              { icon: MapPin, title: 'Trilhas Guiadas', description: 'Sequência de cursos com foco nos seus objetivos' },
              { icon: ShieldCheck, title: 'Certificações', description: 'Certificados reconhecidos pelo mercado' },
              { icon: MessageSquare, title: 'Suporte Personalizado', description: 'Dúvidas respondidas por especialistas' },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-veloz-blue/10 mb-4">
                  <feature.icon className="w-6 h-6 text-veloz-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-veloz-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedCourses />
      <LearningPaths />
      <LeaderboardPreview />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-veloz-blue to-veloz-blue/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para impulsionar sua carreira?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Comece hoje mesmo com acesso a todos os cursos e trilhas por 7 dias grátis.
          </p>
          <Button className="bg-white text-veloz-blue hover:bg-white/90 text-lg px-8 py-6">
            Comece Agora — 7 Dias Grátis
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-veloz-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-veloz-gray mb-4">
                Plataforma de ensino online com cursos interativos, trilhas de aprendizagem e gamificação.
              </p>
              <div className="flex space-x-4">
                {/* Social icons */}
                {[...Array(4)].map((_, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-veloz-light flex items-center justify-center text-veloz-dark hover:bg-veloz-blue hover:text-white transition-colors">
                    <span className="sr-only">Social Media</span>
                    <div className="w-4 h-4"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Plataforma</h4>
              <ul className="space-y-2">
                {['Cursos', 'Trilhas', 'Certificados', 'Para Empresas', 'Preços'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-veloz-gray hover:text-veloz-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Categorias</h4>
              <ul className="space-y-2">
                {['Programação', 'Empreendedorismo', 'Design', 'Marketing Digital', 'Data Science'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-veloz-gray hover:text-veloz-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Suporte</h4>
              <ul className="space-y-2">
                {['FAQ', 'Contato', 'Termos de Uso', 'Política de Privacidade', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-veloz-gray hover:text-veloz-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-veloz-light text-center text-veloz-gray">
            <p>&copy; {new Date().getFullYear()} Veloz Academy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-veloz-blue text-white shadow-lg flex items-center justify-center hover:bg-veloz-blue/90 transition-colors animate-fade-in"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
