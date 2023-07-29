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
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/first_meet.jpg)'}} />
                    <div className="our-story__card">
                        <h3 className="our-story__title">Перша зустріч</h3>
                        <p className="our-story__date">14 лютого 2022</p>

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
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/after_long_leave.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Після тривалої розлуки...</h3>
                        <p className="our-story__date">22 травня 2022</p>

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
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/date_on_the_roof.jpg)'}} />
                    <div className="our-story__card">
                        <h3 className="our-story__title">Побачення на даху</h3>
                        <p className="our-story__date">28 червня 2022</p>

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
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/first-trip.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Перша подорож разом</h3>
                        <p className="our-story__date">16 жовтня 2022</p>

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
                    <img src={BaloonsIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section">
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/new_year.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Новий рік</h3>
                        <p className="our-story__date">31 грудня 2022</p>

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
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/1_year_together.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Один рік разом...</h3>
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

                <div className="our-story__section">
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/proposal.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Вона сказала Так</h3>
                        <p className="our-story__date">2 квітня 2023</p>

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
