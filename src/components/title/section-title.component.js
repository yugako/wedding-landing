import DoveIcon from '../../assets/dove.svg';
import './section-title.component.scss';

export function SectionTitleComponent({sectionTitle}) {
    return (
        <>
            <div className="section-title__img-wrapper">
                <img src={DoveIcon} className="section-title__img" alt={sectionTitle}/>
            </div>

            <h2 className="section-title">{sectionTitle}</h2>
        </>
    )
}
