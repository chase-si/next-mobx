import { observable, action } from 'mobx'

class HomeStore {
  @observable testData = 1

  @action addTestData = () => {
    this.testData += 1
  }
}

export default HomeStore