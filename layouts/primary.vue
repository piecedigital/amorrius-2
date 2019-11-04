<template>
    <div id="layout-primary">
        <PrimaryNav />
        <div class="page">
            <Nuxt />
        </div>
        <Viewer />
    </div>
</template>

<script lang="ts">
import ConfigFetcher from '../plugins/services/config-fetcher'
export default{
    async mounted() {
        const config = await ((this as any).$configFetcher as ConfigFetcher).getConfig();
        (this as any).$store.commit("config/setConfig", config);
    }
}
</script>

<style lang="scss">
*, *:before, *:after {
    box-sizing: border-box;
}

html {
    font-family: 'Courier New', Courier, monospace;
}

body {
    margin: 0;
}

#layout-primary {
    padding-top: 60px;
}

nav.layout-nav {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: $colorPrimary;
}

.nav-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
}
</style>
