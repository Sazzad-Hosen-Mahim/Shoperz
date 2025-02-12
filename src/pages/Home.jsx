import Dummy from "../components/Dummy/Dummy";
import DummyTwo from "../components/DummyTwo/DummyTwo";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#F1FBFF] from-0% via-[#F1EDEB] via-49.68% to-[#F8DAB0] to-50.53% h-[9246px] w-full absolute top-0">
      <Header />
      <Dummy />
      <DummyTwo />
    </div>
  );
};

export default Home;
