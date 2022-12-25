import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('test 1',()=>{
  render(<App/>)
  expect (screen.getByTestId('handleSetTag')).toBeInTheDocument();
 })

test("test 2",()=>{
  const {getByText}=render (<App/>);
  const AppValue=getByText('Categories - Search')
  expect(AppValue).toBeTruthy();

})

test("test 3",()=>{
  const components=render (<App/>);
 const AppValue=components.getByPlaceholderText("Search...")
  expect(AppValue).toBeInTheDocument();
})
// test("test 4",()=>{
//   render (<App/>);
//  const AppValue=screen.getByPlaceholderText("Search...")
// expect(AppValue).toBeInTheDocument();
// })
