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
        background-image:  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMzc1LjAwMDAwMHB0IiBoZWlnaHQ9IjE1Ny4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDM3NS4wMDAwMDAgMTU3LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTU3LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzczQzI0NSIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTMyMDIgMTM2OSBjLTU3IC0yOSAtOTIgLTgyIC05OSAtMTUxIC03IC03MiA5IC0xMTggNTcgLTE2MiAxMDkgLTk4CjI3MiAtNTUgMzE5IDgzIDYgMTkgMTEgNDMgMTEgNTUgMCA3MSAtNTUgMTU3IC0xMTcgMTgyIC00OCAyMSAtMTIxIDE3IC0xNzEKLTd6IG0xNTkgLTUyIGM0MCAtMjcgNjkgLTc5IDY5IC0xMjUgMCAtMzQgLTI2IC0xMDIgLTM5IC0xMDIgLTMgMCAtMTggMjAgLTMyCjQzIGwtMjYgNDMgMjQgMTcgYzI4IDIyIDMyIDc3IDYgOTggLTkgOCAtNDYgMTYgLTgyIDIwIC01OSA1IC02MyA2IC00MSAxNiA0MAoxOCA4NCAxNSAxMjEgLTEweiBtLTE1MSAtMTE5IGwtMSAtMTEzIC0xOSAyMyBjLTI3IDMyIC00MCA4NiAtMzAgMTIxIDggMjcgMzgKODEgNDYgODEgMiAwIDQgLTUxIDQgLTExMnogbTExOCA0NSBjMyAtMjEgLTEgLTIzIC0zNyAtMjMgLTM3IDAgLTQxIDIgLTQxIDI2CjAgMjMgMyAyNSAzOCAyMiAzMCAtMiAzOCAtNyA0MCAtMjV6IG0tMjUgLTExMiBjMTcgLTMyIDM1IC01MSA1MCAtNTQgMTkgLTMKMTcgLTYgLTE2IC0yMSAtMjggLTEyIC00MiAtMTQgLTUxIC03IC03IDYgLTE2IDggLTE5IDQgLTQgLTMgLTEzIC0xIC0yMCA1IC04CjcgLTE3IDkgLTIwIDUgLTQgLTMgLTcgLTEgLTcgNSAwIDcgNyAxMiAxNSAxMiAxMSAwIDE1IDEyIDE1IDUwIDAgNjUgMTcgNjUKNTMgMXoiLz4KPHBhdGggZD0iTTUwNSAxMzA4IGMtOCAtMjkgLTM2IC0xMjcgLTYxIC0yMTggLTI1IC05MSAtOTIgLTMyOCAtMTQ4IC01MjgKbC0xMDMgLTM2MiAxMDIgMCAxMDMgMCAzNCAxMzggMzQgMTM3IDE2NSAzIDE2NSAyIDM0IC0xNDAgMzQgLTE0MSAxMDEgMyBjNTkKMiA5OSA3IDk5IDEzIC0xIDYgLTY5IDI2NSAtMTUwIDU3NyBsLTE0OSA1NjggLTEyMiAwIC0xMjIgMCAtMTYgLTUyeiBtMTk1Ci0zOTQgYzMzIC0xNDIgNjAgLTI2NSA2MCAtMjcxIDAgLTEwIC0zMiAtMTMgLTEyNSAtMTMgLTkzIDAgLTEyNSAzIC0xMjUgMTMKLTEgMTUgMTI0IDUzNiAxMjcgNTMzIDIgLTEgMzAgLTExOSA2MyAtMjYyeiIvPgo8cGF0aCBkPSJNMTEzMCA3ODAgbDAgLTU4MCA5MCAwIDkwIDAgMCA1ODAgMCA1ODAgLTkwIDAgLTkwIDAgMCAtNTgweiIvPgo8cGF0aCBkPSJNMTQ5MCAxMjA1IGwwIC0xMjUgLTYwIDAgLTYwIDAgMCAtNzAgMCAtNzAgNTkgMCA2MCAwIDMgLTMyMiBjMwotMjc3IDUgLTMyNyAxOSAtMzUzIDMzIC01OSA1NCAtNzAgMTQ1IC03NCA0NyAtMSAxMDAgMCAxMTkgMyBsMzUgNyAwIDY5IDAgNzAKLTU0IDAgYy05MCAwIC04NyAtMTIgLTg0IDMxMyBsMyAyODIgNjggMyA2NyAzIDAgNjkgMCA3MCAtNzAgMCAtNzAgMCAwIDEyNSAwCjEyNSAtOTAgMCAtOTAgMCAwIC0xMjV6Ii8+CjxwYXRoIGQ9Ik0yMTk1IDEwODYgYy0zMSAtMTMgLTEwNSAtODggLTEwNSAtMTA2IDAgLTYgLTQgLTEwIC0xMCAtMTAgLTUgMAotMTAgMjUgLTEwIDU1IGwwIDU1IC04NSAwIC04NSAwIDAgLTQ0MCAwIC00NDAgODUgMCA4NSAwIDAgMjc4IGMwIDE2OSA0IDI5MgoxMSAzMTYgNiAyMiAyOSA1OCA1MSA4MCAzOSA0MSA0MCA0MSAxMTQgNDEgbDc0IDAgMCA5MyAwIDkyIC00NyAwIGMtMjcgLTEKLTYxIC03IC03OCAtMTR6Ii8+CjxwYXRoIGQ9Ik0yNDAzIDcxOCBjNCAtMzc4IDcgLTQwNCA1MCAtNDY5IDY2IC0xMDAgMjY2IC05NyAzNTYgNyBsMzAgMzMgMwotNDIgMyAtNDIgODMgLTMgODIgLTMgMCA0NDEgMCA0NDEgLTg3IC0zIC04OCAtMyAtNSAtMzI1IGMtNCAtMjg2IC03IC0zMjkKLTIzIC0zNTcgLTMxIC01OCAtOTkgLTg0IC0xNjIgLTYzIC02NCAyMSAtNjUgMjkgLTY1IDQxMCBsMCAzNDAgLTkxIDAgLTkxIDAKNSAtMzYyeiIvPgo8L2c+Cjwvc3ZnPgo=');
    }`
    }
};