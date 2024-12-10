import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // const params = useParams();// This hook gives the params passed 
    //                        // as part of the url associated with this
    //                        // particular componenet(template) only.
    //                        // They are always in the dict form
    //                        // To access individula of them use . or []

    //                 // Ex : params['id'] or params.id

    // Or We could receive it just like a hook, since its actually
    // an object, receive the single param directly inside {}

    const {id} = useParams()

  return (
    <div>User : {id} </div>
  )
}

export default User