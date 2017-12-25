/**
 * Post Message RPC server based on JSON-RPC 2.0 protocol
 */
let _methods = {};

function handlePostMessage (event) {
    let request;
    if (event.originalEvent) event = event.originalEvent;

    if (!event.data ||
        typeof event.data !== 'string' ||
        event.data === '') {
        return;
    }

    try {
        request = JSON.parse(event.data);
    } catch (error) {
        // Do nothing...
    }

    if (!request || request.jsonrpc !== '2.0' || request.error || request.result) {
        return;
    }

    if (typeof _methods[request.method] !== 'function') {
        return _error(event.source, -32601, 'Method not found: ' + request.method, request.id);
    }

    if (request.method && !Array.isArray(request.params)) {
        return _error(event.source, -32700, 'Invalid request', request.id);
    }

    try {
        let result = _methods[request.method].apply(this, request.params);
        Promise.resolve(result).then(function (result) {
            if (!event.source) { // handle cases when the source window not exists anymore:
                return false;
            }
            if (request.id) {
                event.source.postMessage(JSON.stringify({jsonrpc: '2.0', result: result, id: request.id}), '*');
            }
        });
    } catch (error) {
        _error(event.source, -32000, error.message, request.id);
        throw error;
    }

    function _error(source, code, message, id) {
        let json = JSON.stringify({jsonrpc: '2.0', code: code, error: message, id: id || null});
        source && source.postMessage(json, '*');
    }
}

export default function () {
    this.method = function (name, method) {
        _methods[name] = method;
    };
    this.removeMethod = function (name) {
        delete _methods[name];
    };

    this.launch = function () {
        window.addEventListener('message', handlePostMessage);
    };

    this.destroyServer = function () {
        window.removeEventListener('message', handlePostMessage);
    };
}
