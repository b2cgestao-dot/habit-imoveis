import { useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SecaoHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const words = ["da Sua Primeira Casa", "do Seu Primeiro Apartamento", "do Seu Próprio Imóvel"];
  const [index, setIndex] = useState(0);

  useGSAP(() => {
    // 1. Animações Iniciais de Entrada (Background e Máscara)
    gsap.fromTo('.hero-bg',
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 0.7, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-title-mask',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power4.out', stagger: 0.1 }
    );

    gsap.fromTo(['.hero-subtitle', '.hero-cta'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // 2. Efeito Antigravidade (Sempre ativo e independente)
    gsap.to('.antigravity-text', {
      y: -6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 3. Loop de Troca de Texto Superfluído
    const tl = gsap.timeline({
      repeat: -1,
      delay: 3 // Espera as animações iniciais terminarem
    });

    words.forEach(() => {
      tl.to(textRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          // Muda o estado exatamente quando o texto some
          setIndex((prev) => (prev + 1) % words.length);
        }
      })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        })
        .to({}, { duration: 2.5 }); // "Estabiliza" - Tempo de leitura antes da próxima troca
    });

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <img
          src="/comprandoimovel.jpg"
          alt="Imóvel com alto custo-benefício"
          className="hero-bg w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6">
            <h1 className="hero-title-mask text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight drop-shadow-2xl">
              Chegou a hora de dar o primeiro passo na conquista <br className="hidden md:block" />
              <span
                ref={textRef}
                className="antigravity-text inline-block text-emerald-500 will-change-transform"
              >
                {words[index]}
              </span>
            </h1>
          </div>

          <p className="hero-subtitle text-lg md:text-xl text-gray-300 font-extralight mb-12 max-w-3xl leading-relaxed">
            Seu sonho da casa própria mais perto do que você imagina. A gente cuida de toda a burocracia e encontra a melhor condição pra você.
          </p>

          <a href="#contato" className="hero-cta flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-4 rounded-md font-medium text-lg md:text-xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] w-full sm:w-auto">
            <MessageCircle className="w-6 h-6" />
            <span>Seja atendido Agora</span>
          </a>

          <div className="mt-12 flex items-center justify-center gap-3 text-xs md:text-sm text-gray-400 font-extralight tracking-wide uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
              Equipe de Corretores Online agora
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;