import { Popover } from '@headlessui/react'
import { ChatIcon } from '@heroicons/react/outline'
import { WidgetForm } from './WidgetForm'

export function Widget() {

  return (
    <Popover className='absolute right-5 bottom-5 flex flex-col items-end gap-2'>

      <WidgetForm />

      <Popover.Button className='flex items-center px-2 h-12 bg-purple-700 rounded-full text-white group'>

        <ChatIcon className='w-8 h-8'/>

        <span className='max-w-0 overflow-hidden text-xl group-hover:max-w-xs transition-all duration-700 ease-linear'>
          <span className='pl-1'/>
          FeedBack
        </span>

      </Popover.Button>

    </Popover>
  )
}
