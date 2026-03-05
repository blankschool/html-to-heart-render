const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.5)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

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
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <Eyebrow>Bônus de Inauguração</Eyebrow>
    <h2 className="font-display font-normal leading-[0.96] text-cream mb-4" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-2px' }}>
      Bônus de Inauguração<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>Exclusivos Turma 01</em>
    </h2>
    <p className="text-[15px] font-light leading-[1.85] max-w-[520px] mb-14" style={{ color: 'rgba(240,237,230,0.82)' }}>
      As primeiras vagas garantem benefícios exclusivos além do programa. Quanto antes você decidir, mais você leva.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {bonuses.map((b, i) => (
        <div key={i} className="bg-ink p-[40px_32px] relative transition-colors hover:bg-ink-2">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: b.highlight ? 'rgba(212,200,154,0.6)' : 'rgba(240,237,230,0.15)' }} />
          <div className="font-mono-brand text-[10px] tracking-[3px] uppercase mb-4" style={{ color: b.highlight ? 'rgba(212,200,154,0.7)' : 'rgba(240,237,230,0.45)' }}>{b.rank}</div>
          <div className="font-serif-body text-[20px] font-normal text-cream mb-3">{b.title}</div>
          <p className="text-[13px] font-light leading-[1.8]" style={{ color: 'rgba(240,237,230,0.82)' }}>{b.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BonusSection;
