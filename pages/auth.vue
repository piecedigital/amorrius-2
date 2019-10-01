<template>
    <h1>Redirecting...</h1>
</template>

<script lang="ts">
export default {
    mounted() {
        const hash = location.hash;
        const hashObj: Record<string, any> = {};
        hash.replace(/^./, "").split("&").map(pair => {
            const split: string[] = pair.split("=");
            const key: string = split.shift() || "";
            const value: string = split.shift() || "";
            hashObj[key] = value;
        });
        this.$store.commit("auth/setAccessToken", hashObj.access_token);
        setTimeout(() => {
            this.$router.push("/");
        }, 1000);
    }
} as Record<string, any>;
</script>