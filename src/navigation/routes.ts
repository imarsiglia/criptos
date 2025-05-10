export const ROUTES = {
    HOME: "Home",
    DETAIL: "Detail",
  } as const;

  export type RouteNames = (typeof ROUTES)[keyof typeof ROUTES];