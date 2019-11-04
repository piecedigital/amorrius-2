<template>
    <div :id="`channel-${channel}`">
        <h3>{{ channel }}</h3>
        <div class="embed"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare global {
    namespace Twitch {
        class Embed {
            constructor(selector: string, options: Record<string, any>)
        }
    }
}

export default Vue.extend({
    props: {
        channel: String
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        (this.player as any as Twitch.Embed) = new Twitch.Embed(`channel-${this.channel}`, {
            channel: this.channel
        });
    }
})
</script>