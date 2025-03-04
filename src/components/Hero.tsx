
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const shapeRef1 = useRef<HTMLDivElement>(null);
  const shapeRef2 = useRef<HTMLDivElement>(null);
  const shapeRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      if (shapeRef1.current) {
        shapeRef1.current.style.transform = `translate(${x * -30}px, ${y * -20}px)`;
      }
      if (shapeRef2.current) {
        shapeRef2.current.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
      }
      if (shapeRef3.current) {
        shapeRef3.current.style.transform = `translate(${x * -15}px, ${y * 20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-20 overflow-hidden bg-gradient-to-b from-white to-veloz-light min-h-screen flex items-center">
      {/* Abstract shapes */}
      <div ref={shapeRef1} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-veloz-blue/10 transition-transform duration-300 ease-out"></div>
      <div ref={shapeRef2} className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-veloz-green/10 transition-transform duration-300 ease-out"></div>
      <div ref={shapeRef3} className="absolute top-60 right-40 w-48 h-48 rounded-full bg-veloz-blue/5 transition-transform duration-300 ease-out"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="inline-block px-3 py-1 mb-5 text-sm font-medium text-veloz-blue bg-veloz-blue/10 rounded-full">
              Aprenda tecnologia de forma mais eficiente
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-veloz-dark mb-4">
              Aprenda na <span className="text-veloz-blue">velocidade</span> do futuro
            </h1>
            <p className="text-lg md:text-xl text-veloz-gray mb-8">
              Cursos interativos, trilhas de aprendizagem e gamificação para desenvolver suas habilidades técnicas e empreendedoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white text-lg px-8 py-6">
                Comece Agora — 7 Dias Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5 text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" /> Ver Demonstração
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full bg-veloz-${i % 2 ? 'blue' : 'green'}/20 flex items-center justify-center text-veloz-dark font-medium`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm text-veloz-gray">+2.500 estudantes</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-veloz-gray">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-video rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-veloz-blue/10 rotate-1 animate-float">
                <div className="rounded-lg overflow-hidden bg-veloz-light h-full">
                  <div className="h-10 bg-veloz-blue/10 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-5 w-2/3 bg-veloz-blue/20 rounded-full mb-3"></div>
                    <div className="h-4 w-full bg-veloz-blue/10 rounded-full mb-2"></div>
                    <div className="h-4 w-full bg-veloz-blue/10 rounded-full mb-2"></div>
                    <div className="h-4 w-3/4 bg-veloz-blue/10 rounded-full mb-4"></div>
                    
                    <div className="h-32 bg-white rounded-lg shadow-sm p-3 mb-4">
                      <div className="h-4 w-2/3 bg-veloz-green/20 rounded-full mb-2"></div>
                      <div className="h-3 w-full bg-veloz-blue/10 rounded-full mb-1"></div>
                      <div className="h-3 w-full bg-veloz-blue/10 rounded-full mb-1"></div>
                      <div className="h-3 w-1/2 bg-veloz-blue/10 rounded-full mb-3"></div>
                      <div className="h-6 w-1/3 bg-veloz-blue rounded-full"></div>
                    </div>
                    
                    <div className="h-12 bg-veloz-blue/5 rounded-lg flex items-center px-3">
                      <div className="w-8 h-8 rounded-full bg-veloz-blue/20 mr-3"></div>
                      <div>
                        <div className="h-3 w-24 bg-veloz-blue/20 rounded-full mb-1"></div>
                        <div className="h-2 w-16 bg-veloz-blue/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-16 bg-white rounded-lg shadow-xl p-2 -rotate-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="h-full bg-veloz-green/10 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-veloz-gray">XP Ganho</div>
                    <div className="text-xl font-bold text-veloz-green">+150</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-white rounded-lg shadow-xl p-2 rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="h-full bg-veloz-blue/10 rounded flex flex-col items-center justify-center">
                  <div className="w-10 h-10 bg-veloz-blue/20 rounded-full mb-1 flex items-center justify-center">
                    <div className="w-6 h-6 bg-veloz-blue rounded-full"></div>
                  </div>
                  <div className="text-xs text-veloz-gray">Nível</div>
                  <div className="text-lg font-bold text-veloz-blue">15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
