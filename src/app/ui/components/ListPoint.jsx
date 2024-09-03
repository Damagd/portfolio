export function ListPoint({children, number = 0}) {
  return(
      <li className="point-item">
        { children.length > 1
        ?
        <div className="point-container" style={{alignSelf: 'flex-start', width: '1%'}}>
          <div style={{fontWeight: 'bold', color: '#7C3972'}}>
            {number}.
          </div>
        </div>
        :
        <div className="point-container">
          <div className="point">
          </div>
        </div>
        }
        <div className="point-body">
          {children.length > 1 
          ?
          <>
            <div className="text">
              {children[0]}
            </div>
            <div>
              {children[1]}
            </div>
          </>
          :
          <div className="text">
            {children}
          </div>
          }

        </div>
      </li>
  )
}