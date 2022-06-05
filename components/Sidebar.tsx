import React from 'react'
import Sidebarrow from './Sidebarrow';
import {

    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'




function Sidebar(){
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
         <img className='h-10 w-10 m-3' src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" />
        <Sidebarrow Icon={HomeIcon} title="Home"/>
        <Sidebarrow Icon={HashtagIcon} title="Explore"/>
        <Sidebarrow Icon={BellIcon} title="Notifications"/>
        <Sidebarrow Icon={MailIcon} title="Messages"/>
        <Sidebarrow Icon={BookmarkIcon} title="Bookmarks"/>
        <Sidebarrow Icon={CollectionIcon} title="Lists"/>
        <Sidebarrow Icon={UserIcon} title="Sign In"/>
        <Sidebarrow Icon={DotsCircleHorizontalIcon} title="More"/>
        
        </div>
  )
}

export default Sidebar