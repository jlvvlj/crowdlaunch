import React, { Component } from 'react';
import Footer from './components/Layout/Footer';
import Saas from './pages/Saas/Saas'
import Topbar from './components/Layout/Topbar'
import Pricing from './components/Shared/Pricing'

// Import Css
import './Apps.scss';
import './assets/css/materialdesignicons.min.css';
import './assets/css/colors/default.css';



class App extends Component {
  render () {
    return (
      <div>
        <Topbar />
        <Saas />
        <div className="mt-8">
          <span>
            <Pricing />
          </span>
        </div>
        <Footer />
      </div>
    );
}
}

export default App;