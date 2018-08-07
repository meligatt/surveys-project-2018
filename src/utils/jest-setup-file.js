import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

// setting up axios adapter to run on Node environment for unit testing purposes.
axios.defaults.adapter = httpAdapter;
