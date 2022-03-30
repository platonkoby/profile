import React from 'react'

function Section({heading, rows = 1, columns = 1, children}) {
    const getRowsOrColumns = (n) => {
        let colOrRow = '';
        for (let i = 0; i < n; i++) {
            colOrRow = colOrRow.concat(' 1fr')
        }
        return colOrRow
    }
    const style = () => ({
        gridTemplateRows: getRowsOrColumns(rows),
        gridTemplateColumns: getRowsOrColumns(columns),
    })

  return (
      <div className='section'>
          <p className='section-heading'>{heading}</p>
          <div style={style()} className='section-body'>{children}</div>
      </div>
  )
}

export default Section