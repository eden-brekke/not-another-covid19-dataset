import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Info from './info';

export default function Header({count}){
  return (
    <>
    <header>
      <h1>
      Data Visualization
      </h1> 
      <Info count={count}/>
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