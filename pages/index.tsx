import Layout from '../components/layout'
import Image from 'next/image'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Header from '../components/header'
import Mother from '../components/mother'
import Sidenav from '../components/sidenav'
import Genflex from '../components/genflex'
import Searchfunk from '../components/searchfunk'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home ({allPostsData}) {
  return (
          <Layout>
            <Header></Header>
            <Sidenav> </Sidenav>
            <Mother>
            <Genflex>
              <div className="gen-h">
              <h4>Reality is made up of language, or code.<br></br>
              And like all code, reality can be hacked.<br></br>
              Ours is a compromised reality. But there is a way out.
              </h4>
              <h4>
                Welcome to the Bṛhat Open Library. A tool for <span className="col-o">reinstallation of base operating code.</span>
              </h4>
              </div>
              <p>The Open Library is an open-access, open-source repository for scriptures, texts, papers, books and other material, all related to Bhārata, Itihāsa and Dharma. To cut through the clutter and find your own way around, click on any of the texts listed here and take it from there.<br></br><br></br>
              For a detailed and complete guide on how to use the Open Library to reconnect with the Indian civilizational consciousness, read our 'User Guide'. To just get a quick start, explore the Mīmāṃsasūtra text, which is our best-case concept document. You are currently in the 'Repository of Scripture' sub-section of the Open Library. Return to the main section <Link href="https://brhat.in/bol">here.</Link> More about the library is available here, and our parent website for Bṛhat is <Link href="https://brhat.in">here.</Link><br></br><br></br>
              <span className="col-o">This build is currently a work-in-progress. Expect broken/dead links and/or errors.</span></p>
            </Genflex>
            </Mother>
          </Layout>        
  )
}

