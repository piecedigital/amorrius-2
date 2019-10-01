<template>
    <nav class="layout-nav">
        <div class="nav-logo">
            <span>AMORRIUS</span>
        </div>
        <div class="nav-user">
            <div v-if="$store.state.auth.accessToken">
                My Profile
            </div>
            <div v-else>
                <a :href="authorizeToken" class="btn btn-secondary">Authorize</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    computed: {
        authorizeCode() {
            const scopes: string[] = [];
            return "https://id.twitch.tv/oauth2/authorize"+
                    "?client_id=ozqkfpois3vgdi1p5qwc0zifqeuuwz"+
                    "&redirect_uri=http://localhost:3000/auth"+
                    "&response_type=code"+
                    "&force_verify=true"+
                    "&scope=" + scopes.join(" ");
        },
        authorizeToken() {
            const scopes: string[] = [];
            return "https://id.twitch.tv/oauth2/authorize"+
                    "?client_id=ozqkfpois3vgdi1p5qwc0zifqeuuwz"+
                    "&redirect_uri=http://localhost:3000/auth"+
                    "&response_type=token"+
                    "&force_verify=true"+
                    "&scope=" + scopes.join(" ");
        }
    }
};
</script>

<style lang="scss">
.layout-nav {
    display: flex;
    justify-content: space-between;
}

.nav-user {
    > div {
        padding-top: 20px;
        padding-right: 10px;
    }
}
</style>