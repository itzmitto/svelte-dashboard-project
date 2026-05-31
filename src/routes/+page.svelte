<script>
  import { onMount } from 'svelte';
  import { personen } from '$lib/data/personen';
  import "./page.css";

  onMount(() => {
    import('chart.js/auto').then(({ default: Chart }) => {
      const ctx = document.getElementById('salaryChart');

      const labels = personen.map(p => p.naam.split(' ')[0]);
      const salaris = personen.map(p => p.maandelijks_inkomen);
      const uitgaven = personen.map(p => Object.values(p.maandelijkse_kosten).reduce((a, b) => a + b, 0));
      const over = personen.map((p, i) => salaris[i] - uitgaven[i]);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Inkomen',
              data: salaris,
              backgroundColor: '#a3e635',
              borderRadius: 5,
              borderSkipped: false
            },
            {
              label: 'Uitgaven',
              data: uitgaven,
              backgroundColor: '#0f172a',
              borderRadius: 5,
              borderSkipped: false
            },
            {
              label: 'Over',
              data: over,
              backgroundColor: '#22c55e',
              borderRadius: 5,
              borderSkipped: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              ticks: { color: '#94a3b8', font: { size: 12, weight: '600' } },
              grid: { color: 'rgba(15,23,42,0.06)' },
              border: { color: 'transparent' }
            },
            y: {
              ticks: {
                color: '#94a3b8',
                font: { size: 11 },
                callback: v => '€' + v.toLocaleString('nl-NL')
              },
              grid: { color: 'rgba(15,23,42,0.06)' },
              border: { color: 'transparent' }
            }
          }
        }
      });
    });
  });

  const totaalInkomen = personen.reduce((sum, p) => sum + p.maandelijks_inkomen, 0);
  const totaalUitgaven = personen.reduce((sum, p) =>
    sum + Object.values(p.maandelijkse_kosten).reduce((a, b) => a + b, 0), 0);
  const totaalOver = totaalInkomen - totaalUitgaven;
  const gemPerPersoon = Math.round(totaalOver / personen.length);
</script>

<svelte:head>
  <title>mijn website</title>
  <meta />
</svelte:head>

<div class="layout">
  <aside class="sidebar">
    <h2>Sidebar</h2>

    <nav>
      <div class="menu-section">
        <h3>Overzicht</h3>
        <ul>
          <li><a href="/">Dashboard</a></li>
        </ul>
      </div>

      <div class="menu-section">
        <h3>Personen</h3>
        <ul>
          {#each personen as persoon}
            <li><a href="/">{persoon.naam}</a></li>
          {/each}
        </ul>
      </div>
    </nav>
  </aside>

  <main class="main">
    <div class="container">
      <h1>Dashboard</h1>

      <div class="cards">
        <div class="card1">
          <h1>Totaal salaris</h1>
          <h2>€ {totaalInkomen.toLocaleString('nl-NL')}</h2>
          <h3>{personen.length} personen gecombineerd</h3>
        </div>

        <div class="card">
          <h1>Totaal uitgaven</h1>
          <h2>€ {totaalUitgaven.toLocaleString('nl-NL')}</h2>
          <h3>{Math.round(totaalUitgaven / totaalInkomen * 100)}% van salaris</h3>
        </div>

        <div class="card">
          <h1>Netto over</h1>
          <h2>€ {totaalOver.toLocaleString('nl-NL')}</h2>
          <h3>{Math.round(totaalOver / totaalInkomen * 100)}% spaarquote</h3>
        </div>

        <div class="card">
          <h1>Gem. per persoon</h1>
          <h2>€ {gemPerPersoon.toLocaleString('nl-NL')}</h2>
          <h3>netto beschikbaar</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Personen</h1>

      <div class="cards">
        {#each personen as persoon}
          {@const uitgaven = Object.values(persoon.maandelijkse_kosten).reduce((a, b) => a + b, 0)}
          {@const over = persoon.maandelijks_inkomen - uitgaven}
          <div class="card">
            <h2>{persoon.naam}</h2>
            <p>Salaris: € {persoon.maandelijks_inkomen.toLocaleString('nl-NL')}</p>
            <p>Uitgaven: € {uitgaven.toLocaleString('nl-NL')}</p>
            <p>Over: € {over.toLocaleString('nl-NL')}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="container">
      <h1>Analyse</h1>

      <div class="analyse-cards">
        <div class="maincard">
          <h2 class="maincard-title">Salaris vs Uitgaven per persoon</h2>
          <div class="maincard-legend">
            <span class="legend-item">
              <span class="legend-dot" style="background:#a3e635"></span>Inkomen
            </span>
            <span class="legend-item">
              <span class="legend-dot" style="background:#0f172a"></span>Uitgaven
            </span>
            <span class="legend-item">
              <span class="legend-dot" style="background:#22c55e"></span>Over
            </span>
          </div>
          <div class="maincard-chart">
            <canvas id="salaryChart"></canvas>
          </div>
        </div>

        <div class="maincard2">
          <h2>Uitgaven totaal</h2>
          {#each ['huur','boodschappen','transport','abonnementen','overig'] as cat}
            {@const totaal = personen.reduce((sum, p) => sum + p.maandelijkse_kosten[cat], 0)}
            <p>{cat.charAt(0).toUpperCase() + cat.slice(1)}: € {totaal.toLocaleString('nl-NL')}</p>
          {/each}
        </div>
      </div>
    </div>
  </main>
</div>