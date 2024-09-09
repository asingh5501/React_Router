import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/asingh5501')
    //   .then(res => res.json())
    //   .then(data => {
    //     setData(data)
    //     console.log(data)
    // })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-lg justify-center'>Github Followers:-{data.followers}
    <img className="rounded-lg" src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/asingh5501')
    return response.json()
}