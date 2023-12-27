import './index.css'

const ComponentItem = props => {
  const {componentObj, updateActiveCategory, isActive} = props
  const {name, categoryId} = componentObj
  const updateCategory = () => {
    updateActiveCategory(categoryId)
  }

  const activeClassName = isActive ? 'active-text' : ''

  return (
    <li className="eachcategoryItem">
      <p
        className={`button1 ${activeClassName}`}
        type="button"
        onClick={updateCategory}
      >
        {name}
      </p>
    </li>
  )
}

export default ComponentItem
