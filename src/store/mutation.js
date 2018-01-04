/**
 * Created by tengteng on 17/12/27.
 */
// 修改数据，是同步请求
const mutations = {
  changeUserInfo(state, payload) {
    state.userInfo = payload.userInfo;
  },
  changeUserXX(state, payload) {
    state.userXX = payload.userInfo;
  }
};

export default mutations;
