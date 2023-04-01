import { atom, selector } from "recoil";

//todo
//any는 추후 사용할 타입으로 수정 필요
type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean | null;
  user: AuthUser;
};

export const authAtom = atom<AuthState>({
  key: "auth",
  default: {
    isAuthenticated: null,
    user: null,
  },
});

export const changeAuth = selector({
  key: "changeAuth",
  get: (get: any) => {
    const state = get(authAtom);

    return state;
  },
});
