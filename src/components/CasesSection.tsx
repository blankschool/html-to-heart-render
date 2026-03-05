const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.5)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const cases = [
  { num: '200M alcance / mês', body: 'Atribuído à marca pessoal do fundador. Seu posicionamento nas redes sociais virou o principal vetor de aquisição do G4.', who: 'Tallis Gomes', role: 'Fundador · G4 Educação' },
  { num: 'Top of mind do seu setor', body: 'Assumimos o perfil com 60 mil seguidores. Em menos de um ano, hoje geramos +286 mil. O mais importante: seu nome se tornou o mais reconhecido no setor de transporte.', who: 'Tony Bernardini', role: 'Fundador Trajeto · CEO Edini Transportes' },
  { num: '+200 mil seguidores', body: 'Seu número de seguidores estava estagnado em 132 mil por anos. Já no primeiro mês conquistamos mais 50 mil. Em menos de 1 ano alcançamos 325 mil seguidores.', who: 'Sandra Chayo', role: 'Sócia Diretora · HOPE' },
];

const CasesSection = () => (
  <section id="cases" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Resultados</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Cases de<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>clientes.</em>
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.82)' }}>
        A Blank gere 34 milhões de seguidores dos principais empresários do Brasil. Os nossos cases provam que o método funciona em fundadores diferentes, em setores diferentes e em estágios distintos de empresa.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {cases.map((c, i) => (
        <div key={i} className="bg-ink p-[40px_32px] relative overflow-hidden transition-colors hover:bg-ink-2 group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent transition-colors group-hover:bg-signal/40" />
          <div className="font-display font-normal text-cream leading-none mb-4" style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', letterSpacing: '-1px' }}>{c.num}</div>
          <p className="text-[13px] font-light leading-[1.8] mb-7" style={{ color: 'rgba(240,237,230,0.82)' }}>{c.body}</p>
          <div className="h-px mb-3.5" style={{ background: 'rgba(240,237,230,0.08)' }} />
          <div className="font-serif-body text-[14px] text-cream">{c.who}</div>
          <div className="font-mono-brand text-[10px] mt-[3px] tracking-[0.3px]" style={{ color: 'rgba(240,237,230,0.45)' }}>{c.role}</div>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a href="#investimento" className="font-mono-brand text-[11px] font-medium tracking-[2px] uppercase bg-cream text-ink py-4 px-8 no-underline transition-opacity hover:opacity-85">Enviar Aplicação</a>
      <a href="#investimento" className="font-mono-brand text-[11px] tracking-[1px] uppercase no-underline py-4 px-8 transition-opacity hover:opacity-70" style={{ border: '1px solid rgba(240,237,230,0.18)', color: 'rgba(240,237,230,0.6)' }}>Falar com Especialista</a>
    </div>
  </section>
);

export default CasesSection;
