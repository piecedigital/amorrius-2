<template>
    <div class="std-centered-container search-form-container">
        <h3 v-show="withTitle">Search</h3>
        <form @submit="submitSearch">
            <input type="text" v-model="searchQuery">
            <button class="btn btn-primary">Search</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TwitchFetcher from "../plugins/services/twitch-fetcher";

export default Vue.extend({
    props: {
        withTitle: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            searchQuery: ""
        };
    },
    methods: {
        async submitSearch(e: Event) {
            e.preventDefault();
            const searchResults = await ((this as any).$twitchFetcher as TwitchFetcher).getChannelsByName(this.searchQuery);
            this.$root.$emit("search::results::channels", searchResults);
        }
    }
});
</script>
