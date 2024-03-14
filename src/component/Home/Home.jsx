import Banner from "../Banner/Banner1"
import Banner2 from "../Banner/Banner2"
import Blog from "../Blog/Blog"
import Button from "../Button/Button"
import Card2 from "../Cards/Card2"
import Cards from "../Cards/Cards"
import List from "../List/List"
import Offer from "../Offer/Offer"



const Home = () => {
  return (
    <div className=" text-xl mt-[3%] my-[30px] mx">
      
      <List/>
      <Banner/>
      <Button/>
      <Cards/>
      <Offer/>
      <Card2/>
      <Banner2/>
      <Blog/>
     
    </div>
  )
}

export default Home
