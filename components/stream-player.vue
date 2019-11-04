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
        class Player {
            constructor(selector: string, options: Record<string, any>);
            // event const
            ENDED: "ended";
            PAUSE: "pause";
            PLAY: "play";
            PLAYBACK_BLOCKED: "playbackBlocked";
            PLAYING: "playing";
            OFFLINE: "offline";
            ONLINE: "online";
            READY: "ready";
            // playback API
            play: () => void;
            pause: () => void;
            seek: (timestampFloat: number) => void;
            setChannel: (channel:String) => void;
            setCollection: (collectionId: string, videoId: string) => void;
            setQuality: (quality: string) => void;
            setVideo: (videoId: string, timestampFloat: number) => void;
            // volume API
            getMuted: () => boolean;
            setMuted: (muted:Boolean) => void;
            getVolume: () => void;
            setVolume: (volumeFloat: number) => void;
            // status API
            getChannel: () => string;
            getCurrentTime: () => number;
            getDuration: () => number;
            getEnded: () => boolean;
            getPlaybackStats: () => object;
            getQualities: () => string;
            getQuality: () => string;
            getVideo: () => string;
            isPaused: () => boolean;
        }
        /*
        class Embed {
            constructor(selector: string, options: Record<string, any>);
            VIDEO_PLAY: "video.play";
            VIDEO_READY: "video.ready";
            VIDEO_PAUSE: "video.pause";
            addEventListener: (event: "video.play" | "video.ready" | "video.pause", callback: () => void) => void;
            getPlayer: () => Player;
        }
        */
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
        (this.player as any as Twitch.Player) = new Twitch.Player(`channel-${this.channel}`, {
            channel: this.channel,
            layout: "video"
        });
    }
})
</script>