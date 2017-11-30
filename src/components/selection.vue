<template>
    <div>
        <div class="grid-x grid-margin-x">
            <div class="large-1 cell"></div>
            <div class="auto cell">
                <select v-model="selected" id="options">
                    <option v-for="choice in choices" v-bind:value="choice.value">
                        {{choice.number}}
                    </option>
                </select>
    </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'selection',
        data(){
            return{
                display: true,
                selected: "1",
                choices: [{
                    number: 'Rent',
                    value: '1'

                },
                    {
                        number: 'Ownership',
                        value: '2'
                    },
                    {
                        number: 'Investment',
                        value: '3'
                    }
                ]
            }
        }
    }
</script>