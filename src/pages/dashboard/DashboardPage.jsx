import React from 'react'
//import { Navbar } from '../../components/navs/Navbar'
//import { Content } from '../../components/dashboard/Content'
import { LoadingSpinner } from '../../components/LoadingSpinner.jsx'
import { useGetHeroes } from '../../shared/hooks/useGetHeroes' 


export const DashboardPage = () => {
  const { heroes, loading, error } = useGetHeroes()

  if (loading) {
    return <LoadingSpinner />
  }
  
  if (error) {
    return <div className="error-message">Error: {error}</div>
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background' />
      <Navbar />
      <Content heroes={heroes} />
    </div>
  )
}
