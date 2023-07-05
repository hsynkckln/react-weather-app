import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Container from './components/Container';

function App() {
  return (
    <WeatherProvider>
      <Container></Container>
    </WeatherProvider>
  );
}

export default App;
