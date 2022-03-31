import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Tab from './Tab'
import Card from './Card';

function Folder({pages}) {

  const [activeTab, setActiveTab] = useState(0);



  return (
    <div className='folder'>
      <div className="folder-tabs-container">
        {pages.map((page, id) => 
          <Tab title={page.tab} selfId={id} activeTab={activeTab} setActiveTab={setActiveTab} key={nanoid()} />
        )}
      </div>
      <div className="folder-cards-container">
        {pages.map((page, id) => 
          <Card page={page} activeTab={activeTab} selfId={id} key={nanoid()} />
        )}
      </div>
    </div>
  )
}

export default Folder