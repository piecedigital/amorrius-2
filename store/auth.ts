export const state = () => ({
    accessToken: ""
})

export const mutations = {
    setAccessToken(state: Record<string, any>, accessToken: string) {
        state.accessToken = accessToken
    }
}

export const getters = {
    accessToken: (state: Record<string, any>) => state.accessToken
}