import {ReactComponent as DoveIcon} from '../../assets/dove.svg';
import './section-title.component.scss';

export function SectionTitleComponent({sectionTitle, mode = 'default'}) {
    return (
        <div className={`section-title__wrapper ${mode === 'light' ? 'light' : ''}`}>
            <div className={`section-title__img-wrapper`}>
                <DoveIcon />
            </div>

            <h2 className="section-title">{sectionTitle}</h2>
        </div>
    )
}
