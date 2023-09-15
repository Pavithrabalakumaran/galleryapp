// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails
  const thumbnailClassName = isActive ? 'thumbnailActive' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
