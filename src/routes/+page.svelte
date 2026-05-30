<script>
  import "./page.css";
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
  </main>
</div>
