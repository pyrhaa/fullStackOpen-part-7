import { useState, useEffect } from 'react';
import axios from 'axios';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const url = 'https://restcountries.com/v3.1/name/';
  useEffect(() => {
    const fetchData = async () => {
      if (name) {
        try {
          const result = await axios.get(`${url}/${name}?fullText=true`);
          console.log(result);
          setCountry({ found: true, data: result.data[0] });
        } catch (e) {
          console.log('An error is there:', e);
          console.log(
            'You maybe wrongly or mispell or not fully correctly write the name of the country'
          );
          setCountry({ found: false, data: '' });
        }
      }
    };
    fetchData();
  }, [name]);

  return country;
};

const Country = ({ country }) => {
  if (!country) {
    return <div>Write a full country name in the research bar</div>;
  }
  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.data.name.common}</h3>
      <div>population {country.data.population}</div>
      <div>capital {country.data.capital}</div>
      <img
        src={country.data.flags.png}
        height="100"
        alt={`flag of ${country.data.name.common}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField('text');
  const [name, setName] = useState('');
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
