import Image from 'next/image';
const Result = ({pcChoice,myChoice,result}) => {
    //scissors
    

    return (
        <div className='fixed top-0 w-full h-full z-10 backdrop-blur-xl flex flex-col justify-center'>
            <p dir='rtl' className='text-center text-white text-5xl'>{result}</p>
            <div className="flex justify-center mx-auto gap-36 mt-5">
                <div 
                    className='game-item border-green-500'>
                    <Image
                        src={`/${myChoice}.svg`}
                        width={100}
                        height={100}
                        alt='قیچی'
                    /> 
                </div>

                <div 
                    className='game-item border-red-500'>
                    <Image
                        src={`/${pcChoice}.svg`}
                        width={100}
                        height={100}
                        alt='قیچی'
                    /> 
                </div>
            </div>

            
        </div>
    )
}


export default Result;