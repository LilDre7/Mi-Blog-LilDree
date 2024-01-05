import "../nav/NavResponsive.css"

const NavResponsive = () => {
  return (
    <div>
      <div class="theme-popup">
        <input type="radio" name="theme" id="default" checked="" />
        <input type="radio" name="theme" id="light" />
        <input type="radio" name="theme" id="dark" />
        <input type="checkbox" id="checkbox" />
        <div className='flex items-center gap-1' >
          <label for="checkbox" class="theme-popup__button">
            Menu
            <img src="/images/pngIcons/iconPlus.png" alt="" />
          </label>
        </div>
        <div class="theme-popup__list-container">
          <ul class="theme-popup__list">
            <li>
              <label for="default">
                <span>
                  Home
                </span>
              </label>
            </li>
            <li>
              <label for="default">
                <a href="/About/" >
                  About
                </a>
              </label>
            </li>
            <li>
              <label for="dark">
                <span>
                  Blog
                </span>
              </label>
            </li>
            <li>
              <label for="dark">
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