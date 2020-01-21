import { NextPage } from 'next'

interface Props {
  testInitialProps?: string;
}

const App: NextPage<Props> = ({ testInitialProps }) => (
  <>
    <div>
      test: {testInitialProps}
    </div>
  </>
)

App.getInitialProps = async (x) => {
  const testInitialProps = 'test'
  return { testInitialProps }
}

export default App