<template>
    <div v-show="channels" class="std-centered-container search-results channel">
        <ul class="results-list">
            <li :key="index" v-for="(channel, index) in channels" class="results-list-item">
                <a :href="`https://twitch.tv/${channel.name}`" @click="e => e.preventDefault()">
                    <div>{{ channel.name }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            channels: ([] as Record<string, any>[])
        };
    },
    mounted() {
        this.$root.$on("search::results::channels", (data: Record<string, any>) => {
            this.channels = data.channels;
        });
    }
})
</script>

<style lang="scss">
.search-results {
    &.channel {}
    .results-list {
        min-width: 500px;
        max-width: 600px;
        margin: 0;
        padding: 0;
        .results-list-item {
            position: relative;
            width: 100%;
            background-color: $colorPrimary;
            padding: 16px;
            list-style-type: none;
            &:first-child {
                border-radius: 5px 5px 0 0;
            }
            &:last-child {
                border-radius: 0 0 5px 5px;
            }
            &:not(:last-child) {
                &:after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                    width: 80%;
                    height: 1px;
                    background-color: white;
                }
            }
            &:hover {
                background-color: $colorSecondary;
                cursor: pointer;
            }
        }
    }
}
</style>