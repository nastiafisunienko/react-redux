import { useRandomQuotesQuery } from "./reducer"
import Bookquote from "./Bookquote"
import { useEffect, useRef, useState } from "react"
import "./Start.css"
import { ClockLoader } from "react-spinners"


export default function Start() {

    const {data, isLoading, error, refetch} = useRandomQuotesQuery()
    const [quote, setQuotes] = useState(null)
    const refQuote = useRef(null)
    const [blurred, setBlurred] = useState(false)
    const [random, setRandom] = useState(null)


    useEffect(() => {

            if (data) {
                setBlurred(false)
                setQuotes(data)
                const randomNumber = Math.floor(Math.random() * data.author.length)
                setRandom(randomNumber)
    
            }
            const interval = setInterval(() => {
                refetch()
                setBlurred(true)
            }, 5000)

            return () => clearInterval(interval)
            

    }, [data, refetch])


    return(
        <>

            {isLoading && <div className="loader"><p>loading</p><ClockLoader color="black" size={75} speedMultiplier={2}/></div>}
            {error && <div className="error-ms">error</div>}
            <ul>
                {quote && 
                    <Bookquote classname={`quote ${blurred ? "blurred" : ""}`} key={data.id} ref={refQuote} pstyle="parrafo"
                    quote={data.quote} author={data.author.split("").map((item,index)=> {
                       return <span key={index} className={index === random ? "letter" : index === 0 ? "firstLetter" : ""}>{item}</span>
                    })}/>
                }
            </ul>

        </>
    )
}