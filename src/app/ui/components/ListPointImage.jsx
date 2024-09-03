export function ListPoint({children, text}) {
	return(
	  <li className="point-item">
			<div className="point-container">
				<div className="point">
				</div>
			</div>
			<div>
				<div className="text">
					{text}
				</div>
				{children}
			</div>
	  </li>
	)
}