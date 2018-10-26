/**
 * Created by liuyinghui on 18/4/27.
 */


import * as types from './mutation-types.js';


export const changeName = ({commit}, newName) => {
    commit(types.CHANGE_NAME, newName);
}

export const changeAge = ({commit}, newAge) => {
    commit(types.CHANGE_AGE, newAge)
}

export const changeObj = ({commit}, newObj) => {
    commit(types.CHANGE_OBJ, newObj)
}
