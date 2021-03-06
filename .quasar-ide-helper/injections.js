import Vue from 'vue';
/**
* Quasar plugins injected to prototype:
* * $q.addressbarColor
* $q.fullscreen
* $q.appVisible
* $q.bottomSheet
* $q.cookies
* $q.dark
* $q.dialog
* $q.loading
* $q.loadingBar
* $q.localStorage
* $q.notify
* $q.platform
* $q.screen
* $q.sessionStorage 
*/
Vue.prototype.$q = {
  addressbarColor : {
  
  
    /**
     * Sets addressbar color (for browsers that support it)
     * @param {String} hexColor Color in hex format
     * @returns  
     */
    set (hexColor) {}
  },
  fullscreen : {
  
    /**
     * Does browser support it?
     * @type {Boolean}
     */
    isCapable: {},
    /**
     * Is Fullscreen active?
     * @type {Boolean}
     */
    isActive: {},
    /**
     * The DOM element used as root for fullscreen, otherwise 'null'
     * @type {Element|null}
     */
    activeEl: {},
  
    /**
     * Request going into Fullscreen (with optional target)
     * @param {Element} [target] Optional Element of target to request Fullscreen on
     * @returns {Promise<void>} A Promise which is resolved when transitioned to fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.
     */
    request (target) {},
    /**
     * Request exiting out of Fullscreen mode
     * @returns {Promise<void>} A Promise which is resolved when exited out of fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.
     */
    exit () {},
    /**
     * Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)
     * @param {Element} [target] Optional Element of target to request Fullscreen on
     * @returns {Promise<void>} A Promise which is resolved when transitioned to / exited out of fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.
     */
    toggle (target) {}
  },
  appVisible : {
  
    /**
     * Does the app have user focus? Or the app runs in the background / another tab has the user's attention (reactive)
     * @type {Boolean}
     */
    appVisible: {},
  
  },
  bottomSheet : {
  
  
    /**
     * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
     * @param {{class : String|Array|Object, style : String|Array|Object, title : String, message : String, actions : Array, grid : Boolean, dark : Boolean, seamless : Boolean, persistent : Boolean}} opts Bottom Sheet options
     * @returns {{onOk : Function, onCancel : Function, onDismiss : Function, hide : Function, update : Function}} Chainable Object
     */
    create (opts) {}
  },
  cookies : {
  
  
    /**
     * Get cookie
     * @param {String} name Cookie name
     * @returns {String|null} Cookie value; Returns null if cookie not found
     */
    get (name) {},
    /**
     * Get all cookies
     * @returns {Object} Object with cookie names (as keys) and their values
     */
    getAll () {},
    /**
     * Set cookie
     * @param {String} name Cookie name
     * @param {String} value Cookie value
     * @param {{expires : Number|String|Date, path : String, domain : String, sameSite : 'Lax'|'Strict'|'None', httpOnly : Boolean, secure : Boolean, other : String}} [options] Cookie options
     * @returns  
     */
    set (name,value,options) {},
    /**
     * Check if cookie exists
     * @param {String} name Cookie name
     * @returns {Boolean} Does cookie exists or not?
     */
    has (name) {},
    /**
     * Remove a cookie
     * @param {String} name Cookie name
     * @param {{path : String, domain : String}} [options] Cookie options
     * @returns  
     */
    remove (name,options) {},
    /**
     * For SSR usage only, and only on the global import (not on $q.cookies)
     * @param {Object} ssrContext SSR Context Object
     * @returns {Object} Cookie object (like $q.cookies) for SSR usage purposes
     */
    parseSSR (ssrContext) {}
  },
  dark : {
  
    /**
     * Is Dark mode active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
    /**
     * Dark mode configuration (not status) (reactive)
     * @type {'auto'|'(Boolean) true'|'(Boolean) false'}
     */
    mode: {},
  
    /**
     * Set dark mode status
     * @param {'(Boolean) true'|'(Boolean) false'|'auto'} status Dark mode status
     * @returns  
     */
    set (status) {},
    /**
     * Toggle dark mode status
     * @returns  
     */
    toggle () {}
  },
  dialog : {
  
  
    /**
     * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
     * @param {{class : String|Array|Object, style : String|Array|Object, title : String, message : String, html : Boolean, position : 'top'|'right'|'bottom'|'left'|'standard', prompt : {model : String, type : String, isValid : Function, attrs : Object, label : String, stackLabel : Boolean, filled : Boolean, outlined : Boolean, standout : Boolean|String, rounded : Boolean, square : Boolean, counter : Boolean, maxlength : String|Number, prefix : String, suffix : String}, options : {model : String|Array, type : 'radio'|'checkbox'|'toggle', items : Array, isValid : Function}, progress : Boolean|{spinner : Component, color : String}, ok : String|{...props : *}|Boolean, cancel : String|{...props : *}|Boolean, focus : 'ok'|'cancel'|'none', stackButtons : Boolean, color : String, dark : Boolean, persistent : Boolean, noEscDismiss : Boolean, noBackdropDismiss : Boolean, noRouteDismiss : Boolean, seamless : Boolean, maximized : Boolean, fullWidth : Boolean, fullHeight : Boolean, transitionShow : String, transitionHide : String, component : Component|String, componentProps : Object}} opts Dialog options
     * @returns {{onOk : Function, onCancel : Function, onDismiss : Function, hide : Function, update : Function}} Chainable Object
     */
    create (opts) {}
  },
  loading : {
  
    /**
     * Is Loading active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Activate and show
     * @param {{delay : Number, message : String, html : Boolean, boxClass : String, spinnerSize : Number, spinnerColor : String, messageColor : String, backgroundColor : String, spinner : Component, customClass : String, ignoreDefaults : Boolean}} [opts] All props are optional
     * @returns  
     */
    show (opts) {},
    /**
     * Hide it
     * @returns  
     */
    hide () {},
    /**
     * Merge options into the default ones
     * @param {{delay : Number, message : String, spinnerSize : Number, spinnerColor : String, messageColor : String, backgroundColor : String, spinner : Component, customClass : String}} opts Pick the subprop you want to define
     * @returns  
     */
    setDefaults (opts) {}
  },
  loadingBar : {
  
    /**
     * Is LoadingBar active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Notify bar you've started a background activity
     * @param {Number} [speed] Delay (in milliseconds) between bar progress increments
     * @returns  
     */
    start (speed) {},
    /**
     * Notify bar one background activity has finalized
     * @returns  
     */
    stop () {},
    /**
     * Manually trigger a bar progress increment
     * @param {Number} [amount] Amount (0.0 < x < 1.0) to increment with
     * @returns  
     */
    increment (amount) {},
    /**
     * Set the inner QAjaxBar's props
     * @param {Object} props QAjaxBar component props
     * @returns  
     */
    setDefaults (props) {}
  },
  localStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {Date|RegExp|Number|Boolean|Function|Object|Array|String|null} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {Number|null} Storage item index
     */
    getIndex (index) {},
    /**
     * Get the storage key at specific index
     * @param {Number} index Entry index
     * @returns {String|null} Storage key
     */
    getKey (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Retrieve all keys in storage
     * @returns {Array} Storage keys (Array of Strings)
     */
    getAllKeys () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {Date|RegExp|Number|Boolean|Function|Object|Array|String|null} value Entry value
     * @returns  
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns  
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns  
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  },
  notify : {
  
  
    /**
     * Creates a notification; Same as calling $q.notify(...)
     * @param {{type : String, color : String, textColor : String, message : String, caption : String, html : Boolean, icon : String, iconColor : String, iconSize : String, avatar : String, spinner : Boolean|Component, spinnerColor : String, spinnerSize : String, position : 'top-left'|'top-right'|'bottom-left'|'bottom-right'|'top'|'bottom'|'left'|'right'|'center', group : Boolean|String|Number, badgeColor : String, badgeTextColor : String, badgePosition : 'top-left'|'top-right'|'bottom-left'|'bottom-right', badgeStyle : String|Array|Object, badgeClass : String|Array|Object, progress : Boolean, progressClass : String|Array|Object, classes : String, attrs : Object, timeout : Number, actions : Array, onDismiss : Function, closeBtn : Boolean|String, multiLine : Boolean, ignoreDefaults : Boolean}|String} opts Notification options
     * @returns {Function} Calling this function with no parameters hides the notification; When called with one Object parameter (the original notification must NOT be grouped), it updates the notification (specified properties are shallow merged with previous ones; note that group and position cannot be changed while updating and so they are ignored)
     */
    create (opts) {},
    /**
     * Merge options into the default ones
     * @param {Object} opts Notification options (See 'opts' param of 'create()' for object properties)
     * @returns  
     */
    setDefaults (opts) {},
    /**
     * Register a new type of notification (or override an existing one)
     * @param {String} typeName Name of the type (to be used as 'type' prop later on)
     * @param {Object} typeOpts Notification options (See 'opts' param of 'create()' for object properties)
     * @returns  
     */
    registerType (typeName,typeOpts) {}
  },
  platform : {
  
    /**
     * Client browser User Agent
     * @type {String}
     */
    userAgent: {},
    /**
     * Client browser details (property names depend on browser)
     * @type {{name : String, platform : String, version : String, versionNumber : Number, desktop : Boolean, mobile : Boolean, electron : Boolean, bex : Boolean, capacitor : Boolean, cordova : Boolean, nativeMobile : Boolean, nativeMobileWrapper : 'cordova'|'capacitor', chrome : Boolean, firefox : Boolean, safari : Boolean, edgeChromium : Boolean, edge : Boolean, opera : Boolean, vivaldi : Boolean, win : Boolean, linux : Boolean, mac : Boolean, cros : Boolean, android : Boolean, ios : Boolean, winphone : Boolean, iphone : Boolean, ipad : Boolean, ipod : Boolean, kindle : Boolean, silk : Boolean}}
     */
    is: {},
    /**
     * Client browser detectable properties
     * @type {{touch : Boolean, webStorage : Boolean}}
     */
    has: {},
    /**
     * Client browser environment
     * @type {{iframe : Boolean}}
     */
    within: {},
  
    /**
     * For SSR usage only, and only on the global import (not on $q.platform)
     * @param {Object} ssrContext SSR Context Object
     * @returns {Object} Platform object (like $q.platform) for SSR usage purposes
     */
    parseSSR (ssrContext) {}
  },
  screen : {
  
    /**
     * Screen width (in pixels) (reactive)
     * @type {Number}
     */
    width: {},
    /**
     * Screen height (in pixels) (reactive)
     * @type {Number}
     */
    height: {},
    /**
     * Tells current window breakpoint (reactive)
     * @type {'xs'|'sm'|'md'|'lg'|'xl'}
     */
    name: {},
    /**
     * Breakpoints (in pixels) (reactive)
     * @type {{sm : Number, md : Number, lg : Number, xl : Number}}
     */
    sizes: {},
    /**
     * Tells if current screen width is lower than breakpoint-name (reactive)
     * @type {{sm : Boolean, md : Boolean, lg : Boolean, xl : Boolean}}
     */
    lt: {},
    /**
     * Tells if current screen width is greater than breakpoint-name (reactive)
     * @type {{xs : Boolean, sm : Boolean, md : Boolean, lg : Boolean}}
     */
    gt: {},
    /**
     * Current screen width fits exactly 'xs' breakpoint (reactive)
     * @type {Boolean}
     */
    xs: {},
    /**
     * Current screen width fits exactly 'sm' breakpoint (reactive)
     * @type {Boolean}
     */
    sm: {},
    /**
     * Current screen width fits exactly 'md' breakpoint (reactive)
     * @type {Boolean}
     */
    md: {},
    /**
     * Current screen width fits exactly 'lg' breakpoint (reactive)
     * @type {Boolean}
     */
    lg: {},
    /**
     * Current screen width fits exactly 'xl' breakpoint (reactive)
     * @type {Boolean}
     */
    xl: {},
  
    /**
     * Override default breakpoint sizes
     * @param {{sm : Number, md : Number, lg : Number, xl : Number}} breakpoints Pick what you want to override
     * @returns  
     */
    setSizes (breakpoints) {},
    /**
     * Debounce update of all props when screen width/height changes
     * @param {Number} amount Amount in milliseconds
     * @returns  
     */
    setDebounce (amount) {}
  },
  sessionStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {Date|RegExp|Number|Boolean|Function|Object|Array|String|null} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {Number|null} Storage item index
     */
    getIndex (index) {},
    /**
     * Get the storage key at specific index
     * @param {Number} index Entry index
     * @returns {String|null} Storage key
     */
    getKey (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Retrieve all keys in storage
     * @returns {Array} Storage keys (Array of Strings)
     */
    getAllKeys () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {Date|RegExp|Number|Boolean|Function|Object|Array|String|null} value Entry value
     * @returns  
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns  
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns  
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  }
}