import Layout from '../components/layout'
import Image from 'next/image'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Headerrid from '../components/headerrid'
import Mother from '../components/mother'
import Siderid from '../components/siderid'
import Genflex from '../components/genflex'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Rtaindesign ({allPostsData}) {
  return (
          <Layout>
            <Headerrid></Headerrid>
            <Siderid> </Siderid>
            <Mother>
            <Genflex>
              <div className="rid-gen">
              <h4>All human beings are creative.</h4>
              <p>
                Every single one of us. We are creative when we lie, and creative when we entertain. With that new plan at the workplace, or that deft jaywalking across the road.
                For the mothers among us, for countless generations, creativity has emerged atop cooking stoves, amid spice mixes, and in strategies to make a truant child eat his brocolli. 
              </p>
              <p>In fact, creativity isn't even exclusive to our species. From apes, our closest cousins, to distant ones such as mice, creativity is characteristic to much of life itself.
              </p>
              <h4 className="col-g">But some things about human creativity are unique.</h4>
              <p>We are able to <span className="col-g">consciously</span> pass on our creativity. Many animals learn behaviour and acquire intelligence from their parents. But the lioness cannot deliberate with her cub on which among the herd to target, nor the gorilla instruct a young one how to identify the sweetest fruits.
                In humans, we are able to compound this such that our young ones learn even at the lap of grandparents.
              </p>
              <h5 className="type-g">In other words, creativity among human beings can iterate.</h5>
              <p>
                Iterative creativity is a process with evolutionary force. It creates many branches that at discrete ends can be remarkably different.
                And like natural selection, when done with <i>conscious deliberation</i> it adapts for what works, against what doesn't.
                In a species that acquires the ability to iterate creativity across the generations, as ours did, through the long haul of deliberate selection emerges a plan, a purpose,<span className="col-g"><b> a design.</b></span> 
              </p>
              <p>
                To design is to convert intent to manifestation, to bring to fruit the result of planned deliberation. When this result is what has emerged among <i>us</i>, through the collective churn of iterative creativity over manifold generations, we call it <span className="col-g"><i>our design.</i></span> The world of design has known this, which is why Fred Brooks- writer of <i>The Design of Design</i> advised:
              </p>
              <h5>"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did; this is the most illuminating question to ask yourself."</h5>
              <p>Robert Peters, the CEO of Circle Design, put its more plainly- <i>"Design creates culture. Culture shapes values. Values determine the future."</i> <span className="col-g"> Design is what gives agency to the natural and continuous phenomenon of creativity.</span> It is how we can give an order to things. And the best design to emerge is one filtered through our collective iteration, over deep time. Of course, modern design isn't the first to comprehend the emergent mesh of iteration, creativity, intelligence and adaptation.
              It was well-known in ancient Bhārata as well. Which is why its very word for our design, for culture, was <i><span className="col-g">saṃskṛti</span> - our well-put-together creation</i>. How do we know their saṃskṛti was the output of iterative creativity? That it was what adapted and what worked over the long haul of time? We know through their other name for their culture. They literally referred to it as <i>that which has been practice, what's worked, what bears ahead.</i><b> They called it Dharma.</b>
              </p>
              <h4>
              Ṛta in Design is a system for modern design thinking and creatorship,<span className="col-g"> informed by the design principles of Dharma.</span> 
              </h4>
              </div>
             </Genflex>
          </Mother>
          </Layout>        
  )
}

