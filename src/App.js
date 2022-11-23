import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import BasicTable from './components/BasicTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BasicTable />
    </div>
  )
}

export default App;
