import { useEffect, useState } from "react"

export const GamesResults = () => {

    const [gameResults, setGameResults] = useState([])

    const fetchData = async () => {
		try {
			const r = await fetch('https://jte-edge.b-cdn.net/wyniki.json')
			const data = await r.json()
			// if (!r.status) throw new Error()
            return data
		} catch (error) {
			console.log(error.message)
		}
        
	}

	useEffect(() => {
		const getResults = async () => {
            const results = await fetchData()
            setGameResults(results)
            console.log(gameResults);
        }

        getResults()
        
	}, [])

    

  return (
    <>
        <div className='league-name'>
            <span className=''>Liga I</span>

            <div className='mecze'>
                {gameResults.map(mecz => 
                    <table key='' className='p-3 px-6 w-full'>
                        <tr>
                        <td className="w-[100px]">15:00</td>
                        <td className="text-left">
                            <div>{mecz.Team1}</div>
                            <div>{mecz.Team2}</div>
                        </td>
                        <td className="w-[100px]">
                            <div>{mecz.Team1Score}</div>
                            <div>{mecz.Team2Score}</div>
                        </td>
                        <td className="w-[50px]">gwiazdka</td>
                        </tr>

                    </table>
                )}
            </div>
        </div>
    </>
  )
}
