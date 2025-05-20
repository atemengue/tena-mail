import { useAuth } from 'App'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const location = useLocation();
  
  const { pathname } = location; 

  const { logout } = useAuth();

  // Fonction pour obtenir le titre de la page en fonction du chemin
  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Tableau de bord'
    if (pathname.startsWith('/mails/incoming')) return 'Courriers entrants'
    if (pathname.startsWith('/mails/outgoing')) return 'Courriers sortants'
    if (pathname.startsWith('/mails/internal')) return 'Courriers internes'
    if (pathname.startsWith('/mails/create')) return 'Créer un courrier'
    if (pathname.startsWith('/archive')) return 'Archives'
    if (pathname.startsWith('/users')) return 'Utilisateurs'
    if (pathname.startsWith('/reports')) return 'Rapports'
    if (pathname.startsWith('/settings')) return 'Paramètres'
    return 'MINADER GEC'
  }

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Bouton menu mobile */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Titre de la page */}
        <h1 className="text-xl font-semibold text-gray-800 hidden md:block">
          {getPageTitle()}
        </h1>
        
        {/* Barre de recherche */}
        {/* <div className="flex-1 max-w-md mx-4"> */}
          {/* <div className="relative">
            <GlobalSearch />
          </div>
        </div> */}

        {/* BUTTON LIN ESPACE MINISTRE */}
        <NavLink to="/minister/dashboard" className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <button className="bg-purple-400 text-white px-4 py-2 rounded-md">
            <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            Espace du Ministre
            </div>
          </button>
        </NavLink>
        
        {/* Actions utilisateur */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen)
                setIsProfileOpen(false)
              }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {/* Dropdown notifications */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h2 className="text-sm font-semibold text-gray-800">Notifications</h2>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {/* Liste des notifications */}
                  <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-1">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Nouveau courrier urgent</p>
                        <p className="text-xs text-gray-500">Il y a 5 minutes</p>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-green-500 rounded-full p-1">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Courrier traité avec succès</p>
                        <p className="text-xs text-gray-500">Il y a 30 minutes</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <NavLink to="#" className="block text-center text-sm font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border-t border-gray-200">
                  Voir toutes les notifications
                </NavLink>
              </div>
            )}
          </div>
          
          {/* Profil utilisateur */}
          <div className="relative">
            <button 
              className="flex items-center focus:outline-none"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen)
                setIsNotificationsOpen(false)
              }}
            >
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                <span className="text-sm font-medium"> 
                  {/* {user ? user.name.substring(0, 2).toUpperCase() : 'GU'} */} 
                  ZA
                </span>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                ZE AKONO
              </span>
              <svg className="ml-1 h-5 w-5 text-gray-500 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown profil */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Mon profil
                </NavLink>
                <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Paramètres
                </NavLink>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => {
                    logout()
                    console.log('Déconnexion réussie')
                    setIsProfileOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-green-800 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Tableau de bord
            </NavLink>
            <NavLink to="/mails/incoming" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Courriers entrants
            </NavLink>
            <NavLink to="/mails/outgoing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Courriers sortants
            </NavLink>
            <NavLink to="/mails/internal" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Courriers internes
            </NavLink>
            <NavLink to="/mails/create" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Créer un courrier
            </NavLink>
            <NavLink to="/archive" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Archives
            </NavLink>
            <NavLink to="/users" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Utilisateurs
            </NavLink>
            <NavLink to="/reports" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Rapports
            </NavLink>
            <NavLink to="/settings" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
              Paramètres
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
} 