import { classNames } from 'shared/lib/classsNames/classNames';
import './Loader.scss';

interface Loader {
  className?: string;
}
export const Loader = ({ className }: Loader) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>;
        </div>
    );
};
