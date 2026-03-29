import { MessageCircle } from 'lucide-react';

const SecaoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-32 pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/comprandoimovel.jpg"
          alt="Imóvel com alto custo-benefício"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
            Sua Conquista Mais Importante <br className="hidden md:block" />
            <span className="text-emerald-500">Ao Seu Alcance.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-extralight mb-12 max-w-3xl leading- relaxed drop-shadow-md">
            Nossa inteligência financeira e parcerias bancárias transformam parcelas instáveis em um investimento seguro e 100% seu. Cuidamos do crédito e da burocracia para você.
          </p>

          <a href="#contato" className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 md:px-10 py-4 rounded-full font-medium text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_45px_-10px_rgba(16,185,129,0.6)] w-full sm:w-auto">
            <MessageCircle className="w-6 h-6" />
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
