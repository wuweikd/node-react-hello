import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [2, 3, 4]
    }
  }
  static clickMe() {
    alert('点我')
  }
  render() {
    return(
      <div>
        <button onClick={App.clickMe.bind(this)}>点我</button>
        <ul>
          {
            this.state.list.map(item => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
