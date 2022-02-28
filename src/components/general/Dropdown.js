import {Menu, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import Button from "../Buttons/Button";

export default function Dropdown({trigger, content}) {
    return (
        <div className="w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                {trigger()}
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                        className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {content()}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}