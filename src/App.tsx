import React from 'react'
import { AppNavigation } from 'src/routes/app-navigation'
import { notification } from 'antd'

import 'src/styles/main.scss'

notification.config({
  maxCount: 1,
  duration: 15,
  placement: 'bottomRight',
})

export const App = (): JSX.Element => {
  return (
    <div className='App'>
      <AppNavigation />
    </div>
  )
}
