import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';


export default function Header(){
  return (
    <>
    <header>
      <h1>
      Data Visualization
      </h1> 
    </header>
    <Router>
        <nav>
          <Link></Link>
        </nav>
      <Routes>
        <Route/>
      </Routes>
    </Router>
    </>
  )
}