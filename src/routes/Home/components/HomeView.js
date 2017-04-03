import React from 'react'
import { connect } from 'react-redux'
import InitiativePanel from '../../../components/InitiativePanel'
import './HomeView.scss'

const mapStateToProps = (state) => ({
  counter : state.counter
})

const mapDispatchToProps = {
}

export const HomeView = (props) => (
  <div className="home row">
    <InitiativePanel />
    <div className="col-md-7">
    {props.counter}
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
