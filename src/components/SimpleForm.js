import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

import Update from "./Update";



/*const SignupSchema = Yup.object({
    name: Yup.string().required('Notwendig'),
    email: Yup.string().email('Ungültige Email Adresse').required('Notwendig'),
    adresse: Yup.string().required('Notwendig'),
    passwort: Yup.string()
    .required('Kein Passwort angegeben.')
    .matches(/?=.*[0-9]))/, "Das Passwort muss eine Ziffer enthalten")
    .min(8, "Passwort sollte 8 Zeichen enthalten.")
 validationSchema: SignupSchema,
     validationSchema={SignupSchema}
    import * as yup from 'yup';
})*/



const SimpleForm = props => {
  const { state, action } = useStateMachine(Update);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails,
    criteriaMode: 'all',
   
    
  });
  const { push } = useHistory();
  const onSubit = data => {
    action(data);
    push("/danke");
    alert(JSON.stringify(data));
  };

/* as="p" Klass für ErrorDiplay*/ 

  return (
    <form className='form' onSubmit={handleSubmit(onSubit)} 
    defaultValues={state.yourDetails}
   
    >
      <h2>Informationen</h2>
      <label>
        Name:
        <input
          name="name" id="name" placeholder="Max Mustermann"
          ref={register({ required: "Notwendig"})}
        />
        <ErrorMessage errors={errors} name="name" as="p" /> 

      </label>

      <label>
        Adresse:
        <input
          name="adresse" placeholder="Musterstraße 5"
          ref={register({ required: "Notwendige Angabe" })}
        />
        <ErrorMessage errors={errors} name="adresse" as="p" />
      </label>

      <label>
        Email:
        <input
          name="email" id="email" placeholder="ma.muster@email.de"
          ref={register({ required: "Ungültigs Email" })}
        />
        <ErrorMessage errors={errors} name="email" as="p" />
      </label>
      <label>
        Passwort:
        <input
          name="passwort" id="passwort" placeholder="Dein Passwort"
          ref={register({ required: "Min. acht Zeichen" })}
        />
        <ErrorMessage errors={errors} name="passwort" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default SimpleForm;