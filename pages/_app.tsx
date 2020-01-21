
import { NextPage } from 'next'

interface Props {
  Component: NextPage,
  pageProps: object
};

const App: NextPage<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default App