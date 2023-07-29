import {SectionTitleComponent} from "../title/section-title.component";
import Baloons from '../../assets/balloons.png';
import './our-story.component.scss';

export function OurStoryComponent() {
    return (
        <section className="our-story">
            <SectionTitleComponent sectionTitle="Наша солодка історія"/>

            <div className="our-story__content">
                <img src={Baloons} className="our-story__icon"/>
            </div>
        </section>
    )
}
