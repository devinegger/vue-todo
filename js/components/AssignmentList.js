import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: { Assignment, AssignmentTags, Panel },
    template: `
        <Panel v-show="show && filteredAssignments.length">
            <template #heading>
                {{ title }} 
                <span>({{ filteredAssignments.length }})</span>
            </template>
            <div className="flex justify-between">
                <button v-show="canToggle" class="text-emerald-400" @click="show = ! show">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <assignment-tags 
                v-model:currentTag="currentTag"
                :data-tags="assignments.map(a=>a.tag)"/>
            <ul class="border border-zinc-600 divide-y divide-zinc-600 rounded-md mt-3">
                <assignment v-for="assignment in filteredAssignments" 
                :key="assignment.id"
                :assignment="assignment"></assignment>
            </ul>
            
            <slot></slot>
            
            <template #footer>
                assignment footer
            </template>
        </Panel>
    `,

    props: {
        assignments: Array, 
        title: String,
        canToggle: { type: Boolean, default: false },
    },

    data() {
        return {
            currentTag: 'all',
            show: true
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

