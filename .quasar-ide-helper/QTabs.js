
/**
 * Quasar QTabs component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tabs|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTabs',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@update:model-value': function (value) {},
    /**
     * Model of the component defining current panel name; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     * @type {Number|String|null|undefined}
     */
    modelValue: {
      type: [Number,String,null,undefined],
    },
    /**
     * Use vertical design (tabs one on top of each other rather than one next to the other horizontally)
     * @type {Boolean}
     */
    vertical: {
      type: Boolean,
    },
    /**
     * Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)
     * @type {Boolean}
     */
    outsideArrows: {
      type: Boolean,
    },
    /**
     * Force display of arrows (if needed) on mobile
     * @type {Boolean}
     */
    mobileArrows: {
      type: Boolean,
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {'left'|'center'|'right'|'justify'}
     */
    align: {
      type: String,
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {'left'|'center'|'right'|'justify'}
     */
    'align="left"': {
      type: Boolean,
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {'left'|'center'|'right'|'justify'}
     */
    'align="center"': {
      type: Boolean,
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {'left'|'center'|'right'|'justify'}
     */
    'align="right"': {
      type: Boolean,
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {'left'|'center'|'right'|'justify'}
     */
    'align="justify"': {
      type: Boolean,
    },
    /**
     * Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
     * @type {Number|String}
     */
    breakpoint: {
      type: [Number,String],
    },
    /**
     * The color to be attributed to the text of the active tab
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * The color to be attributed to the background of the active tab
     * @type {String}
     */
    activeBgColor: {
      type: String,
    },
    /**
     * The color to be attributed to the indicator (the underline) of the active tab
     * @type {String}
     */
    indicatorColor: {
      type: String,
    },
    /**
     * Class definitions to be attributed to the content wrapper
     * @type {String}
     */
    contentClass: {
      type: String,
    },
    /**
     * The class to be set on the active tab
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    leftIcon: {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    rightIcon: {
      type: String,
    },
    /**
     * When used on flexbox parent, tabs will stretch to parent's height
     * @type {Boolean}
     */
    stretch: {
      type: Boolean,
    },
    /**
     * By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar
     * @type {Boolean}
     */
    shrink: {
      type: Boolean,
    },
    /**
     * Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)
     * @type {Boolean}
     */
    switchIndicator: {
      type: Boolean,
    },
    /**
     * Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab
     * @type {Boolean}
     */
    narrowIndicator: {
      type: Boolean,
    },
    /**
     * Allows the text to be inline with the icon, should one be used
     * @type {Boolean}
     */
    inlineLabel: {
      type: Boolean,
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    }
  }
}
