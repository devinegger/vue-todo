export default {
    template: `
        <button :class="{
            'border rounded p-3 px-7': true,
            'bg-blue-300 hover:bg-blue-400': type === 'primary',
            'bg-green-300 hover:bg-green-400': type === 'secondary',
            'bg-grey-300 hover:bg-grey-400': type === 'muted',
            'is-loading': submitting
        }" 
        :disabled="submitting">
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        submitting: {
            type: Boolean,
            default: false
        }
    }
}