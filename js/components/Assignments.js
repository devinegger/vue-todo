import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-8">
            <assignment-list :assignments="filters.unfinished" title="Unfinished"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: "finish project", complete: false},
                {id: 2, name: "read chapter", complete: false},
                {id: 3, name: "turn in homework", complete: true},
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
    }
}