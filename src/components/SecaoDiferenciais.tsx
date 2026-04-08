import { useRef } from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const diferenciais = [
  {
    icon: <Zap className="differential-icon w-12 h-12 text-emerald-500 mb-6" />,
    title: 'Aprovação Acelerada',
    description: 'Esqueça a morosidade bancária. Validamos seu crédito de forma inteligente e ágil para o seu perfil.'
  },
  {
    icon: <Target className="differential-icon w-12 h-12 text-emerald-500 mb-6" />,
    title: 'Parcela Que Cabe no Bolso',
    description: 'Nós buscamos condições de pagamento que fazem sentido pra sua renda, sem apertar seu orçamento.'
  },
  {
    icon: <ShieldCheck className="differential-icon w-12 h-12 text-emerald-500 mb-6" />,
    title: 'Garantia Estrutural',
    description: 'Imóveis rigorosamente avaliados. Compre com a segurança total do seu patrimônio.'
  }
];

const SecaoDiferenciais = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.diff-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo('.diff-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.differential-icon',
        { scale: 0, rotation: -10 },
        { scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' },
        '-=0.8'
      );
  }, { scope: sectionRef });
  return (
    <section id="diferenciais" ref={sectionRef} className="py-24 md:py-32 bg-[#F3F4F6]">
      {/* CSS injetado exatamente do Uiverse com as cores atualizadas e adaptado para manter a responsividade */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .diferenciais-wrapper .card {
          position: relative;
          width: 300px;
          height: 380px;
          border-radius: 14px;
          z-index: 10;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
          margin: 0 auto;
        }

        .diferenciais-wrapper .bg {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          z-index: 2;
          background: rgba(255, 255, 255, .95);
          backdrop-filter: blur(24px);
          border-radius: 10px;
          overflow: hidden;
          outline: 2px solid white;
          /* Adições para centralizar o texto dentro do bg */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .diferenciais-wrapper .blob {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #10b981; /* Verde Habit (emerald-500) */
          opacity: 1;
          filter: blur(12px);
          animation: blob-bounce 5s infinite ease;
        }

        @keyframes blob-bounce {
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }
      `}} />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 diff-title">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-tight">
            O Caminho Mais Seguro Até o seu primeiro Imóvel
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-extralight leading-relaxed">
            Comprar seu primeiro imóvel não precisa ser um bicho de sete cabeças. A gente te mostra o caminho e caminha junto com você.
          </p>
        </div>

        {/* Usando o flex-wrap com a div wrapper para o CSS isolado funcionar */}
        <div className="diferenciais-wrapper flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {diferenciais.map((item, index) => (
            <div key={index} className="card diff-card">
              <div className="blob"></div>
              <div className="bg">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-extralight leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central CTA Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a href="#contato" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-5 rounded-full font-medium text-xl md:text-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">
            <span>Quero um Atendimento Exclusivo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoDiferenciais;
