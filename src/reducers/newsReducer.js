const newsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_NEWS_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_NEWS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      case "FETCH_NEWS":
        return {
          ...state,
          news: action.payload,
          loading: false,
          error: null,
        };
      case "FILTER_NEWS":
        return {
          ...state,
          news: action.payload.news,
          statusFilter: action.payload.statusFilter,
          loading: false,
          error: null,
        };
      case "SEARCH_NEWS": {
        const filteredNews = state.news.filter((item) =>
          item.title.toLowerCase().includes(action.payload.terms.toLowerCase())
        );
        return {
          ...state,
          news: [...filteredNews],
          statusFilter: action.payload.statusFilter,
          loading: false,
          error: null,
        };
      }
      case "EDIT_NEWS": {
        const mappedNews = state.news.map((item) =>
          action.payload.id === item.id
            ? {
                ...item,
                ...action.payload,
              }
            : item
        );
        //       const mappedNews = state.news.map((item) => {
        //           if (action.payload.id === item.id) {
        //               return {
        //                   ...item,
        //                   ...action.payload
        //               }
        //           } else {
        //                   return item
        //           }
        //       }
        //   );
        return {
          ...state,
          news: [...mappedNews],
          loading: false,
          error: null,
        };
      }
      case "DELETE_NEWS": {
        const filteredNews = state.news.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          news: [...filteredNews],
          loading: false,
          error: null,
        };
      }
      case "ADD_NEWS":
        return {
          ...state,
          news: [...state.news, action.payload],
          loading: false,
          error: null,
        };
      case "LIKES":
        return state;
      default:
        return state;
    }
  };
  
  export default newsReducer;
  