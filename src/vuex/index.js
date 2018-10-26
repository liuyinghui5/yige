/**
 * Created by liuyinghui on 18/4/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
    //用户信息
    user: {
        name: "默认名字",
        age: "默认年龄"
    }
}


export default new Vuex.Store({
    mutations,
    actions,
    getters,
    state,
    // modules: {
    //   channels,
    //   users
    // }
})
