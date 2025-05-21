import { NavLink } from "react-router"

// Données fictives pour les notifications
const notifications = [
  {
    id: 'notif-001',
    title: 'Nouveau courrier urgent',
    message: 'Un nouveau courrier urgent a été reçu du Ministère des Finances.',
    time: '2023-06-15T09:30:00',
    read: false,
    type: 'alert'
  },
  {
    id: 'notif-002',
    title: 'Rappel: Réunion hebdomadaire',
    message: 'La réunion hebdomadaire aura lieu aujourd\'hui à 14h00.',
    time: '2023-06-15T08:00:00',
    read: true,
    type: 'reminder'
  },
  {
    id: 'notif-003',
    title: 'Courrier traité avec succès',
    message: 'Le courrier MIN-2023-0450 a été traité et archivé.',
    time: '2023-06-14T16:45:00',
    read: true,
    type: 'success'
  },
  {
    id: 'notif-004',
    title: 'Délai dépassé',
    message: 'Le délai de traitement du courrier MIN-2023-0445 est dépassé.',
    time: '2023-06-14T10:15:00',
    read: false,
    type: 'warning'
  },
  {
    id: 'notif-005',
    title: 'Nouveau utilisateur créé',
    message: 'Un nouveau compte utilisateur a été créé pour Jean Dupont.',
    time: '2023-06-13T14:20:00',
    read: true,
    type: 'info'
  }
]

// Fonction pour formater la date relative
const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) {
    return 'À l\'instant'
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `Il y a ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `Il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`
  }
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`
  }
  
  // Format standard pour les dates plus anciennes
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
  return date.toLocaleDateString('fr-FR', options)
}

// Fonction pour obtenir l'icône du type de notification
const getNotificationIcon = (type: string, read: boolean) => {
  const baseClasses = `rounded-full p-2 ${read ? 'opacity-70' : ''}`
  
  switch (type) {
    case 'alert':
      return (
        <div className={`${baseClasses} bg-red-100`}>
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    case 'reminder':
      return (
        <div className={`${baseClasses} bg-blue-100`}>
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    case 'success':
      return (
        <div className={`${baseClasses} bg-green-100`}>
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    case 'warning':
      return (
        <div className={`${baseClasses} bg-yellow-100`}>
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      )
    case 'info':
      return (
        <div className={`${baseClasses} bg-purple-100`}>
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    default:
      return (
        <div className={`${baseClasses} bg-gray-100`}>
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
      )
  }
}

export default function NotificationsPanel() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} className={`py-3 ${!notification.read ? 'bg-blue-50' : ''}`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {getNotificationIcon(notification.type, notification.read)}
              </div>
              <div className="ml-3 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {notification.title}
                  {!notification.read && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Nouveau
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {notification.message}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatRelativeTime(notification.time)}
                </p>
              </div>
              <div className="ml-3 flex-shrink-0">
                <button className="text-gray-400 hover:text-gray-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <NavLink to="/notifications" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Voir toutes les notifications →
        </NavLink>
      </div>
    </div>
  )
} 