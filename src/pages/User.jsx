import { useParams } from 'react-router-dom'

const User = () => {

    const params = useParams()

    return (
        <div  className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> This is User: {params.username} </div>
    )
}

export default User