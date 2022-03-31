import React from 'react'
import Folder from './Supports/FolderComponent/Folder'

function Project({title, pages}) {
  return (
      <div className="project">
        <p className='project-title'>{title}</p>
        <Folder pages={pages} />
      </div>
  )
}

export default Project