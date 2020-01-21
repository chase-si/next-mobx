import { Component } from 'react'
import { observable, action } from 'mobx'
import { observer, inject  } from 'mobx-react'

import Title from '../../components/title'

@inject('homeStore')
@observer
class Home extends Component {
  render() {
    const { homeStore } = this.props
    return (
      <>
        <div>{homeStore.testData}</div>
        <Title />
        <button onClick={homeStore.addTestData}>
          add
        </button>
      </>
    )
  }
}

export default Home