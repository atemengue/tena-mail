
type StatisticsCardProps = {
  title: string
  value: number
  change: number
  icon?: string
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'
}

const iconMap = {
  inbox: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  ),
  'check-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'exclamation-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    changePositive: 'text-blue-600',
    changeNegative: 'text-blue-600',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    iconBg: 'bg-green-100',
    iconText: 'text-green-600',
    changePositive: 'text-green-600',
    changeNegative: 'text-green-600',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    iconBg: 'bg-red-100',
    iconText: 'text-red-600',
    changePositive: 'text-red-600',
    changeNegative: 'text-red-600',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    iconBg: 'bg-yellow-100',
    iconText: 'text-yellow-600',
    changePositive: 'text-yellow-600',
    changeNegative: 'text-yellow-600',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    changePositive: 'text-purple-600',
    changeNegative: 'text-purple-600',
  },
  gray: {
    bg: 'bg-gray-50',
    text: 'text-gray-700',
    iconBg: 'bg-gray-100',
    iconText: 'text-gray-600',
    changePositive: 'text-gray-600',
    changeNegative: 'text-gray-600',
  },
}

export default function StatisticsCard({ 
  title, 
  value, 
  change, 
  icon = 'inbox',
  color = 'blue' 
}: StatisticsCardProps) {
  const colors = colorMap[color]
  const iconComponent = iconMap[icon as keyof typeof iconMap] || iconMap.inbox
  
  const formattedValue = Number.isInteger(value) ? value : value.toFixed(1)
  const formattedChange = Number.isInteger(change) ? change : change.toFixed(1)
  const isPositiveChange = change >= 0
  
  return (
    <div className={`${colors.bg} p-4 rounded-lg shadow-sm`}>
      <div className="flex items-center">
        <div className={`${colors.iconBg} p-3 rounded-full ${colors.iconText}`}>
          {iconComponent}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline">
            <p className={`text-2xl font-semibold ${colors.text}`}>
              {formattedValue}
            </p>
            <p className={`ml-2 text-sm font-medium ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveChange ? '+' : ''}{formattedChange}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 