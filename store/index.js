export const state = () => ({
    panier: [{ test: 0 }]
})

export const mutations = {
    addToPanier(state, item) {
        state.panier = item
    }
}