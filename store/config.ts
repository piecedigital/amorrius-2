export const state = () => ({
    clientID: ""
})

export const mutations = {
    setConfig(state: Record<string, any>, config: Record<string, any>) {
        state.clientID = config.clientID
    },
    setClientID(state: Record<string, any>, clientID: string) {
        state.clientID = clientID
    }
}

export const getters = {
    clientID: (state: Record<string, any>) => state.clientID
}