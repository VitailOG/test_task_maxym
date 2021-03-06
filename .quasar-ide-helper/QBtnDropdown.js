
/**
 * Quasar QBtnDropdown component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/btn-dropdown|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBtnDropdown',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@update:model-value': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Event} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Event} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted when user clicks/taps on the main button (not the icon one, if using 'split')
     * @param {Event} evt JS event object 
     */      
    '@click': function (evt) {},
    /**
     * Controls Menu show/hidden state; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     * @type {Boolean}
     */
    modelValue: {
      type: Boolean,
    },
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * 1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag
     * @type {String}
     */
    type: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Native <a> link href attribute; Has priority over the 'to' and 'replace' props
     * @type {String}
     */
    href: {
      type: String,
    },
    /**
     * Native <a> link target attribute; Use it only with 'to' or 'href' props
     * @type {String}
     */
    target: {
      type: String,
    },
    /**
     * The text that will be shown on the button
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    iconRight: {
      type: String,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    unelevated: {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a Floating Action Button
     * @type {Boolean}
     */
    fab: {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a small Floating Action Button
     * @type {Boolean}
     */
    fabMini: {
      type: Boolean,
    },
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     * @type {String}
     */
    padding: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    noWrap: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    align: {
      type: String,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="left"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="right"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="center"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="around"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="between"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="evenly"': {
      type: Boolean,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    stack: {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    stretch: {
      type: Boolean,
    },
    /**
     * Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Split dropdown icon into its own button
     * @type {Boolean}
     */
    split: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    dropdownIcon: {
      type: String,
    },
    /**
     * Disable main button (useful along with 'split' prop)
     * @type {Boolean}
     */
    disableMainBtn: {
      type: Boolean,
    },
    /**
     * Disables dropdown (dropdown button if using along 'split' prop)
     * @type {Boolean}
     */
    disableDropdown: {
      type: Boolean,
    },
    /**
     * Disables the rotation of the dropdown icon when state is toggled
     * @type {Boolean}
     */
    noIconAnimation: {
      type: Boolean,
    },
    /**
     * Style definitions to be attributed to the menu
     * @type {String|Array|Object}
     */
    contentStyle: {
      type: [String,Array,Object],
    },
    /**
     * Class definitions to be attributed to the menu
     * @type {String|Array|Object}
     */
    contentClass: {
      type: [String,Array,Object],
    },
    /**
     * Allows the menu to cover the button. When used, the 'menu-self' and 'menu-fit' props are no longer effective
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
    },
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noRouteDismiss: {
      type: Boolean,
    },
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     * @type {Boolean}
     */
    autoClose: {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    menuAnchor: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuAnchor="bottom end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    menuSelf: {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'menuSelf="bottom end"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     * @type {Array}
     */
    menuOffset: {
      type: Array,
    }
  }
}
