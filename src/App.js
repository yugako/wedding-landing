import {Suspense} from "react";
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {OurStoryComponent} from "./components/our-story/our-story.component";
import {LoaderComponent} from "./components/loader/loader.component";
import './App.scss';
import {FlowersDisclaimerComponent} from "./components/flowers-disclaimer/flowers-disclaimer.component";

function App() {
  return (
      <Suspense fallback={LoaderComponent}>
          <BannerComponent />
          <AboutUsComponent />
          <ScheduleComponent />
          <JoinUsComponent />
          <OurStoryComponent />
          <GalleryComponent />
          <FlowersDisclaimerComponent />
      </Suspense>
  );
}

export default App;
