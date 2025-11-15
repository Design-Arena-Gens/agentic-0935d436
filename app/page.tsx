const highlights = [
  {
    title: 'Core Purpose',
    body:
      'Science seeks trustworthy explanations about natural phenomena by building theories that can be tested, refined, or replaced.',
  },
  {
    title: 'Method in Practice',
    body:
      'Scientists frame questions, form hypotheses, run reproducible experiments, analyze data, and invite peer scrutiny before accepting claims.',
  },
  {
    title: 'Self-Correcting Nature',
    body:
      'Because results must be repeatable and open to challenge, scientific knowledge steadily improves as new evidence appears.',
  },
];

export default function Page() {
  return (
    <main>
      <span className="pill">Understanding Science</span>
      <h1>What Is Science?</h1>
      <p>
        Science is the systematic pursuit of knowledge about the natural world through observation,
        measurement, and experiment. It relies on evidence that can be independently verified and on
        reasoning that links that evidence to broader explanations.
      </p>
      <p>
        At its heart, science combines curiosity with disciplined skepticism. Questions about how
        the universe works become testable hypotheses; data are gathered with care; conclusions are
        accepted only when they withstand scrutiny from other investigators. The process never stops
        — new observations can always refine or replace earlier ideas.
      </p>
      <dl>
        <div>
          <dt>Key Elements</dt>
          <dd>Empirical evidence, logical reasoning, and transparent communication of results.</dd>
        </div>
        <div>
          <dt>Scientific Method</dt>
          <dd>Observe → question → hypothesize → experiment → analyze → conclude → replicate.</dd>
        </div>
        <div>
          <dt>Goal</dt>
          <dd>Develop reliable, predictive models of how nature behaves and why.</dd>
        </div>
      </dl>
      <section className="card-grid" aria-label="Highlights about science">
        {highlights.map(({ title, body }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <p className="footer-note">
        Looking to dive deeper? Explore introductory courses in physics, chemistry, biology, or read
        the free{' '}
        <a href="https://plato.stanford.edu/entries/science/" target="_blank" rel="noreferrer">
          Stanford Encyclopedia of Philosophy entry on the philosophy of science
        </a>
        .
      </p>
    </main>
  );
}

