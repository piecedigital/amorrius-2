import fetch from "node-fetch";

export default class ConfigFetcher {
    ctx: any;
    APIBase: string = "/api/";

    constructor(ctx: any) {
        this.ctx = ctx;
    }

    getConfig() {
        return fetch(this.APIBase + `get-config`)
            .then(res => res.json())
            .then((res: Record<string, any>) => {
                return res.data;
            })
            .catch(e => console.error(e))
    }
}
