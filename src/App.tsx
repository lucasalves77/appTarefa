import Menu from "./data/interfaces/Menu";
import Conteudo from "./data/interfaces/Conteudo";
import Header from "./data/interfaces/Header";

function App() {
  
  return (
    <>
      <div className=" bg-bgBack text-white">
        <div className="h-100 fixed">
          <Menu/>
        </div>
        <div className="pl-64">
          <Header/>
          <Conteudo/>
        </div>
      </div>
    </>
  )
}

export default App
