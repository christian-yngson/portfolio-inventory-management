const Routes = {
  home: () => "/",
  login: () => "/login",
  protected: {
    dashboard: {
      root: () => "/dashboard",
    },
    products: {
      root: () => "/products",
      add: () => "/products/add",
    },
  },
} as const;

export default Routes;
