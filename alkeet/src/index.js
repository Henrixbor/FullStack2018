import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (osat) => {
    return (
    <h1>{osat.kurssi}</h1>
    )
}


const Sisalto = ({ osat }) => (
    osat.map((osa) => <Osa osa={osa.nimi} tehtava={osa.tehtavia} />)
)

const Osa = ({osa, tehtava}) => (
     <p>{osa} {tehtava}</p>
)

const Yhteensa = ({ osat }) => (
    <p>yhteensä {osat.reduce((count, osa) => count + osa.tehtavia, 0)} tehtävää</p>
)


const App = () => {

    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      tehtavat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    }
  
  return (
    <div>
    <Otsikko kurssi={kurssi.nimi} />
    <Sisalto osat={kurssi.tehtavat} />
    <Yhteensa osat={kurssi.tehtavat} />
  </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)