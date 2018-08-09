import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render } from 'enzyme';

// http://airbnb.io/enzyme/docs/installation/index.html
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
