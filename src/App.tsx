import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./components/style.css";

function App() {
  return (
    <>
      <Header/>
      
      <div className="cardList">
        <Card 
          title="Regras de Conduta" 
          conteudo="Não obstante, a constante divulgação das informações 
                    auxilia a preparação e a composição das regras de conduta 
                    normativas."
          image="./src/components/img/relatorio-de-noticias.png"/>

        <Card 
          title="Metas Propostas" 
          conteudo="Por conseguinte, o entendimento das metas propostas não 
                    pode mais se dissociar dos níveis de motivação departamental."
          image="./src/components/img/noticias.png"/>

        <Card 
          title="Orçamento Setorial" 
          conteudo="Desta maneira, o acompanhamento das preferências de consumo acarreta 
                    um processo de reformulação e modernização do orçamento setorial."
          image="./src/components/img/noticiasI.png"/>
      </div>

      <Footer/>
    </>
  )
}

export default App
