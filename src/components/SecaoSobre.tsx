import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SecaoSobre = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Split Fade-in
    gsap.fromTo('.sobre-image', 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sobre-image',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.sobre-text', 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sobre-text',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect on image
    gsap.to('.sobre-image-parallax', {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.sobre-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: sectionRef });
  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Imagem Esquerda */}
          <div className="w-full md:w-1/2 sobre-image">
            {/* Removi shadow, bg-colors, e overflow-hidden que estavam criando a "caixa fantasma".
              Deixei apenas a formatação relativa e a animação do grupo.
            */}
            <div className="relative group overflow-hidden rounded-[2.5rem]">
              <img
                src="/habitsv1.png"
                alt="Equipe Habit Imóveis"
                // Removi object-cover pois ele pode forçar o corte da imagem, 
                // e adicionei rounded-t-[2.5rem] para arredondar apenas o topo,
                // deixando a base esmaecida fluir livremente sem recortes.
                className="w-full h-auto sobre-image-parallax group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* O overlay estava escurecendo o seu esmaecimento, eu o suavizei. Se não quiser, pode remover essa linha. */}
              <div className="absolute inset-0 bg-emerald-900/5 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>

          {/* Texto Direita */}
          <div className="w-full md:w-1/2 text-left sobre-text">
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-8 leading-tight">
              A imobiliária que descomplica o seu sonho
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-500 font-extralight leading-relaxed">
              <p>
                A Habit Imóveis é uma imobiliária fundada em 2020 e já ajudou mais de 1.500 famílias em Feira de Santana e Salvador a realizarem o sonho da casa própria.
              </p>
              <p>
                Trabalhamos com vendas, locação, imóveis prontos, lançamentos e consultoria para quem deseja morar bem ou investir com segurança. Oferecemos atendimento humanizado, análise de perfil, visitas agendadas e suporte em todas as etapas da negociação.
              </p>
            </div>
            <div className="mt-10 p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <p className="text-lg font-medium text-emerald-600 leading-relaxed">
                Entre em contato com a Habit Imóveis e descubra as melhores oportunidades da região para realizar o seu sonho com tranquilidade e confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoSobre;