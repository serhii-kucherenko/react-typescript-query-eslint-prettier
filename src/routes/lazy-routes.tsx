import React from 'react'

export const HomePageLazy = React.lazy(() =>
  import('src/routes/pages/home-page/home-page').then((module) => ({
    default: module.HomePage,
  })),
)

export const AccountsPageLazy = React.lazy(() =>
  import('src/routes/pages/accounts-page/accounts-page').then((module) => ({
    default: module.AccountsPage,
  })),
)
