const urls = {
    getShows: 'https://api.tvmaze.com/shows?page=1'
};

export const getApi = (name) => urls[name];
