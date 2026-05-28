<svelte:head>
  <title>mijn website</title>
  <meta
    name="description"
    content="Een simpele startpagina gemaakt met SvelteKit"
  />
</svelte:head>

<div class="page">
  <section class="hero">
    <h1>hallo</h1>
    <p>Welkom op mijn nieuwe SvelteKit website</p>

    <div class="buttons">
      <a href="/about" class="primary">Meer info</a>
      <a href="/contact" class="secondary">Contact</a>
    </div>
  </section>

  <section class="features">
    <div class="card">
      <h2>SNEL</h2>
      <p>CARD 1</p>
    </div>

    <div class="card">
      <h2>SNEL</h2>
      <p>CARD 2</p>
    </div>

    <div class="card">
      <h2>SNEL</h2>
      <p>Makkelijk uit te breiden met nieuwe pagina’s en functies.</p>
    </div>
  </section>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
  }

  .page {
    min-height: 100vh;
    padding: 2rem;
  }

  .hero {
    text-align: center;
    padding: 6rem 1rem 4rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    color: #cbd5e1;
    font-size: 1.2rem;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .buttons a {
    text-decoration: none;
    padding: 0.9rem 1.5rem;
    border-radius: 12px;
    font-weight: bold;
    transition: 0.2s ease;
  }

  .primary {
    background: #3b82f6;
    color: white;
  }

  .primary:hover {
    background: #2563eb;
  }

  .secondary {
    border: 1px solid #475569;
    color: white;
  }

  .secondary:hover {
    background: #1e293b;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 4rem;
  }

  .card {
    background: #1e293b;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid #334155;
  }

  .card h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
</style>
