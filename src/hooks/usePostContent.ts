import { useQuery } from 'react-query'
import React from 'react'
import { useRecoilState } from 'recoil'
import { postingTweetAtom } from '@/recoil/Twitter'
import { postATweet } from '@/api/twitter'

const usePostContent = () => {
    const tweetObject = {text: "Are you excited for the weekend?",};
  const [postingTweet, setPostingTweet] = useRecoilState(postingTweetAtom)
  const { refetch } = useQuery('twitter-posting', () => postATweet(tweetObject), {
    enabled: postingTweet,
    retry: 0,
    onSettled: data => {
      setPostingTweet(false)
    },
  })
  return {setPostingTweet};
}

export default usePostContent
