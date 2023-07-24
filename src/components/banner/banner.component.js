import HeartImage from '../../assets/heart.svg';
import './banner.component.scss';
import {CountDownComponent} from "../count-down/count-down.component";

export function BannerComponent() {
    return (
        <header className="banner">
            <main className="banner-content">
                <img src={HeartImage} alt="Heart" />

                <h1 className="banner-celebrities">
                    Yurii <span>&</span> Andrianna
                </h1>

                <p className="banner-date">WE ARE GETTING MARRIED SEP 17, 2023</p>

                <CountDownComponent />
            </main>

        </header>
    )
}
