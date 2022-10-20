import Form from 'react-bootstrap/Form';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { isEmpty } from 'lodash';
import { Typeahead } from 'react-bootstrap-typeahead';

const AutocompleteItems = ({
  items,
  label,
  onChange,
  inputProps,
  labelKey,
}) => {
  return (
    !isEmpty(items) && (
      <Form.Group className='mb-3'>
        <Form.Label>
          <b>{label}</b>
        </Form.Label>

        <Typeahead
          placeholder={items[0].name}
          id='Autocomplete'
          options={items}
          onChange={onChange}
          highlightOnlyResult
          paginate
          maxResults={7}
          {...inputProps}
          labelKey={labelKey}
        />
      </Form.Group>
    )
  );
};

export default AutocompleteItems;
