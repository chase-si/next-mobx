import { useContext } from 'react' 
import { NextPage } from 'next'
import { MobXProviderContext } from 'mobx-react'

interface Props {
  testInitialProps?: string;
}

const Title: NextPage<Props> = () => {
  const homeStore = useContext(MobXProviderContext)['homeStore']

  console.log('rendering')

  return (
    <>
      <div>
        test: {homeStore.testData} 
      </div>
    </>
  )
}  
export default Title