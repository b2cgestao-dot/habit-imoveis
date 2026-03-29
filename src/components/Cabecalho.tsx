
import { MessageCircle, Menu } from 'lucide-react';

const Cabecalho = () => {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-slate-800/85 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl flex items-center justify-between transition-all duration-300">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/julioingrato.png" alt="Habit Imobiliária" className="h-10 w-auto object-contain" />
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-6 text-sm font-extralight text-gray-300 tracking-wide">
          <a href="#diferenciais" className="hover:text-emerald-400 transition-colors duration-300">Nossa Estrutura</a>
          <a href="#imoveis" className="hover:text-emerald-400 transition-colors duration-300">Oportunidades</a>
          <a href="#depoimentos" className="hover:text-emerald-400 transition-colors duration-300">Relatos</a>
        </nav>

        <a
          href="https://wa.me/5575983248332"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_4px_15px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_8px_20px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Atendimento VIP</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white p-2 hover:text-emerald-400 transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Cabecalho;
