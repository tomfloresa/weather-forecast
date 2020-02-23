const INITIAL_STATE = {
  deployed: false
};

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEPLOY_LOADER":
      return {
        deployed: true
      };
    case "CLOSE_LOADER":
      return {
        deployed: false
      };
    default:
      return state;
  }
};

export default loaderReducer;
