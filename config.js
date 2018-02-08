// ------------------------------------------------------------------------------------------
// CONSTANTS AND DEFAULT PARAMETERS OF VMT WIDGET:
// ------------------------------------------------------------------------------------------

export const constants = {
    CONTAINER_ID: 'venue-mapping-tool',
    API_POINT: 'http://localhost:3000',
    IFRAME_NAME: '__VMT_TOOL__',
    messages: {
        missedParams: 'VENUE MAPPING TOOL: missed one of the required arguments!',
        noContainer: (containerId) => 'VENUE MAPPING TOOL: There is no element with ' + containerId + ' id!'
    },
    styles: {
        DEFAULT_IFRAME_HEIGHT: 500,
        iframe: `width: 100%; height: 100%;`,
        fullScreen: `position: fixed; padding: 0; margin: 0; width: 100vw;
            height: 100vh; outline: none; border: none; top: 0;left: 0`,
        spinner: `
                .vmt-loading {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 99999;
        background: rgba(255,255,255,0);
    }
    .vmt-spinner {
        height:auto;
        width:auto;
        position: absolute;
        top:50%;
        left:50%;
        /*margin: -30px 0 0 -30px;*/
    }
    .bounceball {
        height: 105px;
        width: 105px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -75px 0 0 -60px;
        -webkit-animation: rotation 1s infinite linear;
        -moz-animation: rotation 1s infinite linear;
        -o-animation: rotation 1s infinite linear;
        animation: rotation 1s infinite linear;
        border:6px solid rgba(115,194,69,.2);
        border-radius:100%;
    }

    .bounceball:before {
        content:"";
        display:inline-block;
        position:absolute;
        left:-6px;
        top:-6px;
        height:100%;
        width:100%;
        border-top:6px solid rgba(115,194,69,.8);
        border-left:6px solid transparent;
        border-bottom:6px solid transparent;
        border-right:6px solid transparent;
        border-radius:100%;
    }

    @-webkit-keyframes rotation {
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(359deg);}
    }
    @-moz-keyframes rotation {
        from {-moz-transform: rotate(0deg);}
        to {-moz-transform: rotate(359deg);}
    }
    @-o-keyframes rotation {
        from {-o-transform: rotate(0deg);}
        to {-o-transform: rotate(359deg);}
    }
    @keyframes rotation {
        from {transform: rotate(0deg);}
        to {transform: rotate(359deg);}
    }
    .picture {
        display: inline-block;
        vertical-align: middle;
        background-size: contain;
        width: 100px;
        height: 75px;
        background-repeat:no-repeat;
    }`
    }
};