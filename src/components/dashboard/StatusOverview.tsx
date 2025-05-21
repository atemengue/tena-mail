
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'

export interface StatusItem {
  id: string
  label: string
  count: number
  status: 'pending' | 'processing' | 'completed' | 'rejected'
  percentage: number,
  trend?: 'up' | 'down'
}

interface StatusOverviewProps {
  items: StatusItem[]
  title?: string
  className?: string
}

export default function StatusOverview({ items, title, className = '' }: StatusOverviewProps) {
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
  
  const getTrendIcon = (percentage: number) => {
    if (percentage > 0) {
      return (
        <div className="flex items-center text-green-600">
          <ArrowUpIcon className="h-5 w-5 flex-shrink-0" />
          <span className="sr-only">Augmentation</span>
          {percentage}%
        </div>
      )
    } else if (percentage < 0) {
      return (
        <div className="flex items-center text-red-600">
          <ArrowDownIcon className="h-5 w-5 flex-shrink-0" />
          <span className="sr-only">Diminution</span>
          {Math.abs(percentage)}%
        </div>
      )
    } else {
      return (
        <div className="flex items-center text-gray-500">
          <span>0%</span>
        </div>
      )
    }
  }
  
  return (
    <div className={`bg-white shadow rounded-lg ${className}`}>
      {title && (
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className="px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
              <dt>
                <div className={`absolute rounded-md p-3 ${getStatusColor(item.status)}`}>
                  <span className="h-6 w-6 flex items-center justify-center font-bold text-lg">
                    {item.count < 10 ? `0${item.count}` : item.count}
                  </span>
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.label}</p>
              </dt>
              <dd className="ml-16 flex items-baseline justify-between">
                <p className="text-2xl font-semibold text-gray-900">{item.count}</p>
                {getTrendIcon(item.percentage)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
} 