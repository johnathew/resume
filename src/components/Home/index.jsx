import Body from '../Sections/Body'
import Footer from '../Sections/Footer'
import Card from '../UI/Card'
import Navbar from '../Sections/Navbar'
import Sidebar from '../Sidebar'
import Header from '../Sections/Header'

// home = layout

const Home = () => {
  return (
    <>
      <Navbar />
      <Card>
        <Header />
        <Body />
        <Footer />
      </Card>
      <Sidebar />
    </>
  )
}

export default Home
