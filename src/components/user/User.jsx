import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // const params = useParams();// This hook gives the params passed 
    //                        // as part of the url associated with this
    //                        // particular componenet(template) only.
    //                        // They are always in the dict form
    //                        // To access individula of them use . or []

    //                 // Ex : params['id'] or params.id

    // Or We could receive it just like a hook, since it returns
    // an object, destructure params directly inside {}

    const {id} = useParams()

  return (
    <div className='m-4 p-4'>User : {id} </div>
  )
}

export default User