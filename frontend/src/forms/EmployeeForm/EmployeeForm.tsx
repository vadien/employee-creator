import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeFormData, schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type FormType = "CREATE" | "EDIT";

interface EmployeeFormProps {
  formType?: FormType;
  onSubmit: (data: EmployeeFormData) => unknown;
  defaultValues?: EmployeeFormData;
}

const EmployeeForm = ({
  formType = "CREATE",
  // defaultValues = {
  //   endDate: "",
  // },
  onSubmit,
}: EmployeeFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    setValue,
  } = useForm<EmployeeFormData>({ resolver: zodResolver(schema) });
  const queryClient = useQueryClient();

  const watchCurrentEmployee = watch("currentEmployee");

  // prevents "Invalid Date" being passed when field hidden
  useEffect(() => {
    if (!watchCurrentEmployee) {
      setValue("endDate", undefined);
    }
  }, [watchCurrentEmployee]);

  isSubmitSuccessful && reset();

  const cancelBtn = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Personal Information</h1>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" {...register("firstName")} />
          {errors.firstName && <small>{errors.firstName.message}</small>}
          <br />
          <label htmlFor="middleNames">Middle Names (if any)</label>
          <input id="middleNames" type="text" {...register("middleNames")} />
          {errors.middleNames && <small>{errors.middleNames.message}</small>}
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" {...register("lastName")} />
          {errors.lastName && <small>{errors.lastName.message}</small>}
        </div>
        <div>
          <h1>Contact details</h1>
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" {...register("email")} />
          {errors.email && <small>{errors.email.message}</small>}
          <br />
          <label htmlFor="mobileNumber">Mobile phone</label>
          <input id="mobileNumber" type="text" {...register("mobileNumber")} />
          {errors.mobileNumber && <small>{errors.mobileNumber.message}</small>}
          <br />
          <label htmlFor="address">Home address</label>
          <input id="address" type="text" {...register("address")} />
          {errors.address && <small>{errors.address.message}</small>}
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
              {...register("startDate", { valueAsDate: true })}
              placeholder="YYYY-MM-DD"
            />
            {errors.startDate && <small>{errors.startDate.message}</small>}
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
                {...register("endDate", { valueAsDate: true })}
                placeholder="YYYY-MM-DD"
              />
              {errors.endDate && <small>{errors.endDate.message}</small>}
            </div>
          )}
        </div>
        <div>
          <input type="submit" value="Save" />
          <button onClick={(e) => cancelBtn(e)}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;
