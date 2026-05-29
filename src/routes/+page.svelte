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
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">Armin Arlert</a></li>
        <li><a href="/">Mark Reiss</a></li>
        <li><a href="/">Zeke Jeager</a></li>
        <li><a href="/">Alex Braun</a></li>
      </ul>
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
      </div>
    </div>
  </main>
</div>
