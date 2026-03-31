import { useRef } from 'react';
import { MousePointerClick, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLeadForm } from './form-logic';
import { FormFields } from './FormFields';

gsap.registerPlugin(ScrollTrigger);

const LeadForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const {
    formData,
    errors,
    isLoading,
    submitError,
    handleInputChange,
    handlePhoneChange,
    handleSubmit
  } = useLeadForm();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.form-title-mask', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo('.form-container', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 
      '-=0.8'
    );
  }, { scope: sectionRef });

  return (
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Elementos de fundo dinâmicos */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <div className="overflow-hidden mb-6">
          <h2 className="form-title-mask text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
            Dê o Primeiro Passo Rumo à <span className="text-emerald-500">Sua Casa Própria</span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-400 font-extralight mb-12 max-w-2xl mx-auto leading-relaxed">
          Preencha rapidamente para agendar sua consultoria gratuita. Identificamos o caminho mais seguro e rápido para a sua nova casa.
        </p>

        <div className="form-container bg-slate-800/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 text-left relative z-20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormFields 
              formData={formData} 
              errors={errors} 
              isLoading={isLoading}
              onChange={handleInputChange} 
              onPhoneChange={handlePhoneChange} 
            />

            {submitError && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                {submitError}
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-white px-6 py-5 rounded-xl font-medium text-xl md:text-2xl transition-all duration-300 mt-10 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)] ${isLoading ? 'opacity-70 cursor-not-allowed hover:-translate-y-0' : 'hover:-translate-y-1'}`}
            >
              <span>{isLoading ? 'Processando...' : 'Agendar Minha Consultoria Gratuita'}</span>
              {!isLoading && <MousePointerClick className="w-6 h-6" />}
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

export default LeadForm;
