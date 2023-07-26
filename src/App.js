import './App.scss';
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

function App() {
  return (
      <>
          <BannerComponent />
          <main className="app-container">
              <AboutUsComponent />
              <GalleryComponent />
          </main>
          <JoinUsComponent />
      </>

  );
}

export default App;
