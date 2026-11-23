import Slider from "../components/slider"
import Catalog from "../components/catalog"
import pizza1 from '../assets/slide1.jpg';
import pizza2 from '../assets/slide2.jpg';

export default function Home(){
    const slides = [
        {
        image: pizza1 ,
        title: 'Пепперони',
        description: 'Ароматная пицца'
        },
        {
        image: pizza2,
        title: 'Пицца с грибами и овощами',
        description: 'Ароматная пицца'
        },
    ];

    return(
    <div className='container mx-auto max-w-screen-xl'>
        <Slider slides={slides} />
        <Catalog />
    </div>
    )
}