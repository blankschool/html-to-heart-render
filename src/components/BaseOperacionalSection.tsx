const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.5)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const BaseOperacionalSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <Eyebrow>Base Operacional — Influentes</Eyebrow>
    <h2 className="font-display font-normal leading-[0.96] text-cream mb-4" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
      Tudo que foi construído,<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>dentro da empresa.</em>
    </h2>
    <p className="text-[15px] font-light leading-[1.85] max-w-[560px] mb-14" style={{ color: 'rgba(240,237,230,0.82)' }}>
      Cada sessão, cada decisão e cada roteiro do programa fica registrado em uma plataforma estruturada pela Blank. No encerramento, esse acervo é transferido integralmente para a empresa.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="bg-ink p-[44px_40px] transition-colors hover:bg-ink-2">
        <div className="text-[15px] font-medium mb-2.5" style={{ color: 'rgba(240,237,230,0.9)' }}>O time não depende da memória de ninguém.</div>
        <p className="text-[13px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.78)' }}>Acesso permanente — sem prazo de expiração.</p>
      </div>
      <div className="bg-ink p-[44px_40px] transition-colors hover:bg-ink-2">
        <div className="text-[15px] font-medium mb-2.5" style={{ color: 'rgba(240,237,230,0.9)' }}>Diagnóstico, plano, roteiros e histórico completo.</div>
        <p className="text-[13px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.78)' }}>Dentro da empresa para sempre. A inteligência pertence a você.</p>
      </div>
    </div>
    <div className="mt-6 inline-block py-3.5 px-5" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
      <span className="font-mono-brand text-[10px] tracking-[1px]" style={{ color: 'rgba(240,237,230,0.55)' }}>Acesso permanente — sem prazo de expiração</span>
    </div>
  </section>
);

export default BaseOperacionalSection;
