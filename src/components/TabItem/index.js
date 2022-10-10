import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, activateTab} = props
  const {tabId, displayText} = tabDetails
  const OnClickUpdateTab = () => {
    updateTabItem(tabId)
  }
  const activateTabStyle = activateTab ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activateTabStyle}`}
        onClick={OnClickUpdateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
