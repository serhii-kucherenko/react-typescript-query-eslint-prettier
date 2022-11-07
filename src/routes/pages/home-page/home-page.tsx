import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from 'src/types/routes.enum'

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>This is a home page</h1>
      <Button onClick={() => navigate(ERoutes.About)}>Go to Accounts</Button>
    </div>
  )
}
