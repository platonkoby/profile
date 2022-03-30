import React, { useState } from 'react'
import Card from './Card'
import Tab from './Tab'

function Page() {
    const [tabIsActive, setTabIsActive] = useState()
  return (
    <div className="telephone-book-page">
        <Tab></Tab>
        <Card></Card>
    </div>
  )
}

export default Page