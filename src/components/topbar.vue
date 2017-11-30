<template>
    <div>
        <div id="header">
            <slot name="header"></slot>
            <div class="top-bar">
                <div class="top-bar-left">
                    <div class="menu-text"><strong> House Property</strong></div>
                </div>
                <div class="top-bar-right">
                    <ul class="dropdown menu" data-dropdown-menu>

                        <li>
                            <a href="#">About</a>

                        </li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">land</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'topbar'
    }
</script>
<style scoped>
   .top-bar{
       color: cadetblue;
       font-size: larger;
   }
</style>