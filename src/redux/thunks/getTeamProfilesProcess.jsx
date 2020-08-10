export default function getTeamProfilesProcess() {
  return async (dispatch, getState) => {
    let teamProfiles = [
      {
        id: 'profile01-item',
        name: 'Cang Le',
        title: 'FRONTEND-DEVELOPER',
        twitterAct: '',
        gmailAct: '',
        linkedinAct: '',
        profile:
          'A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.',
      },
      {
        id: 'profile02-item',
        name: 'Binh Le',
        title: 'CO-FOUNDER, CEO',
        twitterAct: '',
        gmailAct: '',
        linkedinAct: '',
        profile:
          'Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.',
      },
      {
        id: 'profile03-item',
        name: 'Jennifer Le',
        title: 'DEV OPS',
        twitterAct: '',
        gmailAct: '',
        linkedinAct: '',
        profile:
          'The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.',
      },
    ];

    dispatch({ type: 'get_teamProfiles', teamProfiles: teamProfiles });
  };
}
