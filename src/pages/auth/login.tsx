import { auth_login } from 'actions/auth.actions'
import Alert from 'components/common/Notifications/Alert'
import Button from 'components/common/UI/Button'
import Card from 'components/common/UI/Card'
import Input from 'components/common/UI/Input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from "react-router"
import { login } from 'store'

export default function LoginPage() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await auth_login({email, password});
      const { token, user } = response.data;
      const action = login({ token, user });
      dispatch(action)
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      
      navigate("/dashboard");

    } catch (error: any) {
      setError(error.message || "An error occurred during login");
      
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
        <span className="text-2xl font-bold text-black">TENA <span className="text-[#04BF8A]">MAIL</span></span>
          {/* <img
            src="/logo.svg"
            alt="Tena Mail Logo"
            width={120}d
            height={120}
            className="mx-auto"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connexion à Tena Mail
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Système de gestion de courrier du MINADER
          </p>
        </div>
        
        <Card>
          <form className="space-y-6 p-6" >
            {error && (
              <Alert variant="error">
                {error}
              </Alert>
            )}
            
            <div>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@minader.cm"
                required
                fullWidth
              />
            </div>
            
            <div>
              <Input
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                required
                fullWidth
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>
              
              <div className="text-sm">
                <NavLink to="forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Mot de passe oublié ?
                </NavLink>
              </div>
            </div>
            
            <div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous n&apos;avez pas de compte ?{' '}
            <NavLink to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Demander un accès
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
} 