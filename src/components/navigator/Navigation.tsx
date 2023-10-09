import './navig.css'


export function Navigation():JSX.Element {
  return (
    <div className="navigator">
     <div className='nav-text'>☰</div>
     <div className='nav-text'>↩</div>
     <div className='nav-text'>Просмотр</div>
      <div className='nav-text'>Управление</div>
    </div>
  )
}