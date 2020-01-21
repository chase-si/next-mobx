import { useState, Component } from 'react'
import { NextPage } from 'next'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import Button from '../../components/button'

// interface Props {
//   getInitialProps: 
// }

@observer
class Home extends Component {
// const Home: NextPage<Props> = () => {
  static getInitialProps = async (x) => {
    const testInitialProps = 'test'
    return { testInitialProps }
  }

  @observable x = 1

  @action addTestData = () => {
    this.x ++;
  }
  render() {
    return (
      <div>
        <div>
          HomePage: {this.x}
          <button onClick={this.addTestData} >
            addTestData
          </button>
          <Button />
          <Button />
        </div>
      </div>
    )
  }
}

// Home.getInitialProps = async (x) => {
//   const testInitialProps = 'test'
//   return { testInitialProps }
// }

export default Home