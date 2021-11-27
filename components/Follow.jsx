const Follow = ({photo,username,workAt}) => {
    return (
        <div className="flex items-center justify-between my-1  p-1  " >
            <img
            className="overflow-hidden cursor-pointer  w-12 h-12 rounded-full object-cover ring-1 ring-black "
            src={photo}
                alt={username} />
            <div className="flex flex-col w-28 " >
                <h1 className="font-semibold text-sm text-gray-500 truncate " >{username}</h1>
                <h2 className="font-semibold text-sm text-gray-400 truncate " >{workAt}</h2>
            </div>
            <p className="text-semibold text-blue-400 cursor-pointer " >follow</p>
        </div>
    )
}

export default Follow
