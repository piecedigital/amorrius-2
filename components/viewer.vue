<template>
    <div class="std-centered-container">
        <h2>Viewer</h2>
        <h3 :key="channel.name" v-for="channel in channels">{{ channel.name }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            channels: ({} as Record<string, Record<string, any>>)
        };
    },
    mounted() {
        this.$root.$on("viewer::channel::add", (channel: Record<string, any>) => {
            this.channels[channel.name] = channel;
            console.log(this.channels);
        });
    }
})
</script>