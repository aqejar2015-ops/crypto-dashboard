<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crypto Signal Dashboard</title>
    <meta
      name="description"
      content="Cryptocurrency dashboard with multi-indicator technical analysis and directional signal"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./src/style.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div>
          <p class="eyebrow">Crypto Market Intelligence</p>
          <h1>Crypto Direction Dashboard</h1>
        </div>
        <div class="search-box">
          <input id="symbolInput" type="text" value="BTCUSDT" aria-label="Crypto symbol" />
          <button id="analyzeBtn">Analyze</button>
        </div>
      </header>

      <main class="dashboard">
        <section class="hero card">
          <div class="market-meta">
            <span class="badge">Live</span>
            <div>
              <p class="label">Symbol</p>
              <h2 id="symbolLabel">BTCUSDT</h2>
            </div>
          </div>

          <div class="price-grid">
            <div>
              <p class="label">Last Price</p>
              <h3 id="lastPrice">--</h3>
            </div>
            <div>
              <p class="label">24h Change</p>
              <h3 id="dailyChange">--</h3>
            </div>
            <div>
              <p class="label">Direction</p>
              <h3 id="directionBadge" class="signal neutral">Neutral</h3>
            </div>
          </div>
        </section>

        <section class="stats-grid">
          <article class="card metric">
            <p class="label">Confidence</p>
            <h3 id="confidenceScore">--</h3>
          </article>
          <article class="card metric">
            <p class="label">Trend</p>
            <h3 id="trendText">--</h3>
          </article>
          <article class="card metric">
            <p class="label">Support</p>
            <h3 id="supportLevel">--</h3>
          </article>
          <article class="card metric">
            <p class="label">Resistance</p>
            <h3 id="resistanceLevel">--</h3>
          </article>
        </section>

        <section class="insights-grid">
          <article class="card analysis-panel">
            <div class="panel-head">
              <h3>Technical Analysis</h3>
            </div>
            <ul id="indicatorList" class="indicator-list"></ul>
          </article>

          <article class="card analysis-panel">
            <div class="panel-head">
              <h3>Short-Term Outlook</h3>
            </div>
            <p id="summaryText" class="summary-text">
              Loading analysis...
            </p>
            <div class="signal-box">
              <span class="label">Expected next move</span>
              <strong id="forecastText">Waiting for data...</strong>
            </div>
          </article>
        </section>
      </main>
    </div>

    <script type="module" src="./src/main.js"></script>
  </body>
</html>
