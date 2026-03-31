import { useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const depoimentos = [
  {
    text: "Imobiliária de excelência, trabalha com amor e muita dedicação do começo da compra até o recebimento de chaves💚",
    author: "Karolaine Silva",
    date: "3 meses atrás",
    image: "/google/karolaine.png"
  },
  {
    text: "Obtive o melhor atendimento imobiliário da cidade. Orientação precisas e encaminhamentos corretos me levaram a compra um imóvel. Sem enrolação, informam ao cliente tudo, não nos deixa no escuro. Se você for comprar um imóvel não deixe de falar com os Corretores da Habit.",
    author: "Demétrius Santos",
    date: "1 mês atrás",
    image: "/google/demetrius-santos.png"
  },
  {
    text: "A melhor imobiliária de Feira de Santana - Ba com uma equipe de corretores excelentes, trabalha com compromisso, ética. Dedicados a realizar o sonho da casa própria.",
    author: "Jaci Costa",
    date: "2 meses atrás",
    image: "/google/jaci-costa.png"
  },
  {
    text: "Experiência incrível e profissionais qualificadíssimos👏🏻👏🏻",
    author: "Joana Andrade",
    date: "3 meses atrás",
    image: "/google/joana-andrade.png"
  },
  {
    text: "Excelente atendimento, compromissados com o cliente. Orientou-nos de forma clara e prontamente.",
    author: "Meirivan Andrade",
    date: "1 semana atrás",
    image: "/google/meirivan-andrade.png"
  },
  {
    text: "A melhor opção de Feira de Santana. Adquiri meu primeiro imóvel e tive total satisfação com o processo de negociação. Top!",
    author: "Bruna Queiroz",
    date: "2 meses atrás"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const SecaoProvaSocial = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.prova-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    tl.fromTo('.prova-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      '-=0.6'
    );
    tl.fromTo('.prova-star',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.7)' },
      '-=0.8'
    );
  }, { scope: sectionRef });

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-20 prova-title">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-tight">
            Validação de Quem Importa: <span className="text-emerald-500 block md:inline mt-2 md:mt-0">Nossos Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-extralight leading-relaxed max-w-2xl mx-auto">
            Avaliações reais publicadas no Google que comprovam nosso compromisso com a sua satisfação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {depoimentos.map((item, index) => (
            <div key={index} className="prova-card flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">              {/* Header do Google Card */}
              <div className="flex items-center gap-4 mb-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0 border border-gray-100"
                  />
                ) : (
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-medium text-xl shadow-inner shrink-0">
                    {item.author.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 leading-tight">{item.author}</h4>
                  <p className="text-gray-500 text-sm font-extralight">{item.date}</p>
                </div>
                <GoogleIcon />
              </div>

              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-4 w-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="prova-star w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>

              {/* Texto da Avaliação */}
              <p className="text-base text-gray-700 font-extralight leading-relaxed line-clamp-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Central CTA Button */}
        <div className="flex justify-center mt-12 md:mt-20">
          <a href="#contato" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-4 rounded-full font-medium text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">
            <span>Quero Falar com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoProvaSocial;
