import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeFormData, schema } from "./schema";

type FormType = "CREATE" | "EDIT";

const EmployeeForm = () => {
  const {
    register,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<EmployeeFormData>({ resolver: zodResolver(schema) });

  isSubmitSuccessful && reset();

  const watchCurrentEmployee = watch("currentEmployee");

  return (
    <>
      <form>
        <div>
          <h1>Personal Information</h1>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" {...register("firstName")} />
          <br />
          <label htmlFor="middleNames">Middle Names (if any)</label>
          <input id="middleNames" type="text" {...register("middleNames")} />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" {...register("lastName")} />
        </div>
        <div>
          <h1>Contact details</h1>
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" {...register("email")} />
          <br />
          <label htmlFor="mobileNumber">Mobile phone</label>
          <input id="mobileNumber" type="text" {...register("mobileNumber")} />
          <br />
          <label htmlFor="address">Home address</label>
          <input id="address" type="text" {...register("address")} />
        </div>
        <div>
          <h1>Employment Information</h1>
          <div>
            <legend>Contract type?</legend>
            <div>
              <input
                type="radio"
                id="permanent"
                value="permanent"
                defaultChecked
                {...register("contractType")}
              />
              <label htmlFor="permanent">Permanent</label>
            </div>
            <div>
              <input
                type="radio"
                id="casual"
                value="casual"
                {...register("contractType")}
              />
              <label htmlFor="casual">Casual</label>
            </div>
          </div>
          <div>
            <label htmlFor="startDate">Start date</label>
            <input
              type="text"
              id="startDate"
              {...register("startDate")}
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="currentEmployee"
              {...register("currentEmployee")}
            />{" "}
            <label htmlFor="currentEmployee">Is a current employee</label>
          </div>
          {!watchCurrentEmployee && (
            <div>
              <label htmlFor="endDate">End date</label>
              <input
                type="text"
                id="endDate"
                {...register("endDate")}
                placeholder="YYYY-MM-DD"
              />
            </div>
          )}
        </div>
        <div>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;
