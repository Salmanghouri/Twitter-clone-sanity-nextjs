import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import TweetBox from './TweetBox'
import TweetCom from './TweetCom'



interface Props {
  tweets: Tweet[]
}


function Feed({ tweets: tweetProp }: Props) {

  const [tweets, setTweets] = useState<Tweet[]>(tweetProp)

  const handlerRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)

    toast.success('Feed Updated!', {
      id: refreshToast
    })
  }

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon onClick={handlerRefresh} className='h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125 ' />
      </div>

      {/* Tweetbox */}
      <div>
        <TweetBox />
      </div>
      {/* Feed */}
      <div>
        {tweets.map(tweet => (
          <TweetCom key={tweet._id} tweet={tweet} />
        ))}

      </div>
    </div>
  )
}

export default Feed