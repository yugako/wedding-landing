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

                <div className="our-story__section first-meet">
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/first_meet.jpg)'}} />
                    <div className="our-story__card">
                        <h3 className="our-story__title">Перше побачення</h3>
                        <p className="our-story__date">14 лютого 2022</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Наша історія почалась цікаво, ми б сказали навіть кумедно :) Познайомились ми за збігом обставин і ліні брата нареченої 😀
                            Хоч ця зустріч і була випадковою, але вона стала точно вагомою в нашому житті🧡 Дуже символічно вийшло, що саме перше побачення було в День Закоханих.
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={DoveIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section reversed date-on-roof">
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/date_on_the_roof.jpg)'}} />
                    <div className="our-story__card">
                        <h3 className="our-story__title">Сюрприз на даху</h3>
                        <p className="our-story__date">28 червня 2022</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Юра завжди любив робити сюрпризи! Одним з перших було побачення на даху будинку в Львові.
                            Ці відчуття неможливо передати. Особливою була атмосфера та час проведений разом 🧡
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={DanceIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section first-trip">
                    <div className="our-story__picture" style={{backgroundImage: 'url(/photos/first-trip.jpg)'}} />

                    <div className="our-story__card">
                        <h3 className="our-story__title">Перша подорож</h3>
                        <p className="our-story__date">16 жовтня 2022</p>

                        <div className="line-shape">
                            <div className="outer-ball">
                                <div className="inner-ball"></div>
                            </div>
                        </div>

                        <p className="our-story__descr">
                            Їздили ми разом в гори, як ті жабки мандрівниці :)
                            Вперше в житті подорож разом, вперше поварились в чані та побачили справжню ламу! <br /> P.S. Вони плюються)
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={BaloonsIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section 1-year-together reversed">
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
                            Рік разом пролетів дуже швидко :) Це було наше маленьке свято, яке ми провели тільки вдвох 🧡
                        </p>
                    </div>
                </div>

                <div className="icon-wrapper">
                    <img src={DoveIcon} alt="Іконка" className="our-story__icon"/>
                </div>

                <div className="our-story__section proposal">
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
                            Це серйозний крок в наших стосунках, але ми щасливі, бо починаємо новий етап в нашому житті! Створюємо сімʼю🧡
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
