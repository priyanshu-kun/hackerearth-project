import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CountryPage from './Pages/CountryPage/CountryPage';
import CardPage from './Pages/CardPage/CardPage';
import {Provider} from "react-redux"
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:country" element={<CountryPage />} />
          <Route path="/card/:id" element={<CardPage />} />
        </Routes>
      </BrowserRouter>,
    </React.StrictMode>
  </Provider>
)
