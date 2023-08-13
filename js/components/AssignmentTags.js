export default {
    template: `
        <div>
            <button 
                class="border rounded px-1 py-px mr-2 text-xs" 
                :class="{
                    'border-fuchsia-600 text-fuchsia-600' : tag === currentTag
                }"
                @click="$emit('setTag', tag)"
                v-for="tag in tags"
            >{{tag}}</button>
        </div>
    `,
    props: {
        dataTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return['all', ... new Set(this.dataTags)];
        }
    },
}