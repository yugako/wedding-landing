import './banner.component.scss';
import {CountDownComponent} from "../count-down/count-down.component";

export function BannerComponent() {
    return (
        <header className="banner" id="banner" style={{backgroundImage: 'url(/photos/3.jpg)' }}>
            <main className="banner-content">
                <h1 className="banner-celebrities">
                    Юра <span>&</span> Андріанна
                </h1>

                <p className="banner-date">Ми одружуємось 17.09.2023</p>

                <CountDownComponent />
            </main>
        </header>
    )
}
