import Loader from '../../assets/loading-heart.gif';
import './loader.component.scss';

export function LoaderComponent() {
    return (
        <div className="loader">
            <img src={Loader} alt="Loading heart..."/>
        </div>
    )
}
