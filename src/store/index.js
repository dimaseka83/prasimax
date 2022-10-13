export default {
    state: {
        user: [],
        token: null,
        isLogged: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.isLogged = true;
        },
        setUser(state, user) {
            state.user = user;
        },
        logout(state) {
            state.token = null;
            state.user = [];
            state.isLogged = false;
        },
    },
}