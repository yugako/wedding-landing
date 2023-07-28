import {SectionTitleComponent} from "../title/section-title.component";
import './couple-friends.component.scss';

export function CoupleFriendsComponent() {
    return (
        <section className="couple-friends">
            <SectionTitleComponent sectionTitle="Дружба і дружка"/>

            <div className="couple-friends__content">
                <div className="couple-friends__person person">
                    <div className="person__image">
                        <img src="/photos/groomsmen.jpg" alt="Василь Пецкович"/>
                    </div>

                    <h3 className="person__name">Василь</h3>
                    <p className="person__title">Дружба</p>
                </div>

                <div className="couple-friends__person person">
                    <div className="person__image">
                        <img src="/photos/bridesmaide.jpg" alt="Ксенія Лоскоріх"/>
                    </div>

                    <h3 className="person__name">Ксенія</h3>
                    <p className="person__title">Дружка</p>
                </div>
            </div>
        </section>
    )
}
