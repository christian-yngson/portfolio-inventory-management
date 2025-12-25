const Routes = {
  home: () => "/",
  login: () => "/login",
  protected: {
    dashboard: {
      root: () => "/dashboard",
    },
  },
} as const;

export default Routes;
