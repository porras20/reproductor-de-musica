export default function SidebarChoice({title, Icon}) {
  return (
    <h2>
        {Icon && <Icon/>}
        { Icon ? <h4>{title}</h4> : <p>{title}</p> }
    </h2>
  )
}
