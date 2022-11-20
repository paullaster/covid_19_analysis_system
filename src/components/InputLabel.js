const InputLabel = ({onChange, type='text', children}) => {
    return (
        <label >
            {children}
            <input type={type} onChange={onChange}/>
        </label>
    )
};
export default InputLabel;