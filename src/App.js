import './App.scss';
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";

function App() {
  return (
    <main className="app-container">
        <BannerComponent />
        <GalleryComponent />
    </main>
  );
}

export default App;
