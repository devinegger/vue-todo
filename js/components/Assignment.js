export default {
    template: `
        <li>
            <label for="input{{assignment.id}}">
                {{ assignment.name}}
                <input id="{{input{{assignment.id}}}}" type="checkbox" 
                    v-model="assignment.complete">
            </label>
        </li>
    `, 
    props: {
        assignment: Object
    }    
}