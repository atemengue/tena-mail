import { NavLink } from "react-router"
// Données fictives pour les courriers récents
const recentMails = [
  {
    id: 'mail-001',
    reference: 'MIN-2023-0458',
    subject: 'Demande de subvention pour projet agricole',
    sender: 'Association des Agriculteurs du Centre',
    date: '2023-06-15',
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'mail-002',
    reference: 'MIN-2023-0459',
    subject: 'Rapport trimestriel sur la production de cacao',
    sender: 'Direction des Statistiques Agricoles',
    date: '2023-06-14',
    status: 'processing',
    priority: 'medium'
  },
  {
    id: 'mail-003',
    reference: 'MIN-2023-0460',
    subject: "Invitation à la conférence sur l'agriculture durable",
    sender: "Ministère de l'Environnement",
    date: '2023-06-13',
    status: 'completed',
    priority: 'low'
  },
  {
    id: 'mail-004',
    reference: 'MIN-2023-0461',
    subject: "Demande d'audience avec le Ministre",
    sender: 'Syndicat National des Agriculteurs',
    date: '2023-06-12',
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'mail-005',
    reference: 'MIN-2023-0462',
    subject: 'Proposition de partenariat pour la formation agricole',
    sender: 'Université de Yaoundé',
    date: '2023-06-11',
    status: 'processing',
    priority: 'medium'
  }
]

// Fonction pour obtenir la couleur du badge de statut
const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'rejected':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Fonction pour obtenir le texte du statut
const getStatusText = (status: string) => {
  switch (status) {
    case 'pending':
      return 'En attente'
    case 'processing':
      return 'En traitement'
    case 'completed':
      return 'Traité'
    case 'rejected':
      return 'Rejeté'
    default:
      return status
  }
}

// Fonction pour obtenir la couleur du badge de priorité
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800'
    case 'medium':
      return 'bg-blue-100 text-blue-800'
    case 'low':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Fonction pour obtenir le texte de la priorité
const getPriorityText = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'Haute'
    case 'medium':
      return 'Moyenne'
    case 'low':
      return 'Basse'
    default:
      return priority
  }
}

// Fonction pour formater la date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

export default function RecentMails() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Référence
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Objet
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expéditeur
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priorité
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentMails.map((mail) => (
            <tr key={mail.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {mail.reference}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="truncate max-w-xs">{mail.subject}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="truncate max-w-xs">{mail.sender}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(mail.date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(mail.status)}`}>
                  {getStatusText(mail.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(mail.priority)}`}>
                  {getPriorityText(mail.priority)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <NavLink to={`/mails/${mail.id}`} className="text-blue-600 hover:text-blue-900">
                  Voir
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <NavLink to="/mails/incoming" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Voir tous les courriers →
        </NavLink>
      </div>
    </div>
  )
} 