import { useState } from 'react';

const sections = [
  ['overview', 'Overview', '▦'],
  ['transactions', 'Transactions', '⇄'],
  ['rates', 'Exchange rates', '％'],
  ['cash', 'Cash & balances', '▤'],
  ['reports', 'Reports', '▥']
];

export default function App() {
  const [active, setActive] = useState('overview');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('RWF');
  const [amount, setAmount] = useState('100');
  const [menuOpen, setMenuOpen] = useState(false);
  const title = sections.find(item => item[0] === active)?.[1] || 'Overview';

  function content() {
    if (active !== 'overview') {
      const details = {
        transactions: ['⇄', 'No transactions recorded', 'Cashier transactions will appear here when the secure transaction workflow is connected.'],
        rates: ['％', 'No exchange rates yet', 'An administrator will configure the bureau-approved buy and sell rates here.'],
        cash: ['▤', 'Cash balances are not configured', 'Balances will be tracked separately for USD, EUR, RWF and each supported currency.'],
        reports: ['▥', 'Reports will appear here', 'Daily, weekly and monthly reports will be available after transactions and balances are connected.']
      }[active];
      return <section className="panel empty"><div className="empty-icon">{details[0]}</div><h2>{details[1]}</h2><p>{details[2]}</p></section>;
    }

    return <>
      <div className="welcome">
        <div><p className="eyebrow">BUREAU MANAGEMENT</p><h2>Welcome to your bureau workspace</h2><p className="muted">Your LATRANSPARENCE management system starts here.</p></div>
        <span className="status"><i></i> Setup in progress</span>
      </div>
      <div className="stats">
        <article className="stat"><span className="symbol blue">⇄</span><p>Total transactions</p><strong>—</strong><small>No records yet</small></article>
        <article className="stat"><span className="symbol gold">◈</span><p>Pending approvals</p><strong>—</strong><small>Manager approval queue</small></article>
        <article className="stat"><span className="symbol green">▤</span><p>Cash position</p><strong>—</strong><small>By currency</small></article>
        <article className="stat"><span className="symbol violet">▥</span><p>Today's performance</p><strong>—</strong><small>Daily summary</small></article>
      </div>
      <div className="columns">
        <section className="panel">
          <div className="panel-head"><div><p className="eyebrow">CUSTOMER TOOL</p><h3>Currency converter</h3></div><span className="tag">Preview</span></div>
          <p className="muted small">This is a layout preview. No exchange rate has been configured yet.</p>
          <label>You give</label>
          <div className="currency-field"><input value={amount} onChange={e => setAmount(e.target.value)} inputMode="decimal" /><select value={from} onChange={e => setFrom(e.target.value)}>{['USD','EUR','RWF','GBP','KES','UGX','CDF'].map(c => <option key={c}>{c}</option>)}</select></div>
          <div className="swap"><span>Exchange direction</span><button onClick={() => {setFrom(to);setTo(from)}}>⇅</button></div>
          <label>You receive</label>
          <div className="currency-field"><div className="result">{(Number(amount) || 0).toLocaleString()}</div><select value={to} onChange={e => setTo(e.target.value)}>{['RWF','USD','EUR','GBP','KES','UGX','CDF'].map(c => <option key={c}>{c}</option>)}</select></div>
          <p className="notice">Indicative preview only — the bureau rate has not been configured.</p>
        </section>
        <section className="panel">
          <div className="panel-head"><div><p className="eyebrow">NEXT STEPS</p><h3>Build your bureau system</h3></div><span className="tag">1 of 5</span></div>
          <div className="steps">
            <div className="step done"><b>✓</b><div><strong>Project workspace created</strong><small>Initial application structure is ready</small></div></div>
            <div className="step"><b>2</b><div><strong>Connect secure database</strong><small>Users, rates, transactions and balances</small></div></div>
            <div className="step"><b>3</b><div><strong>Set up staff roles</strong><small>Admin, Manager, Cashier and Accountant</small></div></div>
            <div className="step"><b>4</b><div><strong>Build transaction approvals</strong><small>Transactions above USD 5,000 need approval</small></div></div>
            <div className="step"><b>5</b><div><strong>Reports and audit history</strong><small>Daily balances, profit/loss and activity log</small></div></div>
          </div>
        </section>
      </div>
    </>;
  }

  return <div className="layout">
    <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
      <div className="brand"><div className="brand-mark">LT</div><div><b>LATRANSPARENCE</b><small>FOREX BUREAU</small></div></div>
      <p className="side-label">WORKSPACE</p>
      <nav>{sections.map(([id, label, icon]) => <button key={id} className={active === id ? 'nav active' : 'nav'} onClick={() => {setActive(id);setMenuOpen(false)}}><span>{icon}</span>{label}</button>)}</nav>
      <div className="side-bottom"><div className="help"><b>Need assistance?</b><p>Contact your system administrator for access and setup.</p></div><div className="user"><div className="avatar">A</div><div><b>Workspace preview</b><small>Not signed in</small></div></div></div>
    </aside>
    <main>
      <header><button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button><div className="crumb">Workspace <span>/</span> <b>{title}</b></div><span className="top-status"><i></i> Setup mode</span><div className="top-logo">LT</div></header>
      <div className="page"><div className="page-heading"><div><p className="eyebrow">LATRANSPARENCE FOREX BUREAU</p><h1>{title}</h1></div><button className="home" onClick={() => setActive('overview')}>⌂ Dashboard</button></div>{content()}<footer>© {new Date().getFullYear()} LATRANSPARENCE Forex Bureau <span>Secure bureau management workspace</span></footer></div>
    </main>
  </div>;
}
