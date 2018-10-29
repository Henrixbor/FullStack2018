import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
    <Otsikko kurssi={kurssi} />
    <Sisalto osat={osat} />
    <Yhteensa osat={osat} />
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)