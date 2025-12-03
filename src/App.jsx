import './App.css'

function App() {
  return (
    <main className="container">
      <h1>Tokij Frontend Labs</h1>
      <p className="lead">Choose one of the labs below:</p>
      <section className="grid">
        <a className="card" href={import.meta.env.BASE_URL + 'lab1/index.html'}>
          <strong>Lab 1</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Початкові елементи HTML</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab2/index.html'}>
          <strong>Lab 2</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Створення зображень в CSS-3</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab3/index.html'}>
          <strong>Lab 3</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Блочна верстка</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab4/index.html'}>
          <strong>Lab 4</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Об'єкти і сценарії</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab5/index.html'}>
          <strong>Lab 5</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Події і регулярні вирази у JavaScript</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab6/index.html'}>
          <strong>Lab 6</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>JSON та отримання даних з API</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab7/index.html'}>
          <strong>Lab 7</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>React components та props</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab8/index.html'}>
          <strong>Lab 8</strong>
          <hr style={{ width: '100%', border: '1px solid #ccc'}} />
          <small>Верстка проєкту за зразком</small>
        </a>
      </section>
      <footer>© 2025 Tokij Frontend Labs</footer>
    </main>
  )
}

export default App
