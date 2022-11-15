import instaIcon from '../../assets/images/instagram.png'
import githubIcon from '../../assets/images/GitHub.png'
import linkedinIcon from '../../assets/images/LinkedIn.png'
import HomeIcon from '../../assets/images/home.png'
import ProjectIcon from '../../assets/images/briefcase.png'


const Navbar = () => {
  return (
    <nav class="w-1/2 mx-auto h-8 flex flex-row font-semibold justify-between items-center border-x-2 border-b-2 px-2 sticky text-gray-900 bg-gray-100 border-teal-900 ">
      Resume
      <div class="w-17 h-auto">
        <ul class="list-none flex flex-row text-center space-x-2 items-center p-2">
          <li>
            <img src={HomeIcon} alt="home icon" class="w-5 h-auto" />
          </li>
          <li>
            <img src={ProjectIcon} alt="home icon" class="w-5 h-auto" />
          </li>
          <li>
            <a href="https://www.instagram.com/johnathew_k/">
              <img src={instaIcon} alt="instagram icon" class="w-5 h-auto" />
            </a>
          </li>
          <li>
            <a href="https://github.com/johnathew">
              <img src={githubIcon} alt="gitHub icon" class="w-5 h-auto" />
            </a>
          </li>
          <li>
            <img src={linkedinIcon} alt="linkedIn icon" class="w-5 h-auto" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
