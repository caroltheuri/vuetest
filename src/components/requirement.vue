<template>
<div>
    <div class="grid-x grid-margin-x">
        <div class="large-1 cell"></div>
        <div class="auto cell" >
    <p v-show="ok">{{ok}}</p>
    <input type="radio"  value="You must have savings of more than a 100,000 shillings" v-model="picked">
    <label>Employment</label>
    <br>
    <input type="radio"  value="You must have savings of more than a 400,000 shillings" v-model="picked" >
    <label >Family business</label><br>
    <input type="radio" value="You must have savings of more than a 700,000 shillings" v-model="picked">
    <label>Self-employed</label>
    <br>
            <div class="auto cell" >
    <span>{{picked}}</span>
            </div>
            <br>
            <div class="auto cell" >
                <a class="button primary" @click="subt()">Submit</a>
            </div>
</div>
</div>
</div>

</template>
<script>
    export default{
             name: 'requirement',
            data() {
                return {
                    ok:'What is your source of income',

                    picked:[
                    ],
                }
            },
        methods:{
            subt() {
                alert("we have received your details we will contact you on" + this.phonenumber);
            },
        },
        }

</script>
<style>

</style>