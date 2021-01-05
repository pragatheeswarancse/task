import Sidebar from './components/sidebar';
import Power from './components/power';
import Form from './components/form';
import Card from './components/card';
import Platform from './components/platform'
import './App.css';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Power />
        <Form />
        <Card />
      </div>
      <Platform />
    </div>
  );
}

export default App;
