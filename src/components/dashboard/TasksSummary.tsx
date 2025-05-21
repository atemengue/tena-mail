import React from 'react'
import { NavLink } from 'react-router-dom'

// Données fictives pour les tâches
const tasks = [
  {
    id: 'task-001',
    title: 'Valider le courrier MIN-2023-0458',
    dueDate: '2023-06-20',
    priority: 'high',
    type: 'validation'
  },
  {
    id: 'task-002',
    title: 'Répondre à la demande d\'audience',
    dueDate: '2023-06-22',
    priority: 'medium',
    type: 'response'
  },
  {
    id: 'task-003',
    title: 'Préparer le rapport mensuel',
    dueDate: '2023-06-30',
    priority: 'medium',
    type: 'report'
  },
  {
    id: 'task-004',
    title: 'Archiver les courriers traités',
    dueDate: '2023-06-25',
    priority: 'low',
    type: 'archive'
  }
]

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

// Fonction pour obtenir l'icône du type de tâche
const getTaskTypeIcon = (type: string) => {
  switch (type) {
    case 'validation':
      return (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'response':
      return (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      )
    case 'report':
      return (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    case 'archive':
      return (
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    default:
      return (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
  }
}

export default function TasksSummary() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <li key={task.id} className="py-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {getTaskTypeIcon(task.type)}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                    {getPriorityText(task.priority)}
                  </span>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Échéance: {formatDate(task.dueDate)}</span>
                </div>
              </div>
              <div className="ml-3 flex-shrink-0">
                <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Traiter
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <NavLink to="/tasks" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Voir toutes les tâches →
        </NavLink>
      </div>
    </div>
  )
} 