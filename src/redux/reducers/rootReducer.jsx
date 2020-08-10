export default function rootReducer(
  currentState = {
    teamProfiles: [],
    names: ['cang', 'cuong', 'binh', 'jennifer'],
  },
  action
) {
  switch (action.type) {
    case 'CLEAR_ROOT_REDUCER':
      return { ...currentState, aferoAttribute: action.aferoAttribute };

    case 'ADD_NAMES':
      return { ...currentState, teamProfiles: action.teamProfiles };

    case 'get_teamProfiles':
      return { ...currentState, teamProfiles: action.teamProfiles };

    default:
      return currentState;
  }
}
