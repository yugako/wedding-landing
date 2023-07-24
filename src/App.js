import './App.scss';
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {JoinUsComponent} from "./components/join-us/join-us.component";

function App() {
  return (
      <>
          <main className="app-container">
              <BannerComponent />
              <GalleryComponent />
          </main>
          <JoinUsComponent />
      </>

  );
}

export default App;
