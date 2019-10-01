import fetch from "node-fetch";

export default class TwitchFetcher {
    ctx: any;
    helixAPIBase: string = "https://api.twitch.tv/helix/";
    krakenAPIBase: string = "https://api.twitch.tv/kraken/";

    constructor(ctx: any) {
        this.ctx = ctx;
    }

    get helixHeaders(): Record<string, any> {
        return {
            "Client-ID": this.ctx.store.state.config.clientID
        };
    };

    get krakenHeaders(): Record<string, any> {
        return {
            "Accept": "application/vnd.twitchtv.v5+json",
            "Client-ID": this.ctx.store.state.config.clientID
        };
    };

    getChannelsByName(channelName: string, limit: number = 10, pageIndex: number = 0) {
        if (!this.ctx.store.state.config.clientID) {
            return new Promise((res, rej) => {
                rej("No client ID");
            });
        }
        return fetch(this.krakenAPIBase + `search/channels?query=${channelName}&limit=${limit}&offset=${limit * pageIndex}`, {
            headers: this.krakenHeaders
        })
            .then(res => res.json())
            .then((res: Record<string, any>) => {
                return res;
            })
            .catch(e => console.error(e))
    }
}
