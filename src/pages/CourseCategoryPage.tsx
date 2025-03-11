
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Code, Lightbulb, Palette, LineChart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';

// Mock categories data
const categoriesInfo = {
  'programming': {
    name: 'Programação',
    description: 'Aprenda as mais recentes linguagens e frameworks de programação para iniciar ou avançar sua carreira em tecnologia.',
    icon: Code,
    color: 'from-blue-500 to-violet-500'
  },
  'entrepreneurship': {
    name: 'Empreendedorismo',
    description: 'Descubra como validar ideias, criar modelos de negócio e conquistar clientes para seu empreendimento.',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500'
  },
  'design': {
    name: 'Design',
    description: 'Domine as ferramentas e técnicas de design para criar interfaces incríveis e experiências memoráveis.',
    icon: Palette,
    color: 'from-pink-500 to-purple-500'
  },
  'marketing': {
    name: 'Marketing Digital',
    description: 'Aprenda estratégias para atrair, converter e fidelizar clientes nos canais digitais.',
    icon: Code,
    color: 'from-green-500 to-teal-500'
  },
  'data': {
    name: 'Data Science',
    description: 'Explore técnicas de análise de dados, machine learning e visualização para extrair insights valiosos.',
    icon: LineChart,
    color: 'from-cyan-500 to-blue-500'
  },
  'all': {
    name: 'Todos os Cursos',
    description: 'Explore nossa biblioteca completa de cursos em diferentes áreas de conhecimento.',
    icon: Code,
    color: 'from-gray-600 to-gray-800'
  }
};

// Mock courses data (expandido)
const allCourses = [
  {
    id: 1,
    title: 'Python do Zero ao Profissional',
    category: 'Programação',
    categoryId: 'programming',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '40h',
    level: 'Iniciante',
    rating: 4.8,
    students: 2430,
    modules: 8,
    featured: true,
  },
  {
    id: 2,
    title: 'JavaScript & React para Iniciantes',
    category: 'Programação',
    categoryId: 'programming',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '28h',
    level: 'Iniciante',
    rating: 4.5,
    students: 1560,
    modules: 6,
    featured: false,
  },
  {
    id: 3,
    title: 'Desenvolvendo APIs com Node.js',
    category: 'Programação',
    categoryId: 'programming',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '24h',
    level: 'Intermediário',
    rating: 4.7,
    students: 980,
    modules: 5,
    featured: false,
  },
  {
    id: 4,
    title: 'Como Validar Sua Ideia de Negócio',
    category: 'Empreendedorismo',
    categoryId: 'entrepreneurship',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '12h',
    level: 'Todos os níveis',
    rating: 4.9,
    students: 1856,
    modules: 5,
    featured: true,
  },
  {
    id: 5,
    title: 'Captação de Investimentos para Startups',
    category: 'Empreendedorismo',
    categoryId: 'entrepreneurship',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '10h',
    level: 'Intermediário',
    rating: 4.7,
    students: 720,
    modules: 4,
    featured: false,
  },
  {
    id: 6,
    title: 'Gestão Financeira para Pequenos Negócios',
    category: 'Empreendedorismo',
    categoryId: 'entrepreneurship',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '15h',
    level: 'Iniciante',
    rating: 4.6,
    students: 650,
    modules: 6,
    featured: false,
  },
  {
    id: 7,
    title: 'UI/UX Design para Aplicativos',
    category: 'Design',
    categoryId: 'design',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '24h',
    level: 'Intermediário',
    rating: 4.7,
    students: 1240,
    modules: 6,
    featured: false,
  },
  {
    id: 8,
    title: 'Design System: Criação e Implementação',
    category: 'Design',
    categoryId: 'design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '20h',
    level: 'Avançado',
    rating: 4.8,
    students: 520,
    modules: 5,
    featured: false,
  },
  {
    id: 9,
    title: 'Marketing de Conteúdo',
    category: 'Marketing Digital',
    categoryId: 'marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '18h',
    level: 'Iniciante',
    rating: 4.5,
    students: 870,
    modules: 7,
    featured: false,
  },
  {
    id: 10,
    title: 'Estratégias de SEO Avançado',
    category: 'Marketing Digital',
    categoryId: 'marketing',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '22h',
    level: 'Avançado',
    rating: 4.7,
    students: 640,
    modules: 8,
    featured: false,
  },
  {
    id: 11,
    title: 'Introdução ao Machine Learning',
    category: 'Data Science',
    categoryId: 'data',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '32h',
    level: 'Avançado',
    rating: 4.6,
    students: 890,
    modules: 7,
    featured: false,
  },
  {
    id: 12,
    title: 'Análise de Dados com Python',
    category: 'Data Science',
    categoryId: 'data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '26h',
    level: 'Intermediário',
    rating: 4.8,
    students: 780,
    modules: 6,
    featured: false,
  },
];

// Filter categories
const categories = [
  { id: 'all', name: 'Todos os Cursos' },
  { id: 'programming', name: 'Programação', match: 'programming' },
  { id: 'entrepreneurship', name: 'Empreendedorismo', match: 'entrepreneurship' },
  { id: 'design', name: 'Design', match: 'design' },
  { id: 'marketing', name: 'Marketing', match: 'marketing' },
  { id: 'data', name: 'Data Science', match: 'data' },
];

const CourseCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [activeCategory, setActiveCategory] = useState(categorySlug || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Update active category when URL param changes
  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug);
    }
  }, [categorySlug]);

  useEffect(() => {
    // Simulate an API call delay
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [activeCategory]);

  // Filter courses based on category and search term
  const filteredCourses = allCourses
    .filter(course => 
      (activeCategory === 'all' || course.categoryId === activeCategory) &&
      (searchTerm === '' || 
       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       course.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Get category info for the hero section
  const categoryInfo = categoriesInfo[activeCategory as keyof typeof categoriesInfo] 
    ? categoriesInfo[activeCategory as keyof typeof categoriesInfo]
    : categoriesInfo['all'];

  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Hero section */}
        <div className={`bg-gradient-to-r ${categoryInfo.color} text-white py-16`}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryInfo.name}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              {categoryInfo.description}
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
                placeholder="Buscar cursos..."
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

          {/* Courses grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-veloz-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-veloz-gray text-lg">Carregando cursos...</p>
            </div>
          ) : (
            <>
              {filteredCourses.length > 0 ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-veloz-dark">
                      {filteredCourses.length} {filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        title={course.title}
                        category={course.category}
                        image={course.image}
                        duration={course.duration}
                        level={course.level}
                        rating={course.rating}
                        students={course.students}
                        modules={course.modules}
                        featured={course.featured}
                        className="animate-fade-in"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4 text-veloz-gray">
                    <Search className="w-12 h-12 mx-auto opacity-50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nenhum curso encontrado</h3>
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
            </>
          )}

          {/* CTA Section */}
          <div className="glass-card rounded-xl p-8 text-center max-w-4xl mx-auto mt-8 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-veloz-blue/10 mb-4">
              <Target className="w-8 h-8 text-veloz-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Não sabe qual curso escolher?</h3>
            <p className="text-veloz-gray mb-6 max-w-lg mx-auto">
              Converse com um de nossos especialistas para descobrir qual curso se encaixa melhor com seus objetivos de carreira.
            </p>
            <Button className="bg-veloz-blue hover:bg-veloz-blue/90 text-white">
              Receber orientação personalizada
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCategoryPage;
