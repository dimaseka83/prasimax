export default {
    state: {
        user: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsInVzZXJuYW1lIjoiZGhpbXMxMjMzNDUiLCJlbWFpbCI6ImRoaW1hc19mZUBwcmFzaW1heC5jb20iLCJmdWxsbmFtZSI6ImRoaW1hcyIsInBlcnVzYWhhYW4iOiJsa2V3bmRsaWp3ZWQiLCJwcm9mZXNpIjoicGVydXNhaGFhbiIsInRlbGVwb24iOm51bGwsImlzU3Vic2NyaWJlIjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsIkFjdGl2YXRlZHRva2VuIjpudWxsLCJyZXNldFBhc3N3b3JkVG9rZW4iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjItMTAtMTZUMTI6NTA6MjcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMTZUMTI6NTM6NDMuMDAwWiIsImlhdCI6MTY2NTkyNjMwOH0.r7TQ85EGZ-SotR2y0lz7YV-w45oIyUwFRNbd1E1sMNo",
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