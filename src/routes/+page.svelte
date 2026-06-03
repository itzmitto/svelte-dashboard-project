<script>
  import { onMount } from "svelte";
  import "./page.css";
  import "./maincard.css";
  import "./animation.css";
  import "./maincard2.css";
  import "./trend-card.css";

  const CATS = ["Huur", "Eten", "Abonnementen", "Transport"];
  const COLS = ["#0F172A", "#A3E635", "#38BDF8", "#F59E0B"];
  const VALS = [3700, 1460, 365, 2430];

  let canvas;

  onMount(() => {
    new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: CATS,
        datasets: [
          {
            data: VALS,
            backgroundColor: COLS,
            borderWidth: 2,
            borderColor: "#fff",
            hoverOffset: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "62%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) =>
                ` ${ctx.label}: €${ctx.parsed.toLocaleString("nl-NL")}`,
            },
          },
        },
      },
    });
  });
</script>

<svelte:head>
  <title>mijn website</title>
  <meta />
</svelte:head>

<div class="layout">
  <aside class="sidebar">
    <h2>svelte-project</h2>

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
          <li><a href="/">Armin Arlert</a></li>
          <li><a href="/">Mark Reiss</a></li>
          <li><a href="/">Zeke Jeager</a></li>
          <li><a href="/">Alex Braun</a></li>
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
          <h2>€ 14.800</h2>
          <h3>4 personen gecombineerd</h3>
        </div>

        <div class="card">
          <h1>Totaal uitgaven</h1>
          <h2>€ 9.640</h2>
          <h3>65.1% van salaris</h3>
        </div>

        <div class="card">
          <h1>Netto over</h1>
          <h2>€ 5.160</h2>
          <h3>34.9% spaarquote</h3>
        </div>

        <div class="card">
          <h1>Gem. per persoon</h1>
          <h2>€ 1.290</h2>
          <h3>netto beschikbaar</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Personen</h1>

      <div class="cards">
        <div class="card">
          <h2>Armin Arlert</h2>
          <p>Salaris: € 3.800</p>
          <p>Uitgaven: € 2.400</p>
          <p>Over: € 1.400</p>
        </div>

        <div class="card">
          <h2>Mark Reiss</h2>
          <p>Salaris: € 3.600</p>
          <p>Uitgaven: € 2.100</p>
          <p>Over: € 1.500</p>
        </div>

        <div class="card">
          <h2>Zeke Jeager</h2>
          <p>Salaris: € 4.100</p>
          <p>Uitgaven: € 2.800</p>
          <p>Over: € 1.300</p>
        </div>

        <div class="card">
          <h2>Alex Braun</h2>
          <p>Salaris: € 3.300</p>
          <p>Uitgaven: € 2.340</p>
          <p>Over: € 960</p>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Analyse</h1>

      <div class="analyse-cards">
        <div class="maincard">
          <h2 class="chart-title">Salaris vs Uitgaven per persoon</h2>

          <div class="legend">
            <span class="legend-item"
              ><span class="dot salaris"></span> Salaris</span
            >
            <span class="legend-item"
              ><span class="dot uitgaven"></span> Uitgaven</span
            >
            <span class="legend-item"
              ><span class="dot netto"></span> Netto</span
            >
          </div>

          <div class="chart-area">
            <div class="y-axis">
              <p>€4.500</p>
              <p>€4.000</p>
              <p>€3.500</p>
              <p>€3.000</p>
              <p>€2.500</p>
              <p>€2.000</p>
              <p>€1.500</p>
              <p>€1.000</p>
              <p>€500</p>
              <p>€0</p>
            </div>

            <div class="plot">
              <div class="grid-line" style="bottom: 100%;"></div>
              <div class="grid-line" style="bottom: 88.9%;"></div>
              <div class="grid-line" style="bottom: 77.8%;"></div>
              <div class="grid-line" style="bottom: 66.7%;"></div>
              <div class="grid-line" style="bottom: 55.6%;"></div>
              <div class="grid-line" style="bottom: 44.4%;"></div>
              <div class="grid-line" style="bottom: 33.3%;"></div>
              <div class="grid-line" style="bottom: 22.2%;"></div>
              <div class="grid-line" style="bottom: 11.1%;"></div>
              <div class="grid-line" style="bottom: 0%;"></div>

              <div class="group">
                <div class="bar salaris-bar" style="height: 90.9%;"></div>
                <div class="bar uitgaven-bar" style="height: 57.8%;"></div>
                <div class="bar netto-bar" style="height: 33.3%;"></div>
                <p class="x-label">Armin Arlert</p>
              </div>

              <div class="group">
                <div class="bar salaris-bar" style="height: 77.8%;"></div>
                <div class="bar uitgaven-bar" style="height: 55.6%;"></div>
                <div class="bar netto-bar" style="height: 22.2%;"></div>
                <p class="x-label">Mark Reiss</p>
              </div>

              <div class="group">
                <div class="bar salaris-bar" style="height: 82.2%;"></div>
                <div class="bar uitgaven-bar" style="height: 53.3%;"></div>
                <div class="bar netto-bar" style="height: 31.1%;"></div>
                <p class="x-label">Zeke Jeager</p>
              </div>

              <div class="group">
                <div class="bar salaris-bar" style="height: 68.9%;"></div>
                <div class="bar uitgaven-bar" style="height: 42.2%;"></div>
                <div class="bar netto-bar" style="height: 26.7%;"></div>
                <p class="x-label">Alex Braun</p>
              </div>
            </div>
          </div>
        </div>

        <div class="maincard2">
          <h2>Uitgaven totaal</h2>

          <div class="legend-col">
            {#each CATS as cat, i}
              <span class="leg-item">
                <span class="leg-dot" style="background: {COLS[i]}"></span>
                {cat}
                <strong>€{VALS[i].toLocaleString("nl-NL")}</strong>
              </span>
            {/each}
          </div>

          <div class="canvas-wrap">
            <canvas bind:this={canvas}></canvas>
          </div>
        </div>

        
        </div>
      </div>
      <div class="container">
          <div class="trend-card">
            <h1>Trends</h1>
          </div>
    </div>
    
  </main>
</div>
