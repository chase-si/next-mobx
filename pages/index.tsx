import { NextPage } from 'next'

interface Props {
  testInitialProps?: string;
}

const Page: NextPage<Props> = ({ testInitialProps }) => (
  <>
    <div>
      test: {testInitialProps}
    </div>
  </>
)

Page.getInitialProps = async (x) => {
  const testInitialProps = 'test'
  return { testInitialProps }
}

export default Page