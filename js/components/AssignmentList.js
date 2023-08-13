import Assignment from "./Assignment.js"

export default {
    components: { Assignment },
    template: `
        <section v-show="filteredAssignments.length">
            <h2 class="font-bold mb-2 text-emerald-400">{{ title }} 
                <span>({{ filteredAssignments.length }})</span>
            </h2>
            <div>
                <button 
                    class="border rounded px-1 py-px mr-2 text-xs" 
                    @click="currentTag = 'all'"
                >all</button>
                <button 
                    class="border rounded px-1 py-px mr-2 text-xs" 
                    @click="currentTag = tag"
                    v-for="tag in tags"
                >{{tag}}</button>
            </div>
            <ul class="border border-zinc-600 divide-y divide-zinc-600 rounded-md mt-3">
                <assignment v-for="assignment in filteredAssignments" 
                :key="assignment.id"
                :assignment="assignment"></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array, 
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
        tags() {
            return new Set(this.assignments.map(a => a.tag));
        }
    }
}

