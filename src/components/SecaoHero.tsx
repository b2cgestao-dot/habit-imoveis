import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SecaoHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Background Zoom Out
    gsap.fromTo('.hero-bg',
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 0.5, duration: 2, ease: 'power3.out' }
    );

    // Title Mask Reveal
    gsap.fromTo('.hero-title-mask',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power4.out', stagger: 0.1 }
    );

    // Subtitle & CTA Fade-up
    gsap.fromTo(['.hero-subtitle', '.hero-cta'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-32 pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/comprandoimovel.jpg"
          alt="Imóvel com alto custo-benefício"
          className="hero-bg w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <div className="overflow-hidden mb-6">
            <h1 className="hero-title-mask text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight drop-shadow-2xl">
              Sua Conquista Mais Importante <br className="hidden md:block" />
              <span className="text-emerald-500">Ao Seu Alcance.</span>
            </h1>
          </div>

          <p className="hero-subtitle text-lg md:text-xl text-gray-300 font-extralight mb-12 max-w-3xl leading-relaxed drop-shadow-md">
            Nossa inteligência financeira e parcerias bancárias transformam parcelas instáveis em um investimento seguro e 100% seu. Cuidamos do crédito e da burocracia para você.
          </p>

          <a href="#contato" className="hero-cta flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-4 rounded-full font-medium text-lg md:text-xl transition-colors transition-shadow duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">            <MessageCircle className="w-6 h-6" />
            <span>Dar o Primeiro Passo</span>
          </a>

          <div className="mt-12 flex items-center justify-center gap-3 text-xs md:text-sm text-gray-400 font-extralight tracking-wide uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
              Equipe de crédito online agora
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecaoHero;
