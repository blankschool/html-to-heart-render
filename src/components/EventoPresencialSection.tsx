const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.5)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const cards = [
  { title: 'Conselheiros presencialmente', body: 'Rony, Renata ou Erich presente. Mentoria presencial com quem construiu presença que gera negócio — e pode ser consultado ao vivo.' },
  { title: 'Networking com outros membros', body: 'Espaço para construir ou fortalecer amizades duradouras com os colegas que você conheceu ao longo do seu cohort.' },
  { title: 'Mentoria em grupo', body: 'Sessões com a Blank para análise, ajuste de rota e benchmarking entre ex-alunos com dados reais de operação autônoma.' },
  { title: 'Produção de conteúdo ao vivo', body: 'Parte do dia é para gravar. Com feedback imediato do grupo e dos conselheiros — um ciclo que reativa e melhora o que foi construído no programa.' },
];

const EventoPresencialSection = () => (
  <section className="bg-ink-2 overflow-hidden" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: 'none' }}>

      {/* Left column — eyebrow + title + photo + stats */}
      <div className="flex flex-col" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>

        {/* Header */}
        <div className="px-6 md:px-[52px] pt-[72px] md:pt-[100px] pb-8">
          <Eyebrow>Encontro presencial — benefício pós-programa</Eyebrow>
          <h2 className="font-display font-normal leading-[0.94] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
            Evento<br />presencial.<br />
            <em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>3× por ano.</em>
          </h2>
        </div>

        {/* Photo */}
        <div className="relative overflow-hidden flex-1" style={{ minHeight: '340px' }}>
          <img
            src="/evento-presencial.jpg"
            alt="Evento presencial Influentes"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(100%)', opacity: 0.88 }}
          />
          {/* Dark overlay for integration with dark UI */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(12,12,10,0) 60%, rgba(12,12,10,0.35) 100%)' }} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(240,237,230,0.08)' }}>
          <div className="p-[28px_32px]" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
            <div className="font-display text-[52px] font-normal text-cream leading-none mb-1.5" style={{ letterSpacing: '-2px' }}>3×</div>
            <div className="font-mono-brand text-[10px] tracking-[0.5px] leading-[1.5]" style={{ color: 'rgba(240,237,230,0.45)' }}>por ano<br />(a cada 4 meses)</div>
          </div>
          <div className="p-[28px_32px]">
            <div className="font-display text-[52px] font-normal text-cream leading-none mb-1.5" style={{ letterSpacing: '-2px' }}>1</div>
            <div className="font-mono-brand text-[10px] tracking-[0.5px] leading-[1.5]" style={{ color: 'rgba(240,237,230,0.45)' }}>cadeira por<br />membro / ano</div>
          </div>
        </div>

      </div>

      {/* Right column — 2×2 card grid */}
      <div
        className="grid grid-cols-2"
        style={{
          gap: '1px',
          background: 'rgba(240,237,230,0.07)',
          alignContent: 'stretch',
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-ink-2 transition-colors hover:bg-ink flex flex-col"
            style={{ padding: 'clamp(28px, 3vw, 44px) clamp(24px, 2.5vw, 36px)' }}
          >
            <div
              className="text-[15px] font-medium leading-[1.35] mb-3"
              style={{ color: 'rgba(240,237,230,0.9)' }}
            >
              {c.title}
            </div>
            <p
              className="text-[13px] font-light leading-[1.75]"
              style={{ color: 'rgba(240,237,230,0.7)' }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default EventoPresencialSection;
