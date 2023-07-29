import './about-us.component.scss';
import {SocialsComponent} from "../socials/socials.component";

export function AboutUsComponent() {
    return (
        <div className="app-container about-us__wrapper">
            <div className="about-us">
                <div className="about-us__img">
                    <img src="/photos/bride.jpg" alt="Андріанна"/>
                </div>

                <div className="about-us__content">
                    <h2 className="about-us__name">Наречена</h2>
                    <p className="about-us__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut beatae deserunt dolorum harum id ipsa minima quae quaerat recusandae sunt?
                    </p>

                    <div className="about-us__socials">
                        <SocialsComponent socials={{
                            facebookUrl: 'https://www.facebook.com/andri.yovbak',
                            instagramUrl: 'https://t.me/yurii_hs'
                        }} />
                    </div>
                </div>
            </div>
            <div className="about-us reversed">
                <div className="about-us__img">
                    <img src="/photos/groom.jpg" alt="Юра"/>
                </div>

                <div className="about-us__content">
                    <h2 className="about-us__name">Наречений</h2>
                    <p className="about-us__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut beatae deserunt dolorum harum id ipsa minima quae quaerat recusandae sunt?
                    </p>

                    <div className="about-us__socials">
                        <SocialsComponent socials={{
                            facebookUrl: 'https://www.facebook.com/yurko.hasiuk/',
                            instagramUrl: 'https://t.me/yurii_hs',
                        }} />
                    </div>
                </div>
            </div>
        </div>

    )
}
