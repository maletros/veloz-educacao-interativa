
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Filter, Search, Code, Lightbulb, Palette, LineChart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PathCard from '@/components/PathCard';
import Navbar from '@/components/Navbar';

// Mock data - extended learning paths
const allPaths = [
  {
    id: 1,
    title: 'Trilha Full-Stack Developer',
    description: 'Torne-se um desenvolvedor web completo, do frontend ao backend.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 5,
    duration: '120h',
    category: 'Programação',
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
    category: 'Empreendedorismo',
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
    category: 'Design',
    steps: [
      { title: 'Fundamentos de Design', completed: true },
      { title: 'Prototipagem', completed: true },
      { title: 'Teste de Usabilidade', completed: false },
      { title: 'Design Systems', completed: false },
    ],
    icon: Palette,
  },
  {
    id: 4,
    title: 'Análise de Dados com Python',
    description: 'Domine ferramentas e técnicas para análise e visualização de dados.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 5,
    duration: '100h',
    category: 'Data Science',
    steps: [
      { title: 'Fundamentos de Python', completed: true },
      { title: 'Pandas e NumPy', completed: false },
      { title: 'Visualização de Dados', completed: false },
      { title: 'Estatística Aplicada', completed: false },
      { title: 'Machine Learning Básico', completed: false },
    ],
    icon: LineChart,
  },
  {
    id: 5,
    title: 'Desenvolvimento Mobile com React Native',
    description: 'Crie aplicativos móveis para Android e iOS com React Native.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 4,
    duration: '90h',
    category: 'Programação',
    steps: [
      { title: 'Fundamentos de React', completed: true },
      { title: 'React Native Básico', completed: false },
      { title: 'Navegação e APIs', completed: false },
      { title: 'Publicação na App Store/Play Store', completed: false },
    ],
    icon: Code,
  },
  {
    id: 6,
    title: 'Marketing Digital Avançado',
    description: 'Estratégias avançadas para aquisição e retenção de clientes.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    courseCount: 5,
    duration: '85h',
    category: 'Marketing',
    steps: [
      { title: 'SEO Avançado', completed: true },
      { title: 'Google Ads e Meta Ads', completed: true },
      { title: 'Marketing de Conteúdo', completed: false },
      { title: 'Email Marketing', completed: false },
      { title: 'Analytics e Métricas', completed: false },
    ],
    icon: Target,
  },
];

// Filter categories
const categories = [
  { id: 'all', name: 'Todas as Trilhas' },
  { id: 'programming', name: 'Programação', match: 'Programação' },
  { id: 'entrepreneurship', name: 'Empreendedorismo', match: 'Empreendedorismo' },
  { id: 'design', name: 'Design', match: 'Design' },
  { id: 'data', name: 'Data Science', match: 'Data Science' },
  { id: 'marketing', name: 'Marketing', match: 'Marketing' },
];

const LearningPathsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter paths based on category and search term
  const filteredPaths = allPaths
    .filter(path => 
      (activeCategory === 'all' || 
       path.category === categories.find(cat => cat.id === activeCategory)?.match) &&
      (searchTerm === '' || 
       path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       path.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-veloz-blue to-veloz-blue/80 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trilhas de Aprendizagem</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Escolha uma jornada estruturada para desenvolver suas habilidades de forma completa, com cursos organizados em uma sequência didática perfeita.
            </p>
          </div>
        </div>

        {/* Search and filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-veloz-gray" />
              <input
                type="text"
                placeholder="Buscar trilhas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veloz-blue focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-nowrap md:flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-veloz-blue text-white shadow-md'
                      : 'bg-veloz-light text-veloz-dark hover:bg-veloz-blue/10'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Learning paths grid */}
          {filteredPaths.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPaths.map((path) => (
                <PathCard
                  key={path.id}
                  title={path.title}
                  description={path.description}
                  steps={path.steps}
                  image={path.image}
                  courseCount={path.courseCount}
                  duration={path.duration}
                  className="animate-fade-in"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-veloz-gray">
                <Search className="w-12 h-12 mx-auto opacity-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nenhuma trilha encontrada</h3>
              <p className="text-veloz-gray mb-6">
                Tente ajustar seus filtros ou termos de busca.
              </p>
              <Button 
                variant="outline" 
                className="border-veloz-blue text-veloz-blue hover:bg-veloz-blue/5"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="glass-card rounded-xl p-8 text-center max-w-4xl mx-auto mt-8 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-veloz-blue/10 mb-4">
              <Target className="w-8 h-8 text-veloz-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Precisa de orientação personalizada?</h3>
            <p className="text-veloz-gray mb-6 max-w-lg mx-auto">
              Nossos especialistas podem ajudar você a escolher a trilha ideal para seus objetivos profissionais e pessoais.
            </p>
            <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Falar com um consultor de carreira
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPathsPage;
