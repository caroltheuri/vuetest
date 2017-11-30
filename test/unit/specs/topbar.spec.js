import Vue from 'vue'
import topbar from '@/components/topbar'

describe('topbar.vue', ()=>{
    it('should correspond with the name of my vue', ()=>{
        const Constructor=Vue.extend(topbar)
        const vm= new Constructor().$mount() //mount returns the instance of vue component
        expect(vm.$options.name).to.equal('topbar')
    })
})