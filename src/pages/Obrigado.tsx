import { useEffect, useRef } from 'react';
import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

const Obrigado = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo('.success-icon', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo('.success-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.success-text',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.cta-button',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.back-link',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2'
    );
  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 overflow-x-hidden">
      <Cabecalho />
      
      <main ref={containerRef} className="flex-grow flex items-center justify-center px-6 pt-32 pb-20 relative">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-2xl w-full text-center relative z-10">
          <div className="success-icon inline-flex items-center justify-center w-24 h-24 bg-emerald-500/20 rounded-full mb-8 shadow-[0_0_40px_rgba(16,185,129,0.2)] border border-emerald-500/30">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          
          <h1 className="success-title text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
            Solicitação Enviada com <span className="text-emerald-500 italic">Sucesso!</span>
          </h1>
          
          <p className="success-text text-xl text-gray-400 font-extralight mb-12 leading-relaxed">
            Parabéns! Você acaba de dar o primeiro passo para conquistar o seu novo lar. 
            Nossa equipe de especialistas já foi notificada e entraremos em contato o mais rápido possível.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://wa.me/5575999999999?text=Olá! Acabei de preencher o formulário no site da Habit Imobiliária e gostaria de falar com um especialista agora."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-5 rounded-2xl font-medium text-xl md:text-2xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95 w-full md:w-auto"
            >
              <span>Falar com Especialista Agora</span>
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>

            <Link 
              to="/"
              className="back-link flex items-center gap-2 text-gray-500 hover:text-emerald-500 transition-colors duration-300 font-extralight"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o site principal</span>
            </Link>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
};

export default Obrigado;
