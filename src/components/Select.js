import { v4 as uuidv4} from 'uuid';
const Select = ( {countryList}) => {
    return (
        <select>
            {
                countryList.map ( (country) => {
                    return (
                        < Option key={uuidv4 ()} country={country} value={country} />
                    );
                })
            }
        </select>
    );
};

const Option = ( {country}) => {
    return (
        <>
        <option>
            {country}
        </option>
        </>
    );
};
export default Select;