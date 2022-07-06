import axios from 'axios'

export const postATweet = (data: any) => {
  return axios.post(`https://api.twitter.com/2/tweets`, data).then(res => res);
}
