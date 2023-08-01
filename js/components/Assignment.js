export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center" for="input{{assignment.id}}">
                {{ assignment.name}}
                <input class="ml-20" id="{{input{{assignment.id}}}}" type="checkbox" 
                    v-model="assignment.complete">
            </label>
        </li>
    `, 
    props: {
        assignment: Object
    }    
}