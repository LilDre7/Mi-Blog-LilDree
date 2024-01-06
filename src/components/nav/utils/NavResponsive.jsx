import "../css/NavResponsive.css"

const NavResponsive = () => {
  return (
    <div>
      <div className="theme-popup">
        <input type="radio" name="theme" id="default" />
        <input type="radio" name="theme" id="light" />
        <input type="radio" name="theme" id="dark" />
        <input type="checkbox" id="checkbox" />
        <div className='flex items-center gap-1' >
          <label htmlFor="checkbox" className="theme-popup__button">
            Menu
            <img src="/images/pngIcons/iconPlus.png" alt="" />
          </label>
        </div>
        <div className="theme-popup__list-container">
          <ul className="theme-popup__list">
            <li>
              <label htmlFor="default">
                <span>
                  Home
                </span>
              </label>
            </li>
            <li>
              <label htmlFor="default">
                <a href="/About/" >
                  About
                </a>
              </label>
            </li>
            <li>
              <label htmlFor="dark">
                <span>
                  Blog
                </span>
              </label>
            </li>
            <li>
              <label htmlFor="dark">
                <span>
                  Gear
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavResponsive