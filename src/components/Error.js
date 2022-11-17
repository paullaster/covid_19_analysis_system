const Error = ({error}) => {
    return (
        <>
        {
            error && <p> Error Fetching data!</p> 
        }
        </>
    );
};

export default Error;
