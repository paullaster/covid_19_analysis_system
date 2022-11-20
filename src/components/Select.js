import { v4 as uuidv4} from 'uuid';
import Option from  './SelectOptions';

const Select = ( {onChange, countryList, name='country'}) => {
    return (
        <select  onChange={onChange} name={name}>
            {
                countryList.map ( (country) => {
                    return (
                        < Option key={uuidv4 ()} country={country} />
                    );
                })
            }
        </select>
    );
};

export default Select;