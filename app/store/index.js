export const state = () => ({
    map: {
        state: null
    }
})

export const mutations = {
    upsertMap(state, data) {
        state.map = { ...state.map, ...data }
    }
}

export const actions = {
    upsertMap({commit}, data) {
        commit('upsertMap', data)
    }
}