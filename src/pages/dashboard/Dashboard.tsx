import NotificationsPanel from 'components/dashboard/NotificationsPanel'
import RecentMails from 'components/dashboard/RecentMails'
import StatisticsCard from 'components/dashboard/StatisticsCard'
import StatusOverview from 'components/dashboard/StatusOverview'
import TasksSummary from 'components/dashboard/TasksSummary'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
      
      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatisticsCard 
          title="Courriers en attente" 
          value={12} 
          change={+3}
          icon="inbox" 
          color="blue" 
        />
        <StatisticsCard 
          title="Courriers traités" 
          value={45} 
          change={+8}
          icon="check-circle" 
          color="green" 
        />
        <StatisticsCard 
          title="Courriers urgents" 
          value={5} 
          change={-2}
          icon="exclamation-circle" 
          color="red" 
        />
        <StatisticsCard 
          title="Délai moyen (jours)" 
          value={2.4} 
          change={-0.3}
          icon="clock" 
          color="purple" 
        />
      </div>
      
      
      {/* Contenu principal en deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Courriers récents */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Courriers récents</h2>
            <RecentMails />
          </div>
          
          {/* Tâches à effectuer */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Tâches à effectuer</h2>
            <TasksSummary />
          </div>
        </div>
        
        {/* Notifications et alertes */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <NotificationsPanel />
        </div>
      </div>
    </div>
  )
} 