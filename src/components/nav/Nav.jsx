import NavResponsive from './NavResponsive'

const Nav = () => {
  return (
    <nav
    className="w-[390px] h-[60px] flex justify-between items-center mx-auto"
  >
    <div className="translate-x-5 pt-1">
      <img
        className="w-10 h-10 rounded-md"
        src="/images/logoPersonalWhite.png"
        alt="logoPersonal"
      />
    </div>
      <div className="flex gap-3 items-center">
        <NavResponsive />
      <div className="pr-4" >
        <img src="/images/pngIcons/moodIcon.png" alt="" />
      </div>
    </div>
  </nav>
  )
}

export default Nav