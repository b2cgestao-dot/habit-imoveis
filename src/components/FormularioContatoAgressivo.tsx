import { MousePointerClick, Zap, ChevronDown } from 'lucide-react';

const FormularioContatoAgressivo = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Elementos de fundo dinâmicos */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
          Dê o Primeiro Passo Rumo à <span className="text-emerald-500">Sua Casa Própria</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-extralight mb-12 max-w-2xl mx-auto leading-relaxed">
          Preencha rapidamente para agendar sua consultoria gratuita. Identificamos o caminho mais seguro e rápido para a sua nova casa.
        </p>

        <div className="bg-slate-800/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 text-left relative z-20">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base"
                placeholder="Ex: João da Silva Santos"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Seu melhor E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base"
                  placeholder="exemplo@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-gray-600 font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Qual o seu imóvel de interesse?</label>
              <div className="relative">
                <select
                  required
                  className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white font-extralight focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-base appearance-none cursor-pointer"
                >
                  <option value="" disabled selected className="bg-slate-800 text-gray-400">Selecione uma opção</option>
                  <option value="casa" className="bg-slate-800 text-white">Casa</option>
                  <option value="apartamento" className="bg-slate-800 text-white">Apartamento</option>
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-white px-6 py-5 rounded-xl font-medium text-xl md:text-2xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)] mt-10 hover:-translate-y-1">
              <span>Agendar Minha Consultoria Gratuita</span>
              <MousePointerClick className="w-6 h-6" />
            </button>
            <div className="flex justify-center items-center gap-2 text-xs md:text-sm text-gray-500 pt-5">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span>Sua nova vida começa com um especialista.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioContatoAgressivo;
