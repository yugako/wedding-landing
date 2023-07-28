import './gallery.component.scss';
import {SectionTitleComponent} from "../title/section-title.component";

export function GalleryComponent() {
    return (
        <div className="gallery-wrapper">
            <SectionTitleComponent sectionTitle='Солодкі моменти' />
            <section className="gallery" id="gallery">
                <div className="gallery-row gallery-row--1-3">
                    <div className="gallery-row__item" style={{backgroundImage: 'url(/photos/1.jpg)' }}></div>
                    <div className="gallery-row__item" style={{backgroundImage: 'url(/photos/2.jpg)' }}></div>
                    <div className="gallery-row__item" style={{backgroundImage: 'url(/photos/3.jpg)' }}></div>
                </div>
                <div className="gallery-row gallery-row--1-2">
                    <div className="gallery-row__item" style={{backgroundImage: 'url(/photos/4.jpg)' }}></div>
                    <div className="gallery-row__item" style={{backgroundImage: 'url(/photos/7.jpg)' }}></div>
                </div>
            </section>
        </div>
    )
}
