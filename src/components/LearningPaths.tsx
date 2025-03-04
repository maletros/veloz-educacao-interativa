
import React from 'react';
import { ArrowRight, Code, GitBranch, Lightbulb, Palette, Target } from 'lucide-react';
import PathCard from './PathCard';
import { Button } from '@/components/ui/button';

// Mock data
const paths = [
  {
    id: 1,
    title: 'Trilha Full-Stack Developer',
    description: 'Torne-se um desenvolvedor web completo, do frontend ao backend.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 5,
    duration: '120h',
    steps: [
      { title: 'HTML/CSS', completed: true },
      { title: 'JavaScript', completed: true },
      { title: 'React.js', completed: false },
      { title: 'Node.js', completed: false },
      { title: 'Projetos Práticos', completed: false },
    ],
    icon: Code,
  },
  {
    id: 2,
    title: 'Empreendedorismo Digital',
    description: 'Da ideia ao produto: estruture seu negócio digital do zero.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 4,
    duration: '80h',
    steps: [
      { title: 'Validação de Ideias', completed: true },
      { title: 'Construção de MVP', completed: false },
      { title: 'Marketing Digital', completed: false },
      { title: 'Captação de Investimentos', completed: false },
    ],
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Design UI/UX Completo',
    description: 'Crie interfaces intuitivas e experiências que encantam os usuários.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 4,
    duration: '90h',
    steps: [
      { title: 'Fundamentos de Design', completed: true },
      { title: 'Prototipagem', completed: true },
      { title: 'Teste de Usabilidade', completed: false },
      { title: 'Design Systems', completed: false },
    ],
    icon: Palette,
  },
];

const LearningPaths = () => {
  return (
    <section className="py-20 bg-veloz-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-veloz-blue bg-veloz-blue/10 rounded-full">
              Trilhas de Aprendizagem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-veloz-dark mb-4">
              Siga um caminho estruturado
            </h2>
            <p className="text-lg text-veloz-gray max-w-2xl">
              Nossas trilhas guiam você desde o básico até o avançado, com uma sequência de cursos planejada para maximizar seu aprendizado.
            </p>
          </div>
          <Button variant="outline" className="border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5">
            Ver todas as trilhas <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <PathCard
              key={path.id}
              title={path.title}
              description={path.description}
              steps={path.steps}
              image={path.image}
              courseCount={path.courseCount}
              duration={path.duration}
              className={`animate-fade-in`}
            />
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-veloz-blue/10 mb-4">
              <Target className="w-8 h-8 text-veloz-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Não sabe por onde começar?</h3>
            <p className="text-veloz-gray mb-6 max-w-lg mx-auto">
              Responda algumas perguntas simples sobre seus objetivos e criaremos um plano de estudo personalizado para você.
            </p>
            <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Descobrir minha trilha ideal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
