import './App.scss';
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {OurStoryComponent} from "./components/our-story/our-story.component";

function App() {
  return (
      <>
          <BannerComponent />
          <AboutUsComponent />
          <ScheduleComponent />
          <JoinUsComponent />
          <OurStoryComponent />
          <GalleryComponent />
      </>
  );
}

export default App;
