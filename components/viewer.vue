<template>
    <div id="viewer" class="viewer">
        <div v-for="(group, index) in groups" :key="`key-viewer-${index}`" class="viewer-group">
            <div class="std-centered-container">
                <h2>Viewer</h2>
                <StreamPlayer :key="channel" v-for="channel in group.channelList" v-bind:channel="channel" />
            </div>
        </div>
        <div v-for="(group, index) in groups" :key="`key-chat-${index}`" class="chat-group">
            <div class="std-centered-container">
                <h2>Chat</h2>
                <iframe
                    :key="channel"
                    v-for="channel in group.channelList"
                    :class="`chat-embed chat-${channel}`"
                    frameborder="0"
                    scrolling="no"
                    :src="`https://www.twitch.tv/embed/${channel}/chat`">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChannelInterface } from "~/interfaces/interfaces";
import Group from "~/classes/group.class";

import StreamPlayer from "~/components/stream-player.vue";

export default Vue.extend({
    head() {
        return {
            script: [
                {
                    src: "https://player.twitch.tv/js/embed/v1.js"
                }
            ]
        }
    },
    components: {
        StreamPlayer
    },
    data() {
        return {
            groups: ([] as Group[])
        };
    },
    mounted() {
        this.groups.push(new Group());
        this.$root.$on("viewer::channel::add", (channel: ChannelInterface) => this.addChannel(channel));
    },
    methods: {
        addChannel(channel: ChannelInterface) {
            let added = false;

            for (let i = 0; i < this.groups.length; i++) {
                const group = this.groups[i];

                if (group.hasChannel(channel.name)) {
                    added = true;
                    break;
                }

                if (group.isFull()) {
                    continue;
                }

                group.add(channel);
                added = true;
                this.$root.$emit("message::notification", `Channel ${channel.name} added to group ${i}`);
                break;
            }

            if (!added) {
                const index = this.groups.length;
                const newGroup = new Group();
                newGroup.add(channel);
                this.groups.push(newGroup);

                this.$root.$emit("message::notification", `Channel ${channel.name} added to group ${index}`);
            }
        }
    }
})
</script>

<style lang="scss">
.viewer-group {
    border: 2px solid blue;
}
</style>