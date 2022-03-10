import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { PageOne, PageTwo, PageThree, PageFour } from './pages';

function App() {
  return (
         <Switch>
            <Route exact path="/" component={ PageOne } />
            <Route path="/pagetwo" component={ PageTwo }/>
            <Route path="/pagethree" component={ PageThree } />
            <Route path="/pagefour" component={PageFour} />
        </Switch>
  );
}

export default App;
