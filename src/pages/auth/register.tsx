import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline'
import Alert from 'components/common/Notifications/Alert'
import Toast from 'components/common/Notifications/Toast'
import Button from 'components/common/UI/Button'
import Card from 'components/common/UI/Card'
import Input from 'components/common/UI/Input'
import Select from 'components/common/UI/Select'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [position, setPosition] = useState('')
  const [justification, setJustification] = useState('')
  
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  
  const departments = [
    { value: 'ressources-humaines', label: 'DRH' },
    { value: 'd1', label: 'DRFP' },
    { value: 'd2', label: 'DDA' },
    { value: 'd3', label: 'DRCQ' },
    { value: 'd4', label: 'DDLC' },
    { value: 'd5', label: 'DESA' },
  ]
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation simple
    if (!name || !email || !department || !position || !justification) {
      setError('Veuillez remplir tous les champs obligatoires')
      return
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide')
      return
    }
    
    setError(null)
    setIsLoading(true)
    
    try {
      // Simuler une requête d'inscription
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simuler une réponse réussie
      console.log('Demande d\'accès envoyée:', {
        name,
        email,
        department,
        position,
        justification
      })
      
      // Afficher le toast de succès
      setShowSuccessToast(true)
      
      // Réinitialiser le formulaire
      setName('')
      setEmail('')
      setDepartment('')
      setPosition('')
      setJustification('')
    } catch (error) {
      setError('Une erreur est survenue lors de l\'envoi de votre demande')
      console.error('Erreur d\'inscription:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
        <span className="text-2xl font-bold text-black">TENA <span className="text-[#04BF8A]">MAIL</span></span>
{/* 
          <Image
            src="/logo.svg"
            alt="Tena Mail Logo"
            width={120}
            height={120}
            className="mx-auto"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Demande d&apos;accès
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Remplissez ce formulaire pour demander un accès à Tena Mail
          </p>
        </div>
        
        <Card>
          <form className="space-y-6 p-6" onSubmit={handleSubmit}>
            {error && (
              <Alert variant="error">
                {error}
              </Alert>
            )}
            
            <div>
              <Input
                label="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ZE AKONO LUIS"
                icon={<UserIcon className="h-5 w-5 text-gray-400" />}
                required
                fullWidth
              />
            </div>
            
            <div>
              <Input
                label="Email professionnel"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ze.akono@minader.cm"
                icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
                required
                fullWidth
              />
            </div>
            
            <div>
              <Select
                label="Direction"
                value={department}
                onChange={(value) => setDepartment(value)}
                options={departments}
                required
                fullWidth
              />
            </div>
            
            <div>
              <Input
                label="Poste / Fonction"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Directeur, Chef de service, etc."
                required
                fullWidth
              />
            </div>
            
            <div>
              <label htmlFor="justification" className="block text-sm font-medium text-gray-700 mb-1">
                Justification de la demande <span className="text-red-500">*</span>
              </label>
              <textarea
                id="justification"
                rows={4}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Expliquez brièvement pourquoi vous avez besoin d'un accès à l'application"
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                required
              />
            </div>
            
            <div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer la demande'}
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous avez déjà un compte ?{' '}
            <NavLink to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Se connecter
            </NavLink>
          </p>
        </div>
      </div>
      
      {showSuccessToast && (
        <Toast
          variant="success"
          title="Demande envoyée"
          message="Votre demande d'accès a été envoyée avec succès. Vous recevrez une réponse par email."
          onClose={() => setShowSuccessToast(false)}
        />
      )}
    </div>
  )
}