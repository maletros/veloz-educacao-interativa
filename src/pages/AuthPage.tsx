
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const AuthPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  
  // Reset password state
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a placeholder for actual login logic
    setTimeout(() => {
      toast({
        title: "Autenticação em implementação",
        description: "Esta funcionalidade ainda será implementada no backend.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerPassword !== registerConfirmPassword) {
      toast({
        title: "Erro de validação",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This is a placeholder for actual registration logic
    setTimeout(() => {
      toast({
        title: "Cadastro em implementação",
        description: "Esta funcionalidade ainda será implementada no backend.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a placeholder for actual password reset logic
    setTimeout(() => {
      setResetSent(true);
      toast({
        title: "Redefinição de senha em implementação",
        description: "Esta funcionalidade ainda será implementada no backend.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-veloz-light dark:bg-veloz-dark p-4">
      <div className="glass-card w-full max-w-md p-6 rounded-xl">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-veloz-blue hover:text-veloz-blue/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Link>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastro</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-center dark:text-white">Bem-vindo de volta</h1>
                <p className="text-sm text-center text-muted-foreground">
                  Entre com seu e-mail e senha para acessar sua conta
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="pl-10"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Senha"
                      className="pl-10"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-veloz-blue hover:underline"
                      onClick={() => document.getElementById('reset-password-tab')?.click()}
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-veloz-blue hover:bg-veloz-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-center dark:text-white">Criar conta</h1>
                <p className="text-sm text-center text-muted-foreground">
                  Preencha os dados abaixo para criar sua conta
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Nome completo"
                      className="pl-10"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="pl-10"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Senha"
                      className="pl-10"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Confirmar senha"
                      className="pl-10"
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-veloz-blue hover:bg-veloz-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Cadastrando..." : "Cadastrar"}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
        
        {/* Hidden tab trigger for reset password modal */}
        <button id="reset-password-tab" className="hidden" onClick={() => {
          document.getElementById('reset-password-dialog')?.classList.remove('hidden');
        }}></button>
        
        {/* Reset Password Dialog */}
        <div id="reset-password-dialog" className="hidden fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-md p-6 rounded-xl relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => {
                document.getElementById('reset-password-dialog')?.classList.add('hidden');
                setResetSent(false);
                setResetEmail('');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold dark:text-white">Recuperar senha</h2>
              
              {!resetSent ? (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Digite seu e-mail abaixo e enviaremos um link para redefinir sua senha.
                  </p>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="pl-10"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-veloz-blue hover:bg-veloz-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar link de recuperação"}
                  </Button>
                </form>
              ) : (
                <div className="space-y-4 text-center">
                  <p className="text-green-600 dark:text-green-400">
                    Link de recuperação enviado!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verifique seu e-mail para instruções sobre como redefinir sua senha.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      document.getElementById('reset-password-dialog')?.classList.add('hidden');
                      setResetSent(false);
                      setResetEmail('');
                    }}
                  >
                    Fechar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
