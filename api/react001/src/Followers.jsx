import React, {useState, useEffect} from "react";

function Followers() {
    const [followers, setFollowers] = useState([])
    const [loading, setLoading] = useState(true);


useEffect(()=> {
    fetch('https://api.github.com/users/arun-cloud-dev/followers')
    .then((res)=> res.json())
    .then((data)=> {
        setFollowers(data)
        setLoading(false)
    });
}, [2])


if(loading){
    return <p className="text-gray-600">Loading Followers......</p>
}

  return (
    <div className='p-4 bg-green-100 rounded-X1'>
        <h2 className='text-x1 font-bold mb-4'>Followers</h2>
        <ul className='space-y-2'>


            {followers.map((follower)=> (
                <li className='flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm'>
                <img 
                src={follower.avatar_url} 
                alt={follower.login}  
                className='w-10 h-10 rounded-full'
                />
                <a 
                href={follower.html_url}
                target='_blank'
                className='text-blue-600 font-medium'>{follower.login}</a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Followers