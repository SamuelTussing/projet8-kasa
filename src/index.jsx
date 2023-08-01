import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Apropos from './pages/Apropos/'
import Logement from './pages/Logement'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error'
import './styles/sass/main.css'
import ErrorBoundary from './components/ErrorBoundary'
//import ErrorBoundary from './components/ErrorBoundary'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
           
			<Header />
            <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="*" element={<Error />} />
            </Routes>
            </ErrorBoundary>
            <Footer />
            
        </Router>
    </React.StrictMode>,
document.getElementById('root') 
)