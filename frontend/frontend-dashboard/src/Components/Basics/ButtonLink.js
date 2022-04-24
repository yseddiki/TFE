const Button = ({ id, idUser,navigate }) => {
    const handleClick = () => {
        if(idUser !== undefined){
            navigate(`/evalutations/${id}/${idUser}`)
        }else{
            navigate(`/evalutations/${id}`)
        }
    }

    /// Button render with a link to the session
    return (
        <button onClick={handleClick} className="px-4 py-2 m-5 font-semibold text-gray-800 bg-blue-500 border border-gray-400 rounded shadow hover:bg-gray-100">
            More
        </button>
    );
}

export default Button