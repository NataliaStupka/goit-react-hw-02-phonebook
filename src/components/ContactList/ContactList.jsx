import PropTypes from "prop-types";

const ContactList = ({ options, onDeleteContact }) => {
   
    return (
        <div>
            <ul>
                {options.map(({ id, name, number }) =>
                    <li key={id}>
                        {name}: {number}
                        <button
                            type="button"
                            onClick={() => onDeleteContact(id)}>
                        Delete</button>
                    </li>
                )
                }
            </ul>
        </div>
    );
};

// ContactList.propTypes = {
//     options: PropTypes.object,
// }


export default ContactList;