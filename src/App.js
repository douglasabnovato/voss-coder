import Simple from "./components/Simple/index";
import Card from "./components/Card/index";
import Description from "./components/Description/index";
import RedesSociais from "./components/RedesSociais/index";
import Stateful from "./components/Stateful/index";
import Todolist from "./components/Todolist/index";
import Converter from "./components/Converter/index";
import logo from "./assets/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Simple name="Douglas Antonio Braga Novato" />
        </p>
        <a
          className="App-link"
          href="https://linktr.ee/douglasabnovato"
          target="_blank"
          rel="noopener noreferrer"
        >
          @douglasabnovato
        </a>
      </header>
      <main className="App-Main">
        <div className="Cards">
          <Card titulo="#04 - Plugins" color="#2980B9 ">
            <Description
              description="biblioteca de markdown"
              fontWeight="900"
            />
            <Converter />
          </Card>
          <Card titulo="#03 - To Do List" color="#229954">
            <Description description="event delegation" fontWeight="900" />
            <Todolist />
          </Card>
          <Card titulo="#02 - Cronômetro" color="#E74C3C">
            <Description description="componente com estado" fontWeight="900" />
            <Stateful />
          </Card>
          <Card titulo="#01 - Redes Sociais" color="#8A2BE2">
            <Description description="componente simples" fontWeight="900" />
            <RedesSociais name="douglasabnovato" />
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
