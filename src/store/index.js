import axios from "axios";
export default {
    state: {
        user: [],
        token: "",
        isLogged: false,
        search: "",

        berita: [],
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.isLogged = true;
        },
        setUser(state, user) {
            state.user = user;
        },
        setBerita(state, berita) {
            state.berita = berita;
        },

        logout(state) {
            state.token = null;
            state.user = [];
            state.isLogged = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        },
    },
    actions: {
        async getBerita({ commit }) {
            try {
                const { data } = await axios.get("https://prasimax.com/company-be/api/berita");
                const urutkanTerbaru = data.sort((a, b) => {
                    return new Date(b.updatedAt) - new Date(a.updatedAt);
                });
                commit("setBerita", urutkanTerbaru);

            } catch (error) {
                console.log(error);
            }
        }
    }
}