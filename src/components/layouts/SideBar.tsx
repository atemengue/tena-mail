
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


// Icônes (vous pouvez utiliser react-icons ou heroicons)
const icons = {
  dashboard: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  inbox: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>,
  outbox: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  internal: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  create: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
  archive: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
  users: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  reports: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  workflows: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  structures: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  chat: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  search: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
}

const menuItems = [
  { name: 'Tableau de bord', href: '/dashboard', icon: 'dashboard' },
  { 
    name: 'Courriers', 
    icon: 'inbox',
    submenu: [
      { name: 'Entrants', href: '/mails/incoming', icon: 'inbox' },
      { name: 'Sortants', href: '/mails/outgoing', icon: 'outbox' },
      { name: 'Internes', href: '/mails/internal', icon: 'internal' },
      { name: 'Créer', href: '/mails/create', icon: 'create' },
    ]
  },
  { name: 'Recherche', href: '/search', icon: 'search'},
  { name: 'Archives', href: '/archive', icon: 'archive' },
  { name: 'Utilisateurs', href: '/users', icon: 'users' },
  { name: 'Workflows', href: '/workflows', icon: 'workflows' }, 
  { name: 'Structures', href: '/structures', icon: 'structures' },
  { name: 'Rapports', href: '/reports', icon: 'reports' },
  { name: 'Chat', href: '/dashboard/chat', icon: 'chat'},
  { name: 'Paramètres', href: '/settings', icon: 'settings' },
]

// // Secondary menu items positioned at bottom of sidebar
// const secondaryMenuItems = [
//   { name: 'Aide', href: '/help', icon: 'help' },
//   { name: 'À propos', href: '/about', icon: 'info' }
// ]



export default function Sidebar() {
  const location = useLocation()
  const { hash, pathname, search } = location;

  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setExpanded(expanded === name ? null : name)
  }

  return (
    <div className="bg-green-800 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4 flex items-center justify-center border-b border-green-700">
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3">
          {/* Remplacer par le logo du MINADER */}
          <span className="text-green-800 font-bold text-xl">M</span>
        </div>
        <div>
          <h1 className="font-bold text-xl">MINADER</h1>
          <p className="text-xs text-green-300">Gestion du Courrier</p>
        </div>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <div>
                  <button 
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center w-full px-4 py-2 text-white hover:bg-green-700 transition-colors"
                  >
                    <span className="mr-3">{icons[item.icon as keyof typeof icons]()}</span>
                    <span>{item.name}</span>
                    <svg 
                      className={`ml-auto w-4 h-4 transition-transform ${expanded === item.name ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expanded === item.name && (
                    <ul className="pl-10 bg-green-900 py-1">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.name}>
                          <NavLink 
                            to={subitem.href}
                            className={`flex items-center px-4 py-2 text-sm ${
                              pathname === subitem.href 
                                ? 'bg-green-600 text-white' 
                                : 'text-green-200 hover:bg-green-700 hover:text-white'
                            } transition-colors`}
                          >
                            <span className="mr-3">{icons[subitem.icon as keyof typeof icons]()}</span>
                            <span>{subitem.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink 
                  to={item.href}
                  className={`flex items-center px-4 py-2 ${
                    pathname === item.href 
                      ? 'bg-green-600 text-white' 
                      : 'text-white hover:bg-green-700'
                  } transition-colors`}
                >
                  <span className="mr-3">{icons[item.icon as keyof typeof icons]()}</span>
                  <span>{item.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
} 