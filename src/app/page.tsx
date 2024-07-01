import { oswald } from "@/helpers/fonts";
import SearchBar from "@/components/SearchBar/SearchBar";

const Home: React.FC = () => {
  return (
    <main className="relative w-screen h-screen">
      <h1 className={`${oswald.className} text-6xl text-center m-10`}>
        Instagram Stalker App
      </h1>

      <SearchBar />
    </main>
  );
};

export default Home;
