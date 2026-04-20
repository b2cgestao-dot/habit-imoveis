import { Instagram, MapPin, Phone } from 'lucide-react';

const Rodape = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 md:py-20 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Info Esquerda */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <img src="/habit.png" alt="Habit Imobiliária" className="h-12 w-auto object-contain" />
            </div>

            <p className="text-gray-400 font-extralight mb-8 text-sm md:text-base leading-relaxed">
              A Habit Imóveis já ajudou mais de 1.000 famílias em Feira de Santana e Salvador a realizarem o sonho da casa própria. Atendimento humanizado e suporte em todas as etapas da negociação.
            </p>

            <div className="flex flex-col gap-5 font-extralight text-sm md:text-base text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-snug">Espaço Fraga Center - Av. Francisco Fraga Maia<br />Cidade Nova, Feira de Santana - BA, 44053-055</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="tel:+5575983248332" className="hover:text-emerald-400 transition-colors">(75) 98324-8332</a>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mapa Direita */}
          <div className="w-full h-[300px] lg:h-auto min-h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.375873354459!2d-38.952187099999996!3d-12.2228096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7143996d2d235a9%3A0xd6ab516f72dbf863!2sHabit%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1774638907812!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs md:text-sm font-extralight text-gray-600 flex flex-col md:flex-row items-center justify-between gap-6 tracking-wide">
          <p>© {new Date().getFullYear()} Habit Imóveis. Todos os direitos reservados. <span className="text-emerald-500 font-medium ml-2">CRECI: 3184</span></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 uppercase">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 uppercase">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
