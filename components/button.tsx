
import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

interface Props {
  name?: string
}

const Button: NextPage<Props> = () =>  {
  const [clickTimes, setClickTimes] = useState(0)
  console.log(123)

  // useEffect(() => {

  // }, [])

  return (
    <>
      <button onClick={() => setClickTimes(clickTimes + 1)} >
        addTestData: {clickTimes}
      </button>
    </>
  )
}

// Page.getInitialProps = async (x) => {
//   const testInitialProps = 'test'
//   return { testInitialProps }
// }

export default Button