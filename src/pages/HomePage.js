import React from 'react'
import { observer } from 'mobx-react'

import Store from '../store/Store'

import Header from '../components/Header'
import Card from '../components/Card'

function HomePage() {
  return (
    <div>
      <Header hasBackButton={false} />
      <Card />
    </div>
  )
}

export default observer(HomePage)
