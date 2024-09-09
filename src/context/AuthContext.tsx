import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getInfo, login as login__request } from '../api/auth';
import axios from 'axios';

import '../static/css/AuthContext.css'


interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userInfo = await getInfo(token); 

          setIsAuthenticated(true);
          setUser(userInfo);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
              localStorage.removeItem('token');
            }
          }
          setIsAuthenticated(false);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkTokenValidity();
  }, []);

  const login  = (username: string, password: string) => {
    login__request({ username, password })
      .then(({ token }) => {
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
};

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token'); // Удаляем токен из куки
  };

  if (loading) {
    return <div className='modal open'>
      <div className="modal-content">
        <div className="loader" id="loader-4">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
    </div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};