import { Header } from "./components/Header/Header";
import { LastContainer } from "./components/Last-Container/LastContainer";
import { MainComponent } from "./components/Main-Component/MainComponent";
import { NewsContainer } from "./components/News-Container/NewsContainer";

function App() {
  return (
    <main className="px-4 pt-6 xl:px-[150px] xl:py-[80px] font-Inter">
      <Header />
      <div className="lg:flex lg:gap-5 lg:h-[506px] xl:h-[550px]">
        <MainComponent />
        <NewsContainer />
      </div>
      <LastContainer />
    </main>
  );
}

export default App;
