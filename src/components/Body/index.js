// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <div className="container">
    <div>
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="bg-container">
              {showLeftNavbar ? (
                <div className="left-container">
                  <h1 className="head">Left Navbar Menu</h1>
                  <ul className="list">
                    <li className="items">Item 1</li>
                    <li className="items">Item 2</li>
                    <li className="items">Item 3</li>
                    <li className="items">Item 4</li>
                  </ul>
                </div>
              ) : null}
              {showContent ? (
                <div className="content-container">
                  <h1 className="head">Content</h1>
                  <p className="content">
                    Loren ipsum dolor
                    bdfhjbesnkmflmwslkbfvhvdhbvgukjhdbhgikfnwakngkjfdhibnjfb
                    hssbfsjsdk.sn hsdbvgksendkvnbjbfibn nmfbvjdfgndks
                  </p>
                </div>
              ) : null}
              {showRightNavbar ? (
                <div className="right-container">
                  <h1 className="head">Right Navbar</h1>
                  <p className="box">Ad 1</p>
                  <p className="box">Ad 2</p>
                </div>
              ) : null}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    </div>
  </div>
)
export default Body
