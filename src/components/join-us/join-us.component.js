import CallToActionImage from '../../assets/call-to-action.jpeg';
import './join-us.component.scss';

export function JoinUsComponent() {
    return (
        <div className="join-us" style={{backgroundImage: `url(${CallToActionImage})`}}>
           <div className="app-container">
               <h2 className="join-us__title">Lets Celebrate Our Love</h2>
               <a className="join-us__link" href="https://forms.gle/Ph4wMCndR8XtH5RT6" target="_blank" rel='noreferrer'>Join with us</a>
           </div>
        </div>
    )
}
