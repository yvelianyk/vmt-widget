# Venue Mapping Tool Widget

## Implementation Guide
> **Note:** VMT Widget was bundled and exported as [UMD] module, so you can:

1. Install vmt-widget package via [bower]:
    - add __'vmt-widget'__ dependency to the **bower.json** file(example):
    ```
    {
      "name": "vmt-widget-example",
      "version": "0.0.1",
      "dependencies": {
        "vmt-widget": "git@github.com:yvelianyk/vmt-widget.git"
      }
    }

    ```
    - install __bower__ dependencies:
    ```
    bower install
	```
	- include VMT Widget script into your **index.html** file:
	```html
	    
    <script src="bower_components/vmt-widget/dist/bundle.js"></script>
    ```
    - get __VMTWidget__ variable from global __window__ scope:
    ```js
    let vmtWidget = VMTWidget.default;
    ```
2.  Install __vmt-widget__ package via [npm]:
    - install dependency:
    ```
    npm i -save git+ssh://git@github.com:yvelianyk/vmt-widget.git
    ```   
	- import VMT widget in some of your __*.js__ file:
	```js
	import vmtWidget from 'vmt-widget';
	```
	
## Usage
1. Launching VMT widget:
    - get vmtWidget instance:
    ```js
    import vmtWidget from 'vmt-widget';
    ```
    OR(if __VMTWidget__ variable is in global *window* scope)
    ```js
    let vmtWidget = VMTWidget.default;
    ```
    - launch widget with options(example):
    ```js
    vmtWidget.launch({
       containerId: 'venue-mapping-tool', // html element id in which VMT widget will be load
       apiPoint: 'http://some.api.host',
       memberId: 123,
       venueId: 123,
       mode: 'tickets', // can be also 'picker'. If undefined it means 'edit' mode
       token: 'someAccessToken',
       styles: 'someCssProp: 10px;', // inject custom inline css styles for iframe (optionally)
       eventId: 123});
    ```
2. Listen VMT Widget internal methods calling:
    - when user checkout some tickets(in the __picker__ mode) we need register method for it. 
    Callback function receives *token* and *tickets* parameters.\n
    Example:
    ```js
    vmtWidget.method('checkoutTickets', function (token, tickets) {
        console.log('CHECKOUT TICKETS: ', token, tickets);
        return {success: true, message: `${tickets.length} ticket was checkout successfully!`};
    });
    ```
    - also, VMT Widget provides __onClose__ hook for catching event when VMT Widget was closed:    
    ```js
    vmtWidget.onClose(() => {
        console.log('WIDGET WAS CLOSED');
    });
    ```


[bower]: <https://bower.io/>
[npm]: <https://www.npmjs.com/>
[UMD]: <https://github.com/umdjs/umd>