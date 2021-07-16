import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    SupportIcon,
    TranslateIcon,
    XIcon,
    GlobeIcon,
    CodeIcon,
    CogIcon,
    IdentificationIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from "next/link"
import Image from "next/image"

const solutions = [
    {
        name: 'Překlad',
        description: 'Překlady aplikací a programů do českého jazyka',
        href: '/projects/translations',
        icon: TranslateIcon,
    },
    {
        name: 'Webové stránky',
        description: 'Tvorba webových stránek pro malé firmy',
        href: '#',
        icon: GlobeIcon,
    },
    { name: 'Open-source', description: "Podílení se na open-source projektech (JavaScript, C#)", href: '#', icon: CodeIcon },
    {
        name: 'Práce',
        description: "Popis momentální práce a vychytávky z ní",
        href: '#',
        icon: IdentificationIcon,
    },
    {
        name: 'Strojírenství',
        description: 'CAD modely, výkresy a jiné',
        href: '#',
        icon: CogIcon,
    },
]
const callsToAction = [
    { name: 'GitHub', href: '#', icon: PlayIcon },
    { name: 'YouTube', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'O webu',
        description: 'Jak je postavený tento web a jak si postavit svůj',
        href: '#',
        icon: QuestionMarkCircleIcon,
    }
]
const recentPosts = [
    { id: 1, name: 'Jak se naučit programovat', href: '#' },
    { id: 2, name: 'Webová aplikace v Next.js', href: '#' },
    { id: 3, name: 'Úskalí frontend frameworků', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className="relative bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 dark:border-white">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Martin Choutka</span>
                                    {/* <Image
                                        className="h-8 w-auto sm:h-10"
                                        src=""
                                        width=""
                                        height=""
                                        alt="Logo"
                                    /> */}
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900 dark:text-gray-200' : 'text-gray-500 dark:text-gray-200',
                                                    'group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-indigo-500 dark:ring-offset-gray-900'
                                                )}
                                            >
                                                <span>Projekty & Tvorba</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                                            {solutions.map((item) => (
                                                                <Link href={item.href} key={item.name}>
                                                                    <a
                                                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                                                    >
                                                                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                        <div className="ml-4">
                                                                            <p className="text-base font-medium text-gray-900 dark:text-gray-200">{item.name}</p>
                                                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{item.description}</p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                            {callsToAction.map((item) => (
                                                                <div key={item.name} className="flow-root">
                                                                    <a
                                                                        href={item.href}
                                                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                                                                    >
                                                                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200" aria-hidden="true" />
                                                                        <span className="ml-3">{item.name}</span>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                                <Link href="/about-me">
                                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200">
                                        O mně
                                    </a>
                                </Link>
                                <Link href="/blog">
                                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200">
                                        Blog
                                    </a>
                                </Link>
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900 dark:text-gray-200' : 'text-gray-500 dark:text-gray-200',
                                                    'group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-indigo-500 dark:ring-offset-gray-900'
                                                )}
                                            >
                                                <span>Více</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                                            {resources.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                                                >
                                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900 dark:text-gray-200">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 sm:px-8 sm:py-8">
                                                            <div>
                                                                <h3 className="text-sm tracking-wide font-medium text-gray-500 dark:text-gray-200 uppercase">
                                                                    Nedávné příspěvky
                                                                </h3>
                                                                <ul className="mt-4 space-y-4">
                                                                    {recentPosts.map((post) => (
                                                                        <li key={post.id} className="text-base truncate">
                                                                            <a href={post.href} className="font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-200">
                                                                                {post.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="mt-5 text-sm">
                                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    {' '}
                                                                    Podívat se na všechny <span aria-hidden="true">&rarr;</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200">
                                    Přihlásit se
                                </a>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {/* <Image
                                                className="h-8 w-auto"
                                                src=""
                                                width=""
                                                height=""
                                                alt="Logo"
                                            /> */}
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            O mně
                                        </a>

                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            O webu
                                        </a>
                                        {resources.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                                Přihlásit se
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
