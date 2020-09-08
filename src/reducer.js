export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  discover_weekly: null,
  top_artists: null,
  item: null,
  token: null
  // 'qhm3sIlPihzQHiBNFH2GOIWjjwrNf7gZ990chIsFS9dRKkZ3U5OMtYOIpQTGrip9bYG8upnTkwSEPHPpNR8c7_NJg8SckXSerPimEIRe-HB_2noLn_b-CUepS31fyZOBjc7OhnvduURI'
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {...state, user: action.user}
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    case 'SET_DISCOVER_WEEKLY':
      return { ...state, discover_weekly: action.discover_weekly }
    default: 
    return state
  }
}

export default reducer;