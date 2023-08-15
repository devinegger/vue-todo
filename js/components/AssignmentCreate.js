export default {
    template: `
        <div className="mt-6">
            <form @submit.prevent="add">
                <div class="flex justify-between text-white">
                    <input placeholder="New Assignment..."
                        v-model="newAssignment"
                        class="p-2 border border-zinc-200 bg-zinc-900 rounded-md w-full" />
                    <button type="submit" class="bg-emerald-600 px-4 py-2 ml-2 rounded-md">Add</button>
                </div>
            </form>
        </div>
        `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}