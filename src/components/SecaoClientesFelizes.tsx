const imagensClientes = [
  "/clientes/Clientes (1).jpg",
  "/clientes/Clientes (2).jpg",
  "/clientes/Clientes (3).jpg",
  "/clientes/Clientes (4).jpg",
  "/clientes/Clientes (5).jpg",
  "/clientes/Clientes (6).jpg",
  "/clientes/Clientes (7).jpg",
  "/clientes/Clientes (8).jpg",
  "/clientes/Clientes (9).jpg",
  "/clientes/Clientes (10).jpg",
  "/clientes/Clientes (11).jpg",
  "/clientes/Clientes (12).jpg",
];

const SecaoClientesFelizes = () => {
  // Duplicar o array para que o CSS Marquee rode de forma 100% contínua e perfeita
  const carouselItems = [...imagensClientes, ...imagensClientes];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-slate-900">
          Quem já Realizou o <span className="text-emerald-500">Sonho da Casa Própria</span>
        </h2>
        <p className="text-gray-500 font-extralight mt-4 text-lg">Famílias reais que confiaram na Habit.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Camadas de gradiente nas bordas para disfarçar a entrada/saída das fotos */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee pt-2 pb-8">
          {carouselItems.map((imgSrc, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-80 md:w-80 md:h-[450px] mx-4 rounded-3xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100">
              <img 
                src={imgSrc} 
                alt={`Cliente Habit Feliz ${index}`} 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>

        {/* Central CTA Button */}
        <div className="container mx-auto px-6 mt-12 md:mt-16 flex justify-center relative z-20">
          <a href="#contato" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-4 rounded-full font-medium text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">
            <span>Quero Segurar a Minha Chave</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecaoClientesFelizes;
