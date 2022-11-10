import Body from "../Sections/Body";
import Footer from "../Sections/Footer"
import Header from "../Sections/Header";
import Card from "../UI/Card"
import Navbar from "../Sections/Navbar";

const Home = () => {
  return (
    <Card>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Card>
  );
};

export default Home;
