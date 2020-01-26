import Vue from 'vue'
import Vuex from 'vuex'
import Firestore from '../firestore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        database: Firestore,
        loading: false
    },
    mutations: {},
    actions: {
        LoadingStart(_Context, _Root) {
            _Context.state.loading = true
            _Root.$Progress.start()
        },
        LoadingEnd(_Context, _Root) {
            _Context.state.loading = false
            _Root.$Progress.finish()
        },
        LoadingFail(_Context, _Root) {
            _Context.state.loading = false
            _Root.$Progress.fail()
        },
    },
    modules: {}
})