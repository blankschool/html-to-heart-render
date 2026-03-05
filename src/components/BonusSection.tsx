const bonuses = [
  {
    rank: 'Top 1º',
    title: 'Caneta Montblanc',
    body: 'Um gesto simbólico para representar a sua decisão de se tornar protagonista da sua história contada.',
    highlight: true,
  },
  {
    rank: 'Top 3',
    title: 'Treinamento In Company presencial',
    body: 'Nossos fundadores passarão um dia na sua operação treinando o seu time.',
    highlight: false,
  },
  {
    rank: 'Top 10',
    title: '3 Eventos Presenciais',
    body: 'O programa inclui 1, mas este bônus te dá acesso aos demais eventos do primeiro ano.',
    highlight: false,
  },
];

const BonusSection = () => (
  <section
    className="relative py-[80px] px-6 md:py-[120px] md:px-[52px] overflow-hidden"
    style={{
      background: 'linear-gradient(160deg, #1c1c18 0%, #0f0f0d 40%, #1a1915 100%)',
      borderBottom: '1px solid rgba(240,237,230,0.08)',
    }}
  >
    {/* Radial glow behind cards */}
    <div
      className="absolute pointer-events-none"
      style={{
        inset: 0,
        background: 'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(212,200,154,0.09) 0%, transparent 70%)',
      }}
    />

    {/* Eyebrow */}
    <div
      className="relative z-10 font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6"
      style={{ color: 'rgba(212,200,154,0.8)' }}
    >
      <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(212,200,154,0.4)' }} />
      Bônus de Inauguração
    </div>

    {/* Heading */}
    <h2
      className="relative z-10 font-display font-normal leading-[0.96] text-cream mb-4"
      style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-2px' }}
    >
      Bônus de<br />
      <em className="italic" style={{ color: 'rgba(212,200,154,0.75)' }}>Inauguração.</em>
    </h2>
    <p
      className="relative z-10 text-[15px] font-light leading-[1.85] max-w-[520px] mb-16"
      style={{ color: 'rgba(240,237,230,0.92)' }}
    >
      As primeiras vagas garantem benefícios exclusivos além do programa. Quanto antes você decidir, mais você leva.
    </p>

    {/* Cards — floating, elevated */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      {bonuses.map((b, i) => (
        <div
          key={i}
          className="relative flex flex-col"
          style={{
            background: b.highlight
              ? 'linear-gradient(160deg, #faf9f3 0%, #f0ede6 100%)'
              : 'rgba(240,237,230,0.94)',
            border: b.highlight
              ? '1px solid rgba(212,200,154,0.6)'
              : '1px solid rgba(240,237,230,0.18)',
            boxShadow: b.highlight
              ? '0 40px 80px rgba(0,0,0,0.55), 0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,200,154,0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 32px 64px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)',
            padding: 'clamp(32px, 3.5vw, 52px) clamp(28px, 3vw, 44px)',
            transform: b.highlight ? 'translateY(-6px)' : 'none',
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2.5px]"
            style={{
              background: b.highlight
                ? 'linear-gradient(90deg, rgba(212,200,154,0.4) 0%, rgba(212,200,154,1) 50%, rgba(212,200,154,0.4) 100%)'
                : 'rgba(10,10,8,0.08)',
            }}
          />

          <div
            className="font-mono-brand text-[10px] tracking-[3px] uppercase mb-5"
            style={{ color: b.highlight ? 'rgba(140,120,60,0.9)' : 'rgba(10,10,8,0.4)' }}
          >
            {b.rank}
          </div>

          <div
            className="font-serif-body text-[22px] font-normal mb-4 leading-[1.2]"
            style={{ color: b.highlight ? '#0C0C0A' : 'rgba(10,10,8,0.88)' }}
          >
            {b.title}
          </div>

          <p
            className="text-[13px] font-light leading-[1.8]"
            style={{ color: b.highlight ? 'rgba(10,10,8,0.65)' : 'rgba(10,10,8,0.55)' }}
          >
            {b.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default BonusSection;
