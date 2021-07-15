import React, { Component } from "react";
import Movies from "./Services/MoviesApi";
import Series from "./Services/SeriesApi";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const ContainerMax = styled.section`
height:100vh;
width:100%;
`;

const BoxHeader = styled.div`
 background-color: black;
 height:30%;

`;

const BoxFilme = styled.div`
 
`;

const BoxSerie = styled.div`
 
`;


const TitleFilme = styled.h2`
 
`;

const OverviewTitle = styled.h3`
 
`;

const OverviewParagraf = styled.p`
 
`;

const Voto  = styled.h4`
 
`;

const TitleSerie = styled.h2`
 
`;


class App extends Component {
  state = {
    filmes: [],
    series: []
  };

  componentDidMount() {
    this.getMovies();
    this.getSeries();
  }

  getMovies = async () => {
    const response = await Movies.get();
    console.log("Filmes", response.data.results);

    this.setState({
      filmes: response.data.results
    });
  };

  getSeries = async () => {
    const response = await Series.get();
    console.log("Series", response.data.results);

    this.setState({
      series: response.data.results
    });
  };

  render() {
    return (
      <ContainerMax>
        <BoxHeader>
          <h1>LuiFlix</h1>
          <input />
          <button>BUSCAR</button>
        </BoxHeader>

        <BoxFilme>
          <h1>FILMES</h1>
          {this.state.filmes.map((item, id) => (
            <div key={id}>


              <TitleFilme>{item.title}</TitleFilme>

              {item.backdrop_path}

              <OverviewTitle>Sinopse:</OverviewTitle>

              <OverviewParagraf>{item.overview}</OverviewParagraf>

              <Voto>Vote: {item.vote_average}</Voto>

            </div>
          ))}
        </BoxFilme>



        <BoxSerie>
          <h1>SERIES</h1>
          {this.state.series.map((item, id) => (
            <div key={id}>


              <TitleSerie>{item.name}</TitleSerie>

              {item.backdrop_path}

              <OverviewTitle>Sinopse:</OverviewTitle>


              <OverviewParagraf>{item.overview}</OverviewParagraf>


              <Voto>Vote: {item.vote_average}</Voto>
            </div>
          ))}
        </BoxSerie>
      </ContainerMax>
    );
  }
}
export default App;
