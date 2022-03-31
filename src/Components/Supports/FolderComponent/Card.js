import React, { useEffect, useState } from 'react'

function Card({page, activeTab, selfId}) {

    const [cardClasses, setCardClasses] = useState('folder-card');

    useEffect(() => {
        activeTab === selfId
        ? setCardClasses('folder-card high-z-index')
        : setCardClasses('folder-card')
    }, [activeTab])

  return (
    <div className={cardClasses}>{page.display}</div>
  )
}

export default Card