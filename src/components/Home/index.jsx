import Body from '../Sections/Body'
import Footer from '../Sections/Footer'
import Card from '../UI/Card'
import Navbar from '../Sections/Navbar'
import Sidebar from '../Sidebar'

// home = layout

const Home = () => {
  return (
    <>
      <Navbar />
      <Card>
        <Body />
        <Footer />
      </Card>
      <Sidebar />
    </>
  )
}

export default Home
