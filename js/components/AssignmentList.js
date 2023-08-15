import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <section v-show="filteredAssignments.length">
            <h2 class="font-bold mb-2 text-emerald-400">{{ title }} 
                <span>({{ filteredAssignments.length }})</span>
            </h2>
            <assignment-tags 
                v-model:currentTag="currentTag"
                :data-tags="assignments.map(a=>a.tag)"/>
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
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    }
}

