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
        fullScreenStyles: `position: fixed; padding: 0; margin: 0; width: 100vw;
            height: 100vh; outline: none; border: none; top: 0;left: 0`
    }
};