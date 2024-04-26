// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }
      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="bg-container">
          <h1 className="heading">Layout</h1>
          <ul className="list">
            <li>
              <input
                type="checkbox"
                checked={showContent}
                id="content"
                onChange={onChangeShowContent}
              />
              <label htmlFor="context">Content</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={showLeftNavbar}
                id="leftNavbar"
                onChange={onChangeShowLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                checked={showRightNavbar}
                id="rightNavbar"
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
