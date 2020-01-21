import App from 'next/app'
import React from 'react'
import stores from '../stores'
import { Provider } from 'mobx-react'

class MyMobxApp extends App {
  // state = {
  //   store: new stores(),
  // }

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)

    return {
      ...appProps,
      wcs: 123,
    }
  }

  render() {
    const { Component, appProps } = this.props
    return (
      <Provider {...stores}>
        <Component {...appProps} />
      </Provider>
    )
  }
}
export default MyMobxApp