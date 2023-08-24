import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },
    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            <panel>
                Default content
            </panel>
            <panel>
                <template v-slot:heading>
                    this is the heading
                </template>
                
                Default content
            </panel>
            <panel>
                <template v-slot:heading>
                    this is the heading
                </template>
                
                Default content

                <template v-slot:footer>
                    <button class="bg-emerald-600 text-white p-2 rounded-md">Sign up now</button>
                </template>
            </panel>
            <panel theme="light">
                <template v-slot:heading>
                    this is the heading
                </template>
                
                Default content

                <template v-slot:footer>
                    <button class="bg-emerald-600 text-white p-2 rounded-md">Sign up now</button>
                </template>
            </panel>
        </div>

    `
}