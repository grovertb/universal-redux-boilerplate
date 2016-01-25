import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/counterActions'

import Counter from '../components/Counter.jsx'

@connect(state => state)
export default class CounterContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { dispatch, counterStore } = this.props

    return (
      <Counter
        counterStore={counterStore}
        {...bindActionCreators(counterActions, dispatch)}/>
    )
  }
}
