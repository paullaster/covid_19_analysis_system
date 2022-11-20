import { v4 as uuidv4} from 'uuid';
import Option from  './SelectOptions';

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

export default Select;