'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Result from './Result';
const Game = () => {
    const [myScore,setMyScore] = useState(0);
    const [pcScore,setPcScore] = useState(0);
    const [myChoice , setMyChoice] = useState('');
    const [pcChoice , setPcChoice] = useState('');
    const [result , setResult] = useState({});
    const choices = [
        'rock',
        'paper',
        'scissors'
    ]

    const handleChoice = (index) => {
        console.log('handle')
        setMyChoice(choices[index]);
        setPcChoice(choices[Math.floor(Math.random() * 3)]);

        
        setTimeout(() =>setMyChoice(null) , 2000)
    }
    useEffect(() => {
        if(pcChoice == 'rock' && myChoice == 'paper'){
            setMyScore(prevScore => prevScore+1);
            setResult('شما برنده شدید!');
        }else if(pcChoice == 'rock' && myChoice == 'scissors'){
            setPcScore(prevScore => prevScore+1);
            setResult('شما باختید!');
        }else if(myChoice == 'rock' && pcChoice == 'paper'){
            setPcScore(prevScore => prevScore+1);
            setResult('شما باختید!');
        }else if(myChoice == 'rock' && pcChoice == 'scissors'){
            setMyScore(prevScore => prevScore+1);
            setResult('شما برنده شدید!');
        }else if(myChoice == 'scissors' && pcChoice == 'paper'){
            setMyScore(prevScore => prevScore+1);
            setResult('شما برنده شدید!');
        }else if(pcChoice == 'scissors' && myChoice == 'paper'){
            setPcScore(prevScore => prevScore+1);
            setResult('شما باختید!');
        }else{
            setResult('شما برابر شدید!')
        }
    } , [pcChoice,myChoice])
    return (
        <div>
            <div 
                className='w-96 mx-auto mt-10 p-5 text-center bg-slate-600 rounded-xl text-white text-2xl'
                dir="rtl">
                <p>امتیاز شما : {myScore}</p>
                <p>امتیاز کامپیوتر : {pcScore}</p>
            </div>
            <div className='mt-20 grid md:grid-cols-3 place-items-center mx-auto max-w-[1000px] gap-10'>
                <div 
                    onClick={() => handleChoice(0)}
                    className='game-item border-orange-500'>
                    <Image
                        src={'/rock.svg'}
                        width={100}
                        height={100}
                        alt='سنگ'
                    /> 
                </div>
                <div 
                    onClick={() => handleChoice(1)}
                    className='game-item border-orange-500'>
                    <Image
                        src={'/paper.svg'}
                        width={100}
                        height={100}
                        alt='کاغذ'
                    /> 
                </div>
                <div 
                    onClick={() => handleChoice(2)}
                    className='game-item border-orange-500'>
                    <Image
                        src={'/scissors.svg'}
                        width={100}
                        height={100}
                        alt='قیچی'
                    /> 
                </div>
                   
             
                
            </div>

            {myChoice && <Result myChoice={myChoice} pcChoice={pcChoice} result={result}/>}
        </div>
        
    )
}

export default Game;