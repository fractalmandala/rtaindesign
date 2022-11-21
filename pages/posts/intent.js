import Link from 'next/link'
import Layout from '../../components/layout'

export default function (intent) {
  return ( <Layout>

      <meta
        name="description"
        content={`A Test Area for Building the Repository of Scripture.`}
      />

            <h4>Intent</h4>
            <h5>
              <Link href="/">
                Back to Home
              </Link>
            </h5>
            </Layout>
)}