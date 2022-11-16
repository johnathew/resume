import JohnFace from '../../assets/images/UTRGV_expo_20-1062_1.jpeg'
import LocationIcon from '../../assets/images/location.png'
import EmailIcon from '../../assets/images/email_icon.png'

const Header = () => {
  return (
    <>
      <div class="flex items-center p-2 ml-2 mx-2">
        <img
          src={JohnFace}
          alt="John's Face"
          class="w-20 h-auto rounded-full"
        />
        <div class="ml-2 mt-4">
          <h1 class="text-base font-semibold">John Kornegay</h1>
          <h2 class="text-xs leading-3 font-extralight">Cool dude, also not bald</h2>
        </div>
      </div>
      <div class="flex items-center justify-start">
        <img src={LocationIcon} alt="Location Icon" class="w-4 h-auto ml-2" />{' '}
        <p class="text-sm font-light">McAllen, Texas</p>
        <img src={EmailIcon} alt="Email Icon" class="w-4 h-auto ml-2" />
        <p class="text-sm font-light ml-1">jakornegay01@gmail.com</p>
      </div>
      <p class="border-b-2 border-slate-800 p-3 leading-5 font-light">
        Self-taught Web Developer interested in a job opportunity. Some of the
        projects I've made can be found below, as well as other job's held.
      </p>
    </>
  )
}

export default Header
