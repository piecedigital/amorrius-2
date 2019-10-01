import TwitchFetcher from "./services/twitch-fetcher";
import ConfigFetcher from "./services/config-fetcher";

export default function(ctx: any, inject: Function) {
    const twitchFetcher = new TwitchFetcher(ctx);
    inject("twitchFetcher", twitchFetcher);
    ctx.$twitchFetcher = twitchFetcher;

    const configFetcher = new ConfigFetcher(ctx);
    inject("configFetcher", configFetcher);
    ctx.$configFetcher = configFetcher;
}