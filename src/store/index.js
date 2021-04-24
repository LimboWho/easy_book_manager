import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        tagsList: [],
        collapse: false,
        hasLogin: false,
        userInfo: {},
        token: ''
    },
    mutations: {

        setToken(state, token) {
            state.token = token
            localStorage.token = token //同步存储token至localStorage
        },

        // login(state, provider) {

        //     state.hasLogin = true;
        //     state.userInfo = provider;
        //     localStorage({ //缓存用户登陆状态
        //         key: 'userInfo',
        //         data: provider
        //     })
        //     // console.log(state.userInfo);
        // },
        // logout(state) {
        //     state.hasLogin = false;
        //     state.userInfo = {};
        //     uni.removeStorage({
        //         key: 'userInfo'
        //     })
        // },

        delTagsItem(state, data) {
            state
                .tagsList
                .splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state
                .tagsList
                .push(data)
        },
        clearTags(state) {
            state.tagsList = []
        },
        closeTagsOther(state, data) {
            state.tagsList = data;
        },
        closeCurrentTag(state, data) {
            for (let i = 0, len = state.tagsList.length; i < len; i++) {
                const item = state.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data
                            .$router
                            .push(state.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data
                            .$router
                            .push(state.tagsList[i - 1].path);
                    } else {
                        data
                            .$router
                            .push("/");
                    }
                    state
                        .tagsList
                        .splice(i, 1);
                    break;
                }
            }
        },
        // 侧边栏折叠
        hadndleCollapse(state, data) {
            state.collapse = data;
        }
    },
    getters: {
        getToken(state) {
            if (!state.token) {
                state.token = localStorage.getItem('token')
            }
            return state.token
        }
    },
    actions: {},
    modules: {}
})