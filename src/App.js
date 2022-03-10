import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo, PageThree, PageFour } from './pages';

function App() {
  return (
      <Routes>
        <Route exact path="/" element ={ <PageOne/>} >
          <Route path="/pagetwo" element={<PageTwo/>} />
          <Route path="/pagethree" element={ <PageThree/> } />
          <Route path="/pagefour" element={ <PageFour/>} />
          </Route>
      </Routes>
  );
}

export default App;
