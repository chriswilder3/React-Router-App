import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// function GithubProfile() {
//     const [data, setData ] = useState(0)
//     useEffect(
//         () =>{
//             fetch('https://api.github.com/users/chriswilder3')
//             .then((response) => response.json())
//             .then( (data) => {
//                 console.log(data);
//                 setData(data)
//             })

//         }, []
//     )
// But this is slower. There is better way. to use loader option in router
// We will define githubloader func at the end of this file. But
// After this loader of router automatically fetches data for us, we 
// we need to get it for use in this file. We have another hook
// of router dom called 'useLoaderData' for this.


function GithubProfile() {
    const data = useLoaderData()

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


// For optimazation we will put fetching part into seperate function
// and pass into loader option in createBrowserRouter.
export const gitHubLoader = async () => {

        const response = await fetch('https://api.github.com/users/chriswilder3')
        // const data = await response.json();
        // Note that in current date we dont need to await if the json converison
        // also. Insted, return of this funtion is itself a promise.
        return response.json()
}