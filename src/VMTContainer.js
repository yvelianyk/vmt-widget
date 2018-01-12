import {constants} from '../config';

export default class VMTContainer {

    constructor(options) {
        let root = document.getElementById(options.containerId);
        if (!this.isValidParams(options, root)) {
            return;
        }
        this.initIframe({root, ...options});
    }

    // ------------------------------------------------------------------------------------------
    // PUBLIC:
    // ------------------------------------------------------------------------------------------

    close(destroyServer) {
        let iframe = this.root.getElementsByTagName('iframe')[0];
        this.root.removeChild(iframe);
        destroyServer();
    }

    toggleFullScreen() {
        let iframe = document.querySelector(`iframe[name=\"${constants.IFRAME_NAME}\"]`);
        if (this.initialStyles) {
            iframe.style.cssText = this.initialStyles;
            this.initialStyles = null;
        } else if (this.initialStyles === '') {
            iframe.removeAttribute('style');
            this.initialStyles = null;
        } else {
            this.initialStyles = iframe.style.cssText;
            iframe.style.cssText = constants.styles.fullScreenStyles;
        }
    }

    // ------------------------------------------------------------------------------------------
    // PRIVATE:
    // ------------------------------------------------------------------------------------------

    isValidParams(options, root) {
        if (!options.memberId || !options.apiPoint || root === null) {
            let errorMessage = root === null ?
                constants.messages.noContainer(options.containerId) :
                constants.messages.missedParams;
            console.error(errorMessage);
            return false;
        }
        return true;
    }

    initIframe(options) {
        let {root} = options;
        this.root = root;
        this.options = options;
        let iframe = document.createElement('iframe');
        iframe.name = constants.IFRAME_NAME;
        iframe.width = '100%';
        iframe.height = root.offsetHeight || constants.styles.DEFAULT_IFRAME_HEIGHT;
        iframe.frameBorder = 0;
        iframe.src = this.getIframeUrl(options);
        root.appendChild(iframe);
        iframe.focus();
    }

    getIframeUrl({apiPoint, memberId, eventId, token, venueId, mode}) {
        return `${apiPoint}?member=${memberId}${eventId ? '&event=' + eventId : ''}&token=${token}&venue=${venueId}${mode ? '&mode=' + mode : ''}`;
    }

}