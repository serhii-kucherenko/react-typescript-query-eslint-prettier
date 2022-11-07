import React, { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { AccountsPageLazy, HomePageLazy } from 'src/routes/lazy-routes'
import { ERoutes } from 'src/types/routes.enum'

export const AppNavigation: FC = () => {
  return (
    <div className='App'>
      {/* TODO: Add page lazy loading spinner*/}
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path={ERoutes.Home} element={<HomePageLazy />} />
          <Route path={ERoutes.About} element={<AccountsPageLazy />} />

          {/* TODO: Add redirects for * routes */}
        </Routes>
      </Suspense>
    </div>
  )
}
