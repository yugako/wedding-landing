import CallToActionImage from '../../assets/call-to-action.jpeg';
import './join-us.component.scss';

export function JoinUsComponent() {
    return (
        <section className="join-us" style={{backgroundImage: `url(${CallToActionImage})`}}>
           <div className="app-container">
               <h2 className="join-us__title">Давайте святкувати наше кохання</h2>
               <p className="join-us__descr">У нас є декілька запитань до Вас, щоб зробити святкування максимально комфортним і приємним.</p>
               <a className="join-us__link button" href="https://forms.gle/khV2YoQtBqvtNS6v7" target="_blank" rel='noreferrer'>Відкрити опитувальник</a>
           </div>
        </section>
    )
}
