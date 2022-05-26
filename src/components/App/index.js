import Calculadora from '../Calculadora';
import Footer from '../Footer';
import './style.css';

function App({icon, title, footer}) {
  return (
    <div className="App">
      <Calculadora 
        icon = {icon}
        title = {title} 
      />
      <Footer
        info = {footer}
      />
    </div>
  );
}

export default App;
