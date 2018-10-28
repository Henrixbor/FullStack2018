import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const now = new Date()
    const a = 5
    const b = 20
    const t = [1, -1, 3]

    t.push(5)
    
    console.log(t.length)  // tulostuu 4
    console.log(t[1])      // tulostuu -1
    
    t.forEach((luku) => {
      console.log(luku)    // tulostuu 1, -1, 3 ja 5 omille riveilleen
    })
    
    t[6] = 99
    
    console.log(t)
    return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a + b}</p>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))


/*
Nää olis voinu poistaa

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/