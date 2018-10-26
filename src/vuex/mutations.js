import * as types from './mutation-types.js';


export default {
    [types.CHANGE_NAME] (state, newName) {
        state.user.name = newName;
    },
    [types.CHANGE_AGE] (state, newAge) {
        state.user.age = newAge;
    },
    [types.CHANGE_OBJ] (state, newObj) {
        state.user = newObj;
    }

}
