import PropTypes from "prop-types";



const Filter = ({value, onChange}) => (
    
        <label> Find contacts by Name
            <br></br>
            <input
                type="text"
                name="contact"
                value={value}
                onChange={onChange}
        
                
            />
        </label>
    
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
}



export default Filter;

