import './App.css';
import Container from './components/Container';
import { CityProvider } from './contexts/CityContext';
import { MainProvider } from './contexts/MainContext';

function App() {
  return (
    <CityProvider>
      <MainProvider>
        <Container />
      </MainProvider>
    </CityProvider>
  );
}

export default App;
