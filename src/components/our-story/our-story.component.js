import {SectionTitleComponent} from "../title/section-title.component";
import BaloonsIcon from '../../assets/balloons.png';
import DanceIcon from '../../assets/dance.png';
import DoveIcon from '../../assets/dove.png';
import './our-story.component.scss';

export function OurStoryComponent() {
    return (
        <section className="our-story">
            <SectionTitleComponent sectionTitle="Наша солодка історія"/>

            <div className="our-story__content">
                <div className="icon-wrapper">
                    <img src={BaloonsIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section">
                    <div className="our-story__picture">
                        <img src="https://mylove-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.71763027.jpg&w=1080&q=75" alt="Перша зустріч"/>
                    </div>
                    <div className="our-story__card">
                        <h3 className="our-story__title">Перша зустріч</h3>
                        <p className="our-story__date">14 лютого 2023</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A ab dignissimos eius ex itaque, laboriosam, magnam molestias necessitatibus officiis placeat qui reprehenderit sequi, sint!
                            Doloremque esse id itaque qui suscipit.
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={DanceIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section reversed">
                    <div className="our-story__picture">
                        <img src="https://mylove-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.71763027.jpg&w=1080&q=75" alt="Перша зустріч"/>
                    </div>

                    <div className="our-story__card">
                        <h3 className="our-story__title">Перше побачення</h3>
                        <p className="our-story__date">14 лютого 2023</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A ab dignissimos eius ex itaque, laboriosam, magnam molestias necessitatibus officiis placeat qui reprehenderit sequi, sint!
                            Doloremque esse id itaque qui suscipit.
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={DoveIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section">
                    <div className="our-story__picture">
                        <img src="https://mylove-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.71763027.jpg&w=1080&q=75" alt="Перша зустріч"/>
                    </div>
                    <div className="our-story__card">
                        <h3 className="our-story__title">Перша зустріч</h3>
                        <p className="our-story__date">14 лютого 2023</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A ab dignissimos eius ex itaque, laboriosam, magnam molestias necessitatibus officiis placeat qui reprehenderit sequi, sint!
                            Doloremque esse id itaque qui suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
