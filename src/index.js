import VMTContainer from './VMTContainer';
import {constants} from '../config';
import PmRpcServer from './pmRpc/server';

let pmRpcServer = new PmRpcServer();

export default class {

    static launch(options) {
        let vmtContainer = new VMTContainer({
            containerId: options.containerId || constants.CONTAINER_ID,
            memberId: options.memberId,
            eventId: options && options.eventId,
            venueId: options.venueId,
            apiPoint: options.apiPoint || constants.API_POINT,
            mode: options && options.mode,
            styles: options.styles,
            token: options.token
        });

        // ----------------------------------------------------------------------------------------------
        // LAUNCH PM RPC SERVER AND CREATE INTERNAL METHODS:
        // ----------------------------------------------------------------------------------------------

        pmRpcServer.launch();

        pmRpcServer.method('vmtReady', () => {
            vmtContainer.hideSpinner();
        });

        pmRpcServer.method('closeWidget', () => {
            pmRpcServer.removeMethod('toggleFullScreen');
            pmRpcServer.removeMethod('closeWidget');
            vmtContainer.close(pmRpcServer.destroyServer);
            this.onCloseFn();
        });

        pmRpcServer.method('toggleFullScreen', () => {
            vmtContainer.toggleFullScreen();
        });
    }

    static method(name, method) {
        pmRpcServer.method(name, method);
    }

    static onClose(callback) {
        this.onCloseFn = callback;
    }
}
