export default function Update(state, payload) {
    return {
      ...state,
      yourDetails: {
        ...state.yourDetails,
        ...payload
      }
    };
  }