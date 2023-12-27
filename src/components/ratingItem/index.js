import './index.css'

const RatingItem = props => {
  const {ratingObj, updateActiveRating, isActiveRating} = props
  const {imageUrl, ratingId} = ratingObj

  const updateRating = () => {
    updateActiveRating(ratingId)
  }

  const activeClassName = isActiveRating ? 'active-btn' : ''

  return (
    <li className="eachRatingItem ">
      <button onClick={updateRating} className="button1" type="button">
        <img
          className="rating-image"
          alt={`rating ${ratingId}`}
          src={imageUrl}
        />
        <p className={activeClassName}>&up</p>
      </button>
    </li>
  )
}

export default RatingItem
