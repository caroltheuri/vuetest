import maincontent from '@/components/maincontent'
import Vue from 'vue'

describe('maincontent.vue', () => {
    it('displays items from the array', () => {
        const Constructor = Vue.extend(maincontent)
        const vm = new Constructor().$mount()
        expect(vm.$el.textContent).to.contain('House for Rent')
    })
})