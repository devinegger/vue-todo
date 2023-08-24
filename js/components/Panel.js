export default {
    template: `
        <div :class="{
            'p-8 border-4 rounded-2xl shadow-lg' : true,
            'bg-zinc-800 border-fuchsia-600 shadow-fuchsia-400/30 text-white' : theme == 'dark',
            'bg-slate-100 border-emerald-400 shadow-emerald-300/30 text-zinc-800': theme == 'light',
        }">
            <h2 v-if="$slots.heading" class="font-bold mb-2 text-emerald-400">
                <slot name="heading" />
            </h2>

            <div class="my-3">    
                <slot />
            </div>

            <footer class="border-t border-fuchsia-400 mt-4 pt-2" v-if="$slots.footer">
                <slot name="footer" />
            </footer>
        </div>
    `,
    props: {
        theme: { type: String, default: 'dark' }
    }
}