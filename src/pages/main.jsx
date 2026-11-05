import Card from "/src/components/card.jsx"
import HeaderImage from "../../public/assets/images/illustration-article.svg"

function Main(){


    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#F4D14D]">
        <Card image={HeaderImage} 
              tag="Learning" 
              datePublished ="Published 21 Dec 2023"
              headerTitle="HTML & CSS foundation"
              cardDesc="These languages are the backbone of every website, defining structure, content, and presentation."
              footerImg="/image-avatar.webp"
              footerName="Greg Hooper"
              >
                
              </Card>
        </div>

    )

}

export default Main