import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// http://airbnb.io/enzyme/docs/installation/index.html
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;

// setting up axios adapter to run on Node environment for unit testing purposes.
axios.defaults.adapter = httpAdapter;
