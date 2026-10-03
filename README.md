* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --bg-alt: #111d32;
  --card: rgba(13, 24, 39, 0.94);
  --card-soft: rgba(19, 32, 52, 0.9);
  --border: rgba(255, 255, 255, 0.08);
  --text: #eaf2ff;
  --muted: #a8b7d0;
  --primary: #4cc9f0;
  --green: #23d18b;
  --red: #ff6b6b;
  --amber: #f4c95d;
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.32);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Cairo', sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(76, 201, 240, 0.18), transparent 30%),
    linear-gradient(145deg, var(--bg) 0%, #0a162d 35%, #091220 100%);
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  padding: 32px 0 56px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(12, 22, 35, 0.8);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 18px;
  padding: 10px 12px;
}

.search-box input {
  width: 190px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 1rem;
  outline: none;
}

.search-box button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #5a7dff);
  color: #071320;
  padding: 12px 18px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.search-box button:hover {
  transform: translateY(-1px);
}

.dashboard {
  display: grid;
  gap: 24px;
}

.card {
  background: linear-gradient(180deg, rgba(17, 28, 46, 0.94), rgba(9, 18, 31, 0.9));
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.hero {
  padding: 26px 26px 20px;
}

.market-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 0.76rem;
  border-radius: 999px;
  font-weight: 700;
  background: rgba(35, 209, 139, 0.12);
  color: var(--green);
  border: 1px solid rgba(35, 209, 139, 0.28);
}

.label {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2, h3 {
  margin: 0;
}

.price-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

#lastPrice,
#dailyChange,
#confidenceScore,
#trendText,
#supportLevel,
#resistanceLevel {
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-weight: 800;
}

.signal {
  display: inline-flex;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 800;
}

.signal.bullish {
  background: rgba(35, 209, 139, 0.12);
  color: var(--green);
}

.signal.bearish {
  background: rgba(255, 107, 107, 0.12);
  color: var(--red);
}

.signal.neutral {
  background: rgba(244, 201, 93, 0.12);
  color: var(--amber);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.metric {
  padding: 18px 20px;
}

.insights-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 22px;
}

.analysis-panel {
  padding: 24px 22px;
}

.panel-head {
  margin-bottom: 18px;
}

.panel-head h3 {
  font-size: 1.2rem;
}

.indicator-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.indicator-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-radius: 14px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.indicator-list span {
  color: var(--muted);
}

.summary-text {
  margin: 0 0 18px;
  color: var(--text);
  line-height: 1.8;
  font-size: 1rem;
}

.signal-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

#forecastText {
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .topbar,
  .market-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid,
  .insights-grid,
  .price-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 22px, 1200px);
  }

  .search-box {
    width: 100%;
    justify-content: space-between;
  }

  .search-box input {
    width: 100%;
  }

  .stats-grid,
  .insights-grid,
  .price-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    gap: 16px;
  }
}

