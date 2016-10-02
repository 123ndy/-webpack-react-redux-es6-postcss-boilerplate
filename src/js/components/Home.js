require('../../styles/styles.css')


import React from 'react'

const name = 'You are home, girl'
console.log(name)

import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'

@connect((store) => {
  return {
    user: store.user.user,
    txt: 'sdfdf'
  }
})
export default class Home extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchUser())
  }
  render() {
    console.log(this.props.user, this.props.txt)
    return <div><p>{name}</p><p>{this.props.user.name}</p></div>
  }
}
