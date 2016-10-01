require('./styles/styles.css')

import React from 'react'

const name = 'You are home, girl'
console.log(name)

export default class Home extends React.Component {
  render() {
    return <div><p>{name}</p></div>
  }
}
