import Cabecalho from '../components/Cabecalho';
import SecaoHero from '../components/SecaoHero';
import SecaoClientesFelizes from '../components/SecaoClientesFelizes';
import SecaoDiferenciais from '../components/SecaoDiferenciais';
import SecaoSobre from '../components/SecaoSobre';
import ImoveisDestaque from '../components/ImoveisDestaque';
import SecaoProvaSocial from '../components/SecaoProvaSocial';
import LeadForm from '../features/leadform/LeadForm';
import Rodape from '../components/Rodape';

function LandingPage() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Cabecalho />
      <main>
        <SecaoHero />
        <SecaoClientesFelizes />
        <SecaoDiferenciais />
        <SecaoSobre />
        <ImoveisDestaque />
        <SecaoProvaSocial />
        <LeadForm />
      </main>
      <Rodape />
    </div>
  );
}

export default LandingPage;
