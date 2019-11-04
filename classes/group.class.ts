import { ChannelInterface } from "~/interfaces/interfaces";

export default class Group {
    maxGroupSize: number = 6;
    channels: Record<string, ChannelInterface>;
    channelList: string[];
    channelOrder: Record<number, string>;

    constructor() {
        this.channels = {};
        this.channelList = [];
        this.channelOrder = {};
    }

    add(channel: ChannelInterface) {
        this.channels[channel.name] = channel;
        this.channelList.push(channel.name);

        let index = 0;
        for (let i = 0; i < 6; i++) {
            if (!this.channelOrder[i]) {
                this.channelOrder[i] = channel.name;
                break;
            }
        }
    }

    isFull(): boolean {
        return this.channelList.length >= 6;
    }

    hasChannel(channelName: string): boolean {
        return this.channelList.indexOf(channelName) >= 0;
    }
}