import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addUserAction } from "./reducers/actions";
import "./style.css";

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
}
const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
});
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(
      addUserAction({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      })
    );
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="header">Sign up</h3>
        <div className="wrapper-input">
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          <input
            id="firstName"
            placeholder="First name"
            type="text"
            {...register("firstName")}
          />
        </div>
        <p className="error-message">{errors.firstName?.message}</p>
        <div className="wrapper-input">
          <label className="label" htmlFor="lastName">
            Last Name:{" "}
          </label>
          <input
            id="lastName"
            placeholder="Last name"
            type="text"
            {...register("lastName")}
          />
        </div>
        <p className="error-message">{errors.lastName?.message}</p>
        <div className="wrapper-input">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input id="email" placeholder="Email" {...register("email")} />
        </div>
        <p className="error-message">{errors.email?.message}</p>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
