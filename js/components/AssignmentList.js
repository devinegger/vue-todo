import Assignment from "./Assignment.js"

export default {
    components: { Assignment },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2 text-emerald-400">{{ title }}</h2>
            <ul class="border border-zinc-600 divide-y divide-zinc-600 rounded-md">
                <assignment v-for="assignment in assignments" 
                :key="assignment.id"
                :assignment="assignment"></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array, 
        title: String
    }
}

