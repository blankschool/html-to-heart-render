const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const items = [
  'Onboarding e diagnóstico completo',
  'Planejamento estratégico',
  'Assessment do time + trilha de desenvolvimento',
  '8 roteiros base escritos pela Blank',
  'Mentoria semanal | time e empresário',
  'Account manager dedicado — 120 dias',
  'Sessões com Rony, Renata e Erich',
  'Comunidade ativa do cohort',
  'Encontro presencial — mês 3',
  '2 revisões 1:1 com consultor',
  'Call de internalização de 3h',
];

const InvestimentoSection = () => (
  <section id="investimento" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Investimento</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Seu canal mais lucrativo<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>está disponível.</em><br />Basta ativá-lo.
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
        O Influentes tem início, meio e fim definidos. Ao encerramento, a empresa opera de forma autônoma. Para quem quiser continuar, existe o Membership pós-programa — uma opção, não uma obrigação.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] mt-14 bg-ink-2" style={{ border: '1px solid rgba(240,237,230,0.08)', borderTop: '2px solid hsl(42 33% 92%)' }}>
      <div className="p-[48px_40px] flex flex-col" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
        <div className="font-mono-brand text-[9px] tracking-[3px] uppercase mb-5" style={{ color: 'rgba(240,237,230,0.78)' }}>Programa Influentes</div>
        <div className="font-display text-[50px] font-normal text-cream leading-none mb-1.5" style={{ letterSpacing: '-2px' }}>R$ 100.000</div>
        <div className="font-mono-brand text-[11px] mb-9" style={{ color: 'rgba(240,237,230,0.78)' }}>Parcelamento disponível | Consulte condições</div>
        <a href="#" className="block w-full py-4 text-center font-mono-brand text-[11px] font-medium tracking-[2px] uppercase bg-cream text-ink no-underline transition-opacity hover:opacity-[0.88] mb-3">Enviar Aplicação</a>
        <div className="font-mono-brand text-[10px] text-center leading-[1.6]" style={{ color: 'rgba(240,237,230,0.60)' }}>Por candidatura · R$10M+ de faturamento · 30 vagas</div>
      </div>
      <div className="p-[48px_24px] md:p-[48px_44px] flex flex-col justify-between gap-7">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2.5 text-[12.5px] font-light py-2 items-baseline" style={{ color: 'rgba(240,237,230,0.93)', borderBottom: '1px solid rgba(240,237,230,0.04)' }}>
              <span className="font-mono-brand text-[10px] flex-shrink-0" style={{ color: 'rgba(240,237,230,0.78)' }}>✓</span>
              {item}
            </div>
          ))}
        </div>
        <div className="text-[12px] font-light leading-[1.7] pt-[18px]" style={{ color: 'rgba(240,237,230,0.78)', borderTop: '1px solid rgba(240,237,230,0.08)' }}>
          Membership pós-programa disponível para ex-alunos. Mais detalhes no encerramento.
        </div>
      </div>
    </div>
  </section>
);

export default InvestimentoSection;
