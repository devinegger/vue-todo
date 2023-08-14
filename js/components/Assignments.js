import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-8 p-12 border-double border-8 border-fuchsia-600 rounded-2xl shadow-2xl shadow-fuchsia-400/30">
            <div className="title mb-4 text-center">
                <h1 class="text-4xl mb-4 text-emerald-400">Vue ToDo List<h1>
            </div>
            <assignment-list :assignments="filters.unfinished" title="Unfinished"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: []
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },

    computed: { 
        filters() {
            return {
                unfinished: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                id:this.assignments.length+1, 
                name: name, 
                complete: false,
                tag: 'new'
            });
        }
    }
}