import Dummy from "../components/Dummy/Dummy";
import DummyTwo from "../components/DummyTwo/DummyTwo";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Dummy />
      <DummyTwo />
    </div>
  );
};

export default Home;
