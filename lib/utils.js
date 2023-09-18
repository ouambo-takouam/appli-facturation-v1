import navigationObject from "./navigation-items.json";

export const getNavigationPathData = (currentPath) => {
  switch (currentPath) {
    case "/get-things-done":
      return undefined;
    case "/business-overview":
    case "/cashflow-global-overview":
    case "/reports":
      return navigationObject["/business-overview"];
    case "/banking":
    case "/olbrules":
    case "/chartofaccounts":
    case "tags":
    case "reconcile":
      return navigationObject["/banking"];
    case "/customers":
    case "/items":
    case "/vendors":
      return navigationObject["/customers"];
    default:
      return undefined;
  }
};
