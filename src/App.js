import Simple from "./components/Simple/index";
import Card from "./components/Card/index";
import Description from "./components/Description/index";
import RedesSociais from "./components/RedesSociais/index";
import Stateful from "./components/Stateful/index";
import Todolist from "./components/Todolist/index";
import Converter from "./components/Converter/index";
import LikeButton from "./components/LikeButton/index";
import Toolchains from "./components/Toolchains";
import ListItems from "./components/ListItems";
import FormatName from "./components/FormatName";
import Clock from "./components/Clock";

import logo from "./assets/logo.svg";
import "./styles/App.css";
import Details from "./components/Details";

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
          <Card titulo="#11 - Props" color="#641E16">
          <Details titulo="Props" detalhes="são somente leitura. Um componente como uma função ou uma classe, nunca deve modificar seus próprios props." />
          </Card>
          <Card titulo="#10 - Componentes" color="#A6ACAF">
            <Details titulo="Components" detalhes="Permitem dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente." />
          </Card>
          <Card titulo="#09 - Renderizando um Elemento no DOM" color="#C39BD3">
            <Description description="Timer" fontWeight="900" />
            <Clock />
          </Card>
          <Card titulo="#08 - Formatar Nomes" color="#C0392B">
            <Description description="Introduzir JSX" fontWeight="900" />
            <FormatName />
          </Card>
          <Card titulo="#07 - Inicializar Projeto React" color="#F39C12">
            <Toolchains title="create react app" />
            <ListItems
              item1="npx create-react-app my-app"
              item2="cd my-app"
              item3="npm start"
              item1Description="criar o projeto com a estrutura inicial"
              item2Description="entrar na pasta do projeto criada"
              item3Description="iniciar o projeto"
              fontWeight="900"
            />
          </Card>
          <Card titulo="#06 - Toolchains" color="#F1C40F">
            <Toolchains title="Ferramentas" />
            <ListItems
              item1="create react app"
              item2="next.js"
              item3="gatsby"
              item1Description="para criar um site SPA"
              item2Description="para criar um site renderizado no servidor (ssr)"
              item3Description="para site estático orientado a conteúdo"
              fontWeight="900"
            />
          </Card>
          <Card titulo="#05 - Like Buttons" color="#921388">
            <Description description="Um botão de likes" fontWeight="900" />
            <LikeButton />
          </Card>
          <Card titulo="#04 - Plugins" color="#2980B9">
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
