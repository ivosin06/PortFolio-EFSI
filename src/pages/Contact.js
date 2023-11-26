import "../styles/Contact.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .max(30, 'Este campo no puede pasar de 30 caracteres')
            .required("Un nombre es requerido"),
        phone: Yup.number()
            .required("Un telefono es requerido")
            .positive("Un telefono debe ser positivo "),
        email: Yup.string()
            .required("Un email es requerido")
            .email("Este email no es valido ")
            .max(256, "La longitud de un email no puede superar los 256 caracteres"),
        message: Yup.string()
            .required("Un mensaje es requerido")
            .max(300, "La longitud de un mensaje no puede superar los 300 caracteres")
            .min(50, "Este campo debe tener como minimo 50 caracteres")
    });

    return (
        <>  
            <Formik
                initialValues={{
                    name: '',
                    phone: 0,
                    email: '',
                    message: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="form-contact">
                    <div className="inputs__contain">
                        <div class="input-contain">

                            <Field
                                className="input-text"
                                type="text"
                                name="name"
                                autoCapitalize="true"
                                maxLength="30"
                                size="100"
                                required
                                autoComplete="off"
                            />
                            <label class="placeholder-text" for="fname" id="placeholder-fname"> <div class="text">Nombre</div></label>

                        </div> <div className="error__container"><p className="error-message">
                            <ErrorMessage className="error-message" name="name" />
                        </p></div>

                        <div class="input-contain">

                            <Field
                                className="input-text"
                                type="tel"
                                name="phone"
                                autoCapitalize="true"
                                maxLength="15"
                                size="100"
                                required
                                autoComplete="off"
                            />
                            <label class="placeholder-text" for="fname" id="placeholder-fname"> <div class="text">Telefono</div></label>

                        </div>
                        <p className="error-message">
                            <ErrorMessage className="error-message" name="phone" />
                        </p>
                        <div class="input-contain">

                            <Field
                                className="input-text"
                                type="email"

                                name="email"
                                autoCapitalize="true"
                                maxLength="50"
                                size="100"
                                required
                                autoComplete="off"
                            />
                            <label class="placeholder-text" for="fname" id="placeholder-fname"> <div class="text">Email</div></label>

                        </div>
                        <p className="error-message">
                            <ErrorMessage className="error-message" name="email" />
                        </p>

                        <div class="input-contain">

                            <Field
                                className="input-text message"
                                type="text"
                                name="message"
                                autoCapitalize="true"
                                maxLength="300"
                                size="100"
                                required
                                autoComplete="off"
                            />
                            <label class="placeholder-text" for="fname" id="placeholder-fname"><div class="text">Mensaje</div></label>

                        </div>
                        <p className="error-message">
                            <ErrorMessage className="error-message" name="message" />
                        </p>
                    </div>
                    <div className="modal-container-footer">
                        <button className="button is-ghost" type="reset">Cancelar </button>
                        <button className="button is-primary" type="submit"> Conectar!</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Contact;