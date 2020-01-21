import { useContext } from 'react' 
import { NextPage } from 'next'
import { MobXProviderContext } from 'mobx-react'

interface Props {
  testInitialProps?: string;
}

const App: NextPage<Props> = () => {
  const homeStore = useContext(MobXProviderContext)['homeStore']

  console.log(homeStore)
  return (
    <>
      <div>
        test: 
      </div>
    </>
  )
}  

// App.getInitialProps = async (x) => {
//   const testInitialProps = 'test'
//   return { testInitialProps }
// }

export default App