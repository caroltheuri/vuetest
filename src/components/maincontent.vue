<template>
    <div>
        <div id="about">
            <slot name="about"></slot>
            <h2>About</h2>
            <div id="purposes">
            <p :style="{style:font-size + 'px'}">We are a company that offer houses for various reasons and they are: </p>
            <ul>
                <li v-for='house in types'>
                    {{house.houses}}
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  name:'maincontent',
    data(){
      return{
          types: [{
              houses: 'House for Rent',

          },
              {
                  houses: 'House for Ownership',
              },
              {
                  houses: 'House for Investment',
              }
          ],
      }
    }

}
</script>
<style scoped>
#about{
    text-align: center;
    color: cadetblue;
}
    #purposes{
        color:black;
    }
</style>