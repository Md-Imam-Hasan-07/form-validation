import { reactive, readonly } from "vue";

const state = reactive({
  users: [] as any,
  isLoggedIn: false as boolean,
  loggedInUser: {} as object,
});

const methods = {
  addUser(payload: any) {
    state.users.push(payload);
  },
  checkCredential(payload: any) {
    state.loggedInUser = payload;
    const isRightUser = state.users.filter(
      (user) =>
        user.email === payload.email && user.password === payload.password
    );
    if (isRightUser.length > 0) {
      state.isLoggedIn = true;
    } else {
      state.isLoggedIn = false;
      return "Invalid email or password";
    }
  },
  logout() {
    state.loggedInUser = {};
    state.isLoggedIn = false;
  },
};

export default { state: readonly(state), methods };
