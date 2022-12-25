import { getByLabelText, getByPlaceholderText, getByTitle, render, screen } from '@testing-library/react';
import App from './App';
// import FormInput from './components/FormInput';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


 test("test 1",()=>{
   render(<App />)

//   //logRoles(screen.getByTestId("hello"))

   const buttonElem =screen.getByRole("button",{name :'Register',exact:false})
  expect(buttonElem).toBeInTheDocument()
 
 })

//describe('Checks the App component',()=>{

test("test 2",()=>{
  const {getByText}=render (<App/>);
  const AppValue=getByText('Login Form')
  expect(AppValue).toBeInTheDocument();
 
//})
})
test("test 3",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByPlaceholderText("Email")
  expect(AppValue).toBeInTheDocument();// par. elem. prest. in dom.
 

})
test("test 4",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("UserName")
  expect(AppValue).toBeInTheDocument();
 

})
test("test 5",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("Mobile")
  expect(AppValue).toBeInTheDocument();
 

})
test("test 6",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("Gender")
  expect(AppValue).toBeInTheDocument();
 

})
test("test 7",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("Password")
  expect(AppValue).toBeInTheDocument();
 

})
test("test 6",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("Confirm Password")
  expect(AppValue).toBeInTheDocument();
 

})
test("test 6",()=>{
  const components=render (<App/>);
 // console.log(components);
 const AppValue=components.getByText("Accept terms conditions")
  expect(AppValue).toBeInTheDocument();
 

})
