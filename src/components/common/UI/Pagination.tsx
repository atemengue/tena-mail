import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

export interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  siblingCount = 1
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  
  // Si il n'y a qu'une seule page, ne pas afficher la pagination
  if (totalPages <= 1) return null
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
  
  // Générer la liste des pages à afficher
  const generatePaginationItems = () => {
    const items = []
    
    // Toujours afficher la première page
    items.push(1)
    
    // Calculer la plage de pages à afficher autour de la page courante
    const leftSibling = Math.max(2, currentPage - siblingCount)
    const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount)
    
    // Ajouter des points de suspension si nécessaire
    if (leftSibling > 2) {
      items.push('...')
    }
    
    // Ajouter les pages entre les points de suspension
    for (let i = leftSibling; i <= rightSibling; i++) {
      items.push(i)
    }
    
    // Ajouter des points de suspension si nécessaire
    if (rightSibling < totalPages - 1) {
      items.push('...')
    }
    
    // Toujours afficher la dernière page si elle est différente de la première
    if (totalPages > 1) {
      items.push(totalPages)
    }
    
    return items
  }
  
  const paginationItems = generatePaginationItems()
  
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium ${
            currentPage === 1 
              ? 'cursor-not-allowed text-gray-300' 
              : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
          }`}
        >
          <ChevronLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
          Précédent
        </button>
      </div>
      
      <div className="hidden md:-mt-px md:flex">
        {paginationItems.map((item, index) => (
          <React.Fragment key={index}>
            {item === '...' ? (
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
            ) : (
              <button
                onClick={() => typeof item === 'number' && onPageChange(item)}
                className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                  currentPage === item
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium ${
            currentPage === totalPages 
              ? 'cursor-not-allowed text-gray-300' 
              : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
          }`}
        >
          Suivant
          <ChevronRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
} 