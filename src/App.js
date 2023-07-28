import './App.scss';
import {BannerComponent} from "./components/banner/banner.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {CoupleFriendsComponent} from "./components/couple-friends/couple-friends.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";

function App() {
  return (
      <>
          <BannerComponent />
          <AboutUsComponent />
          <ScheduleComponent />
          <CoupleFriendsComponent />
          <JoinUsComponent />
          <GalleryComponent />
      </>
  );
}

export default App;
