import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';


import Main from './components/Main';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        
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
