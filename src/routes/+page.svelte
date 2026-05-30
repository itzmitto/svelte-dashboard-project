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
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card5">
          <h1>hallo</h1>
          <h2>Gemiddeld per categorie</h2>
        </div>
      </div>
    </div>
  </main>
</div>
