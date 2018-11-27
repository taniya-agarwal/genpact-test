import { shallow } from 'enzyme';
import MyComponent from './../components/Home';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug />);
  
    expect(component).toMatchSnapshot();
  });
});


test('pass a selected value to the onChange handler', () => {
    const value = '2';
    const onChange = jest.fn();
    const wrapper = shallow(
        <Dropdown
        placeholder="Select Employee Id"
        label="Employee Id:"
        id="EmployeeIdDrop1"
        ariaLabel="Employee Id dropdown"
        options={ITEMS}
        onChanged={onChange}
    />

    );
    expect(onChange).toBeCalledWith(value);
});