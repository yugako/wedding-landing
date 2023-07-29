import {SectionTitleComponent} from "../title/section-title.component";
import {ReactComponent as Shape} from "../../assets/shape.svg";
import EventsBg from '../../assets/events-bg.jpeg';
import './schedule.component.scss';

export function ScheduleComponent() {
    return (
        <div className="app-container">
            <div className="schedule-background" style={{backgroundImage: `url(${EventsBg})`}}>
                <SectionTitleComponent sectionTitle="Коли і де?" mode="light"/>
            </div>
            <div className="schedule app-container">
                <div className="schedule-card">
                    <h3 className="schedule-card__title">Вінчання</h3>
                    <Shape />

                    <div className="schedule-card__location">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>

                        <span>Свято-Покровський кафедральний Собор</span>
                    </div>

                    <div className="schedule-card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>

                        <span>Неділя, 17 вересня, 2023 14:00</span>
                    </div>

                    <a href="https://goo.gl/maps/B2zUH4pBgmdXMZ2x9"
                        target="_blank" rel="noreferrer"
                        className="schedule-card__link button"
                    >
                        Відкрити на карті
                    </a>
                </div>

                <div className="schedule-card">
                    <h3 className="schedule-card__title">Весільний бенкет</h3>
                    <Shape />

                    <div className="schedule-card__location">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>

                        <span>Парк-готель "Древній град", 7-й км Київської траси</span>
                    </div>

                    <div className="schedule-card__date">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>

                        <span>Неділя, 17 вересня, 2023 15:00</span>
                    </div>

                    <a href="https://goo.gl/maps/ip5ghVezFpmKyBNi8"
                        target="_blank"
                        rel="noreferrer"
                        className="schedule-card__link button"
                    >
                        Відкрити на карті
                    </a>
                </div>
            </div>
        </div>

    )
}
