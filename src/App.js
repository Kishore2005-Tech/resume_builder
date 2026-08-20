import { useEffect } from 'react';

import './App.css';


import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </>
  );
}

export default App;
