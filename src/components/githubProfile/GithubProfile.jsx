import React, { useEffect, useState } from 'react'

function GithubProfile() {
    const [data, setData ] = useState(0)
    useEffect(
        () =>{
            fetch('https://api.github.com/users/chriswilder3')
            .then((response) => response.json())
            .then( (data) => {
                console.log(data);
                setData(data)
            })

        }, []
    )

  return (
    <div className=' m-4 p-4  text-center bg-slate-300'>
        <h1 className='text-2xl font-bold'>
                GithubProfile
        </h1>
        <h2>
            Followers : {data.followers}
        </h2>
        <img className='mx-auto' src={data.avatar_url} alt="" />
        
    </div>
  )
}

export default GithubProfile