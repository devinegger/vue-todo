import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-8">
            <assignment-list :assignments="filters.unfinished" title="Unfinished"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: "Finish The Damn Project", complete: false},
                {id: 2, name: "Read Chapter 11", complete: false},
                {id: 3, name: "Turn In My Effin Homework", complete: true},
            ]
        }
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
                complete: false
            });
        }
    }
}