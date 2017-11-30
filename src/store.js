import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        rentHouses: [
            {
                name: 'Alma',
                location: 'Westlands',
                Price:50454534
            },
            {
                name: 'Juja apartments',
                location: 'Juja',
                Price:2000000
            }
        ],

        ownHouses: [
            {
                name:'Thika gardens',
                location:'Thika ',
                Price:15000000
            },
            {
                name:'Lavington heights',
                location:'Lavington',
                Price:20500000
            },
        ],

        investHouses: [
            {
                name:'Kahawa condos',
                location:'Kahawa west',
                Price:500000
            },
            {
                name:'Riara mansions',
                location:'Riara roadside',
                Price:800000
            },
        ],
    },
    //getters object add functionalities to the object
    getters:{
        rentDiscounts:state =>{
            var rentDiscounts =state.rentHouses.map(house =>{
             return{
                 name:`Name: ${house.name}`,
                 location:`Location: ${house.location}`,
                 Price:`Price: ${house.Price} with a discount of 15% amounting to: ${house.Price*0.85} after discount`,
             }

         });
   return rentDiscounts;

        },
        ownDiscounts:state =>{
            var ownDiscounts =state.ownHouses.map(house =>{
                return{
                    name:`Name: ${house.name}`,
                    location:`Location: ${house.location}`,
                    Price:`Price: ${house.Price} with a discount of 15% amounting to: ${house.Price*0.85} after discount`,
                }

            });
            return ownDiscounts;

        },
        investDiscounts:state =>{
            var investDiscounts =state.investHouses.map(house =>{
                return{
                    name:`Name: ${house.name}`,
                    location:`Location: ${house.location}`,
                    Price:`Price: ${house.Price} with a discount of 15% amounting to: ${house.Price*0.85} after discount`,
                }

            });
            return investDiscounts;

        }
    },
//mutations
    mutations:{
     changeCurrency:state=>{
      state.rentHouses.forEach(house=>{
          house.Price=`$ ${(house.Price)/103}`;
      })
         state.ownHouses.forEach(house=>{
             house.Price=`$ ${(house.Price)/103}`;
         })
         state.investHouses.forEach(house=>{
             house.Price=`$ ${(house.Price)/103}`;
         })
         return changeCurrency;
     },
    },

});