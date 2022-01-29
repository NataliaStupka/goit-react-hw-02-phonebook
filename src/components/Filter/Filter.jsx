
const dataSearch = event => {
    // const value = event.currentTarget.value.toLowerCase();

    // const filter = data.filter(user => {
    //     return user.name.toLoverCase().includes(value);
    // });
    console.log('filter')

}

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

export default Filter;

