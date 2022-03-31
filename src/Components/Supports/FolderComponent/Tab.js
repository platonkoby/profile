import React, { useEffect, useState } from 'react'

function Tab({title, activeTab, setActiveTab, selfId}) {

    const [tabClass, setTabClass] = useState('folder-tab')

    const activatSelfTab = () => setActiveTab(selfId)

    useEffect(
        () => {
            selfId === activeTab
            ? setTabClass('folder-tab active-tab')
            : setTabClass('folder-tab')
        }, [activeTab])
    
  return (
    <div onClick={activatSelfTab} className={tabClass}>{title}</div>
  )
}

export default Tab