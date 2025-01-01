import Layout from './components/Layout'
import BlogCard from './components/BlogCard'
import Slider from './Component/Slider/Slider'
import Slider2 from'./Component/Slider2/Slider2'
import Slider3 from './Component/Slider3/Slider3'

const blogPosts = [
  { id: 1, title: "The Future of AI",
     description: "Artificial Intelligence (AI) is rapidly evolving and its impact on various industries is becoming increasingly significant. From healthcare to finance, AI is revolutionizing the way we work and live.",
      imageUrl: "/11.jpeg" },

  { id: 2, title: "5G Technology ",
     description: "5G technology represents the next generation of wireless connectivity, promising faster speeds, lower latency, and greater capacity for connected devices. With the rollout of 5G networks globally, industries are on the brink of transformative changes, from enhanced mobile experiences to advanced IoT deployments. Unlike previous generations of wireless technology.",
     imageUrl: "/b.jpeg" 
    },

  { id: 3, title: "Crisis In Pakistan", description: "The political and economic landscape in Pakistan has been grappling with multiple crises,", imageUrl: "/c.jpg" },
 
  { id: 4, title: "Syrian Collapse",
     description: "The fall of Syria’s government has been a complex and prolonged crisis, marked by years of conflict, political instability, and humanitarian suffering. ", imageUrl: "/d.jpeg" },
 
  { id: 5, title: "The Palestinian Issue", description: "The Palestinian issue is deeply rooted in history, dating back to the early 20th century when competing national movements and colonial powers ", imageUrl: "/e.jpeg" },
 
  { id: 7, title: "Parachinar Conflict", description: "Parachinar, the capital of Kurram District in Pakistan's Khyber Pakhtunkhwa province,", imageUrl: "/f1.jpeg" },
 

  { id: 6, title: "Champion Trophy-2025", description: "The ICC Champion Trophy is one of the most prestigious cricket tournaments in the world, ", imageUrl: "/g.jpg" },
 

  { id: 8, title: " The Rise of Social Media", description: "The rise of social media has revolutionized the way people interact, share information, ", imageUrl: "/h.webp" },
]
  

export default function Home() {
  return (
    <Layout>

      <h1 className=" border-purple-500  text-xl sm:text-4xl font-bold mb-8 text-center text-purple-300 mt-10 ">Explore the Latest Updates and Discover Something New!</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center sm:justify-center gap-28 pace-x-5">
<Slider/>
<Slider2/>
<Slider3/>

</div>
    </Layout>
  )
}

