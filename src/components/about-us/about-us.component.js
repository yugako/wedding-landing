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
                    <p className="about-us__descr">
                        Я люблю тебе з першої нашої зустрічі. Кожен твій поцілунок примножує мої почуття.
                        Кожен твій дотик дає мені відчуття того, що я бажана.
                        Кожне твоє слово - вказує на вірно обраний шлях - разом з тобою, наперекір долі або в згоді з нею.
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
                    <p className="about-us__descr">
                        Я обіцяю бути тобі опорою і підтримкою. Радіти щасливим моментам разом і разом боротися з труднощами.
                        У тебе не буде причин сумніватися в мені.
                        Жодне нещастя не зможе вбити моїх почуттів і зламати твою віру в себе.
                        Моя вірність - це те, в чому клянусь тобі відтепер і навіки. Кохаю тебе!
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
