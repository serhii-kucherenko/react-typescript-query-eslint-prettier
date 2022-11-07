import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from 'src/types/routes.enum'

export const AccountsPage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>This is an accounts page</h1>
      <Button onClick={() => navigate(ERoutes.Home)}>Go to Home</Button>
    </div>
  )
}
