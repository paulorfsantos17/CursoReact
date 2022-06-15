import './App.css';
import Challenge from './components/Challenge';

import Events from './components/Events';
import FisrtComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <FisrtComponent></FisrtComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>
      <Challenge></Challenge>
    </div>
  );
}

export default App;
