export const PATH_AUTH = {
  login: "/login",
};

export const PATH_MENU = {
  store: {
    main: "/store",
    detail: (id: number) => `/store/${id}`,
  },
  program: {
    main: "/program",
    detail: (id: number) => `/program/${id}`,
  },
  my: {
    main: "/my",
    like: "my/like",
    profil: "my/profil",
  },
  taste: {
    detail: (id: number) => `/taste/${id}`,
  },
};
