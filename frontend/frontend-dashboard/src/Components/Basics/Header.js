import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
    { name: 'Acceuil', href: '/dashboard', current: true },
    { name: 'Evaluations', href: '/evaluations', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    return (
        <Disclosure as="nav" className="bg-blue-100">
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                                <div className="flex items-center flex-shrink-0">
                                    <img
                                        className="hidden w-auto h-8 lg:block"
                                        src="https://www.institut-prigogine.be/wp-content/uploads/2018/08/Logo-HELB-small-1.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({ isActive }) => (isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-orange-400  hover:bg-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium')
                                                }
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
export default Header;
