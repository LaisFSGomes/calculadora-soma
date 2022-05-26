import Calculadora from '../Calculadora';
import Footer from '../Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Calculadora />
      <Footer
        info = '© 2022. Todos os direitos reservados. Github: LaisFSGomes'
      />
    </div>
  );
}

export default App;
