import { useState, useEffect, useRef } from 'react';
import { BedDouble, ArrowRight, ArrowLeft, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const imoveis = [
  {
    image: '/atlanta.jpg',
    title: 'Condomínio Atlanta',
    location: 'Bairro SIM, Feira de Santana',
    price: 'Oportunidade',
    beds: 3
  },
  {
    image: "/uptech.jpg",
    title: 'UP Tech',
    location: 'Bairro SIM, Feira de Santana',
    price: 'Aprovamos Crédito',
    beds: 2
  },
  {
    image: '/ValeDoRubi.avif',
    title: 'Condominio Vale do Rubi',
    location: 'Mangabeira, Feira de Santana',
    price: 'Excelente Valor',
    beds: 3
  },
  {
    image: '/uniqsossego.jpg',
    title: 'Unique Sossêgo',
    location: 'Bairro SIM, Feira de Santana',
    price: 'Alto Padrão',
    beds: 4
  }
];

const ImoveisDestaque = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint do Tailwind
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.imoveis-title',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.imoveis-title',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo('.imovel-card',
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.imoveis-grid',
          start: 'top 80%'
        }
      }
    );
  }, { scope: sectionRef });

  const nextSlide = () => {
    const step = isMobile ? 1 : 2;
    setCurrentIndex((prev) => (prev + step >= imoveis.length ? 0 : prev + step));
  };

  const prevSlide = () => {
    const step = isMobile ? 1 : 2;
    setCurrentIndex((prev) => {
      const newIndex = prev - step;
      if (newIndex < 0) {
        return isMobile ? imoveis.length - 1 : Math.max(0, imoveis.length - 2);
      }
      return newIndex;
    });
  };

  const visibleImoveis = isMobile
    ? [imoveis[currentIndex]]
    : imoveis.slice(currentIndex, currentIndex + 2);

  // Fallback para desktop se slice retornar apenas 1 (fim do array)
  if (!isMobile && visibleImoveis.length === 1 && imoveis.length > 1) {
    visibleImoveis.push(imoveis[0]);
  }

  return (
    <section id="imoveis" ref={sectionRef} className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">

          {/* Lado Esquerdo - Info */}
          <div className="w-full lg:w-1/3 text-left imoveis-title">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Sua Nova Casa em Feira de Santana
            </h2>
            <p className="text-lg text-gray-400 font-extralight leading-relaxed mb-10">
              Encontramos as melhores oportunidades para você. De apartamentos bem localizados a casas em condomínio, separamos o que há de melhor no mercado para garantir a sua conquista.
            </p>
            <div className="flex items-center gap-4 hidden lg:flex">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 border border-emerald-500 flex items-center justify-center transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lado Direito - Carrossel de Imóveis */}
          <div className="w-full lg:w-2/3">
            <div className={`imoveis-grid grid gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
              {visibleImoveis.map((imovel, index) => (
                <div key={index} className="imovel-card bg-slate-800/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition-shadow duration-300 border border-white/5 flex flex-col group hover:-translate-y-1">                  <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={imovel.image}
                    alt={imovel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                  <div className="p-8 flex flex-col flex-grow relative z-20 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent -mt-8 pt-12">
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-2 truncate group-hover:text-emerald-400 transition-colors duration-300">
                        {imovel.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-400 font-extralight text-sm mb-3">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span className="truncate">{imovel.location}</span>
                      </div>
                      <p className="text-xl font-medium text-emerald-500 tracking-tight">
                        {imovel.price === 'Aprovamos Crédito' ? 'Consultoria Especializada' : imovel.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 text-gray-300 mb-8 bg-white/5 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/5 text-sm">
                      <BedDouble className="w-4 h-4 text-emerald-500" />
                      <span className="font-extralight">{imovel.beds} Ambientes</span>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-emerald-500 text-white py-4 rounded-xl font-medium transition-all duration-300 border border-white/10 hover:border-emerald-500 backdrop-blur-sm">
                        <span>Ver Condições</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Controls (Below Card) */}
            <div className={`flex items-center justify-center gap-6 mt-12 ${isMobile ? 'flex' : 'lg:hidden'}`}>
              <button
                onClick={prevSlide}
                className="w-16 h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center hover:bg-emerald-50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-all duration-300 shadow-[0_10px_25px_rgba(16,185,129,0.4)] active:scale-95"
                aria-label="Próximo"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Central CTA Button */}
        <div className="flex justify-center mt-12 md:mt-20">
          <a href="#contato" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-5 rounded-full font-medium text-xl md:text-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">
            <span>Quero Ver Mais Oportunidades</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImoveisDestaque;
