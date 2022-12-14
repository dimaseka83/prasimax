import axios from "axios";
export default {
    state: {
        user: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInVzZXJuYW1lIjoiZGhpbXMxMjMzNDUiLCJlbWFpbCI6ImRoaW1hc19mZUBwcmFzaW1heC5jb20iLCJmdWxsbmFtZSI6ImRoaW1hcyIsInBlcnVzYWhhYW4iOiJsa2V3bmRsaWp3ZWQiLCJwcm9mZXNpIjoicGVydXNhaGFhbiIsInRlbGVwb24iOm51bGwsImlzU3Vic2NyaWJlIjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsIkFjdGl2YXRlZHRva2VuIjpudWxsLCJyZXNldFBhc3N3b3JkVG9rZW4iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMTAtMTZUMTI6NTA6MjcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMTZUMTI6NTM6NDMuMDAwWiIsImlhdCI6MTY2NTkyNjMwOH0.r7TQ85EGZ-SotR2y0lz7YV-w45oIyUwFRNbd1E1sMNo",
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