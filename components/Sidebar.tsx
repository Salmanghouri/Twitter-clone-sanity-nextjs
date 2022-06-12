import React from 'react'
import SidebarRow from './Sidebarrow';
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
import { signIn, signOut, useSession } from 'next-auth/react';

// 2:33.55


function Sidebar(){
  const { data: session }= useSession() 

  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
         <img className='h-10 w-10 m-3' src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" />
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow onClick={session ? signOut: signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'}/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
        
        </div>
  )
}

export default Sidebar