const [currentForm, setCurrentForm] = useState ('login');

   const toggleForm = (formName) => {
    setCurrentForm(formName);
   }
    {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}