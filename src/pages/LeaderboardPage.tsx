
import React from 'react';
import { Trophy, Star, Award, Users, Zap } from 'lucide-react';
import GamificationBadge from '@/components/GamificationBadge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

// Mock data for a complete leaderboard
const leaderboardUsers = [
  { id: 1, name: 'Ana Silva', xp: 12450, level: 24, badge: 'Python Master', badgeType: 'skill' as const },
  { id: 2, name: 'Carlos Mendes', xp: 10980, level: 22, badge: 'Full Stack Dev', badgeType: 'skill' as const },
  { id: 3, name: 'Juliana Costa', xp: 9870, level: 20, badge: '90 Days Streak', badgeType: 'streak' as const },
  { id: 4, name: 'Rafael Santos', xp: 8650, level: 18, badge: '10 Courses', badgeType: 'course' as const },
  { id: 5, name: 'Mariana Lima', xp: 7890, level: 17, badge: 'First Place', badgeType: 'achievement' as const },
  { id: 6, name: 'Pedro Oliveira', xp: 7450, level: 16, badge: 'React Expert', badgeType: 'skill' as const },
  { id: 7, name: 'Luiza Fernandes', xp: 6980, level: 15, badge: '60 Days Streak', badgeType: 'streak' as const },
  { id: 8, name: 'Bruno Costa', xp: 6540, level: 14, badge: 'Data Science', badgeType: 'skill' as const },
  { id: 9, name: 'Camila Sousa', xp: 5980, level: 13, badge: '5 Courses', badgeType: 'course' as const },
  { id: 10, name: 'Tiago Almeida', xp: 5670, level: 12, badge: 'First Course', badgeType: 'achievement' as const },
];

const LeaderboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-veloz-light dark:bg-veloz-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-veloz-blue/10 dark:bg-veloz-blue/20 rounded-full mb-4">
              <Trophy className="w-5 h-5 text-veloz-blue mr-2" />
              <span className="text-sm font-medium text-veloz-blue">Competição Saudável</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-veloz-dark dark:text-white mb-6">
              Leaderboard
            </h1>
            <p className="text-lg text-veloz-gray dark:text-gray-300 mb-8">
              O Leaderboard é uma ferramenta que mostra a classificação dos estudantes com base em pontos de experiência (XP) 
              conquistados ao concluir cursos e atividades. É uma maneira divertida de acompanhar seu progresso e manter a 
              motivação enquanto aprende!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card lg:col-span-2 rounded-xl overflow-hidden">
              <div className="bg-veloz-blue text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  <h3 className="font-medium">Ranking Completo</h3>
                </div>
                <div className="flex space-x-1">
                  <button className="px-3 py-1 text-sm bg-white text-veloz-blue rounded-full">Semanal</button>
                  <button className="px-3 py-1 text-sm bg-veloz-blue/30 text-white rounded-full">Mensal</button>
                  <button className="px-3 py-1 text-sm bg-veloz-blue/30 text-white rounded-full">Geral</button>
                </div>
              </div>
              
              <div className="divide-y divide-veloz-light dark:divide-veloz-dark/70">
                {leaderboardUsers.map((user, index) => (
                  <div 
                    key={user.id} 
                    className={`flex items-center p-4 ${
                      index === 0 ? 'bg-yellow-50 dark:bg-veloz-blue/30 leaderboard-highlight' : 
                      index === 1 ? 'bg-gray-50 dark:bg-gray-800/30' : 
                      index === 2 ? 'bg-amber-50 dark:bg-amber-900/20' : ''
                    }`}
                  >
                    <div className="w-8 text-center font-bold text-lg text-veloz-gray dark:text-gray-300">
                      {index === 0 ? <Trophy className="w-6 h-6 text-yellow-500 mx-auto" /> :
                      index === 1 ? <Star className="w-6 h-6 text-gray-400 mx-auto" /> :
                      index === 2 ? <Award className="w-6 h-6 text-amber-500 mx-auto" /> :
                      `#${index + 1}`}
                    </div>
                    <div className="w-12 h-12 bg-veloz-light dark:bg-veloz-dark/60 rounded-full mx-4 flex items-center justify-center overflow-hidden">
                      <div className="text-xl font-bold text-veloz-blue dark:text-white">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium dark:text-white">{user.name}</div>
                      <div className="text-sm text-veloz-gray dark:text-gray-300">Nível {user.level}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-6">
                        <div className="text-xs text-veloz-gray dark:text-gray-300">XP Total</div>
                        <div className="font-bold text-veloz-blue">{user.xp.toLocaleString()}</div>
                      </div>
                      <GamificationBadge 
                        type={user.badgeType}
                        title={user.badge}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                  <Zap className="w-5 h-5 text-veloz-green mr-2" />
                  Como Funciona
                </h3>
                
                <div className="space-y-4 text-veloz-gray dark:text-gray-300">
                  <div className="flex items-start">
                    <div className="bg-veloz-blue/10 dark:bg-veloz-blue/20 rounded-full w-8 h-8 flex items-center justify-center text-veloz-blue mr-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <p>Ganhe <span className="font-medium text-veloz-blue">pontos XP</span> ao completar cursos, atividades e desafios.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-veloz-blue/10 dark:bg-veloz-blue/20 rounded-full w-8 h-8 flex items-center justify-center text-veloz-blue mr-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <p>Suba de <span className="font-medium text-veloz-blue">nível</span> à medida que acumula XP, desbloqueando novos recursos.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-veloz-blue/10 dark:bg-veloz-blue/20 rounded-full w-8 h-8 flex items-center justify-center text-veloz-blue mr-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <p>Conquiste <span className="font-medium text-veloz-blue">badges</span> exclusivas que mostram suas habilidades.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-veloz-blue/10 dark:bg-veloz-blue/20 rounded-full w-8 h-8 flex items-center justify-center text-veloz-blue mr-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <p>Compare seu <span className="font-medium text-veloz-blue">progresso</span> com outros estudantes no leaderboard.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                  <Users className="w-5 h-5 text-veloz-blue mr-2" />
                  Benefícios
                </h3>
                
                <ul className="space-y-3 text-veloz-gray dark:text-gray-300 list-disc pl-5">
                  <li>Incentiva a consistência nos estudos</li>
                  <li>Torna o aprendizado mais divertido e motivador</li>
                  <li>Ajuda a identificar áreas de interesse</li>
                  <li>Cria um senso de comunidade entre os estudantes</li>
                  <li>Permite acompanhar seu progresso de forma clara</li>
                </ul>
                
                <div className="mt-6">
                  <Button className="w-full bg-veloz-blue hover:bg-veloz-blue/90 text-white">
                    Começar a ganhar XP agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-veloz-dark dark:text-white mb-4">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-lg text-veloz-gray dark:text-gray-300 mb-8">
              Cadastre-se agora e comece a ganhar XP enquanto aprende novas habilidades!
            </p>
            <Button size="lg" className="bg-veloz-blue hover:bg-veloz-blue/90 text-white px-8">
              Criar conta gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
