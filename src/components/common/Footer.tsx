
export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 mb-2 md:mb-0">
          &copy; {currentYear} MINADER - Ministère de l'Agriculture et du Développement Rural
        </div>
        <div className="text-sm text-gray-500">
          Système de Gestion Électronique du Courrier v1.0
        </div>
      </div>
    </footer>
  )
} 