<template>
    <div>
        <topbar>
           <div slot="header">

           </div>
        </topbar>

        <maincontent>
            <div slot="about">

            </div>
        </maincontent>
        <images :theme="theme">
            <div slot="gallery">

            </div>
        </images>
        <hr>
        <category>
            <div slot="categories"></div>

        </category>
        <hr>
        <forminput :theme="theme">
     <div slot="formdetails"></div>
        </forminput>
        <keep-alive>
            <component :is="currentView">

            </component>
        </keep-alive>
        <requirement>

        </requirement>
        <footercontent message="">

        </footercontent>

    </div>
</template>

<script>
    import topbar from './topbar'
    import maincontent from './maincontent'
    import images from './images'
    import category from './category'
    import forminput from './forminput'
    import selection from './selection'
    import requirement from './requirement'
    import footercontent from './footercontent'

    export default {

        data() {
            return {
currentView:'selection',
                message:'',
                theme:'HS',
            }
        },

        methods: {

        },

        components: {
            topbar,
            maincontent,
            images,
            category,
            forminput,
            selection,
            requirement,
            footercontent,
        },



    }

</script>