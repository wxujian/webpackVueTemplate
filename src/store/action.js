/**
 * Created by tengteng on 17/12/27.
 */

const actions = {
  changeUserInfo(store, payload) {
    // commit在vuex有文档，触发mutation
    store.commit({
      type: 'changeUserInfo',
      userInfo: payload
    })
  },
  changeUserXX(store, payload) {
    store.commit({
      type: 'changeUserXX',
      userInfo: payload
    })
  }
};

export default actions;
