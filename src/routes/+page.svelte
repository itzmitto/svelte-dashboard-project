<script>
  import "./page.css";
</script>

<svelte:head>
  <title>mijn website</title>
  <meta />
</svelte:head>

<div class="layout">
  <aside class="sidebar">
    <h2>Menu</h2>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Over</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </aside>

  <main class="main">
    <h1>Welkom</h1>
    <p>Dit is de main content van je website.</p>
  </main>
</div>