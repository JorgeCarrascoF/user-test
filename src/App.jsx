import './App.css'
import ErrorButton from './components/ErrorButton'

function App() {

  return (
    <>
      <h1>User Test</h1>
        <p>Genera errores en código (por ejemplo en App.js o main.jsx) para probar la captura en Buggle.</p>
      <div className="card">
        <ErrorButton />
      </div>
    </>
  )
}

export default App
