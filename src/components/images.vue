<template>
    <div>
        <div id="images">
            <slot name="gallery"></slot>
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell">
                    <img src="../assets/investment.jpeg">
                    <p>This house is for rent. (1)</p>
                </div>
                <div class="auto cell">
                    <img src="../assets/pexels-photo-323780.jpeg">
                    <p>This house is for ownership. (2)</p>
                </div>
                <div class="auto cell">
                    <img src="../assets/rent.jpeg">
                    <p>This house is for investment. (3)</p>
                </div>
                <div class="auto cell" id="theme">
                    <p>{{theme}}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        name:'images',
        props:['theme'],
    }
</script>
<style scoped>
    #images{
        width:80%;
        height:80%;
        align-content: center;
    }

</style>