<template>
    <div>
        <div id="feedback">
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell" >
                    <br> <p>Kindly give us a feedback</p> <br>
                    <input @keyup.enter="response()"> <br>
                    <span>{{message}}</span>
                </div>



        </div>
    </div>
    </div>
</template>
<script>

export default{
    name: 'footercontent',
    props:['message'],

    data(){
        return{


        }
    },
    methods:{
        response(){
          alert("thankyou we will put your feedback into consideration")
        },
        takemsg(){
            this.$dispatch('custommsg',this.message);
        },

    },




}
</script>
<style>
   #feedback{
       background-color: cadetblue;
       height: 150px;
   }
</style>