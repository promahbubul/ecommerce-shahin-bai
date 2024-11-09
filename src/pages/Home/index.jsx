import BestSellerProducts from "../../components/Home/BestSellerProducts";
import ClassicProduct from "../../components/Home/ClassicProducts";
import EditorPic from "../../components/Home/EditorPic";
import FeaturedPost from "../../components/Home/FeaturedPost";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import NeuralUniverse from "../../components/Home/NeuralUniverse";

const Home = () => {
  return (
    <div>
      <Header />
      <EditorPic />
      <BestSellerProducts />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPost />
      <Footer />
    </div>
  );
};
export default Home;
