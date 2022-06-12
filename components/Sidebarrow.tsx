import React, { SVGProps } from 'react'

interface Props{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function Sidebarrow({Icon, title, onClick} : Props) {
  return (
    <div onClick={() => onClick?.()} className='flex group item-center max-w-fit space-x-2 px-2 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200'>
        <Icon className='h-6 w-6'/>
        <p className='hidden md:inline-flex  group-hover:text-twitter text-base font-light lg:text-xl '>{title}</p>
    </div>
  )
}

export default Sidebarrow