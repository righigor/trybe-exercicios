import Greeting from "./greeting"
import ImgTrevo from "./img-trevo"

function Header () {
  return <h1><Greeting /> {' '} <ImgTrevo /></h1>
}

export default Header