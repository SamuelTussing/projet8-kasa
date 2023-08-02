import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/index'
import Apropos from './pages/Apropos/'
import Logement from './pages/Logement'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

import './styles/sass/main.css'
import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './pages/NotFound'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
           
			<Header />
            <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="logement/404" element={<NotFound/>}/>
                <Route path="*" element= { <Navigate replace to='logement/404' /> } />
            </Routes>
            </ErrorBoundary>
            <Footer />
            
        </Router>
    </React.StrictMode>,
document.getElementById('root') 
)