import ReactDOM from 'react-dom';
import MenuOverlay from './MenuOverlay';

class MenuOverlayManager {
    overlayRef: HTMLElement | null;
    setIsMenuOpenFunc: any;
    deselectMenuFunc?: () => void;

    constructor() {
        if (process.browser) {
            this.overlayRef = document.getElementById('overlayRoot');
        } else {
            this.overlayRef = null;
        }
    }

    public closeOverlay = () => {
        if(this.overlayRef) {
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
            this.setIsMenuOpenFunc(false);
            this.deselectMenuFunc && this.deselectMenuFunc();
            ReactDOM.unmountComponentAtNode(this.overlayRef);
        }
    }

    public show(childComponent: JSX.Element, setIsMenuOpen: any, delectMenu?: () => void) {
        this.setIsMenuOpenFunc = setIsMenuOpen;
        this.deselectMenuFunc = delectMenu;
        if (process.browser) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            ReactDOM.render(<MenuOverlay closeOverlay={this.closeOverlay} child={childComponent}/>, this.overlayRef)
        }
    }
}

export const overlayManager = new MenuOverlayManager();