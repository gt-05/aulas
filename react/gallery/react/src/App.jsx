
import HomePage from "./pages/HomePage"
import ProductListingPage from "./pages/ProductListingPage"
import { useState } from "react"

function App() {

  const [page, setPage] = useState();

  if(page === "pagina1") {
    return <h1>Pagina 1</h1>
  }

  if(page === "pagina2") {
    return <h1>Pagina 2</h1>
  }

  return (
    <div>
      <div>
        <a href="#" onClick={event => setPage('pagina1')}>Pagina 1</a>
      </div>
      <div>
        <a href="#" onClick={event => setPage('pagina2')}>Pagina 2</a>
      </div>
      <div>
        <a href="#" onClick={event => setPage('pagina3')}>Pagina 2</a>
      </div>
      <hr />
      <div>
        conteudo 
      </div>
    </div>
    
  )
}

export default App
