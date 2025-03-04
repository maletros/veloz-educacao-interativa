
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, Lightbulb, LineChart, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';

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

const CourseCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [courses, setCourses] = useState<typeof allCourses>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulando uma chamada à API
    setIsLoading(true);
    setTimeout(() => {
      const filteredCourses = categorySlug 
        ? allCourses.filter(course => course.categoryId === categorySlug)
        : [];
      setCourses(filteredCourses);
      setIsLoading(false);
    }, 500);
  }, [categorySlug]);

  // Obter informações da categoria atual
  const categoryInfo = categorySlug && categoriesInfo[categorySlug as keyof typeof categoriesInfo] 
    ? categoriesInfo[categorySlug as keyof typeof categoriesInfo]
    : {
        name: 'Categoria',
        description: 'Explore nossos cursos',
        icon: Code,
        color: 'from-blue-500 to-blue-600'
      };

  // Filtrar por nível se necessário
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.level.toLowerCase().includes(filter.toLowerCase()));

  // Gerar o Ícone da categoria
  const CategoryIcon = categoryInfo.icon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 bg-gradient-to-r ${categoryInfo.color} text-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <CategoryIcon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Cursos de {categoryInfo.name}</h1>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            {categoryInfo.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              onClick={() => setFilter('all')}
            >
              Todos os níveis
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'iniciante' ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              onClick={() => setFilter('iniciante')}
            >
              Iniciante
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'intermediário' ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              onClick={() => setFilter('intermediário')}
            >
              Intermediário
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'avançado' ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              onClick={() => setFilter('avançado')}
            >
              Avançado
            </button>
          </div>
        </div>
      </section>
      
      {/* Courses List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-veloz-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-veloz-gray text-lg">Carregando cursos...</p>
            </div>
          ) : (
            <>
              {filteredCourses.length > 0 ? (
                <>
                  <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-veloz-dark">
                      {filteredCourses.length} {filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
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
                  <div className="text-6xl mb-4">🔍</div>
                  <h2 className="text-2xl font-bold text-veloz-dark mb-2">Nenhum curso encontrado</h2>
                  <p className="text-veloz-gray text-lg mb-6">
                    Não encontramos cursos para esta categoria com os filtros atuais.
                  </p>
                  <Button onClick={() => setFilter('all')}>
                    Ver todos os níveis
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseCategoryPage;
