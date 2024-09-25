import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeFormData, schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import styles from "./EmployeeForm.module.scss";

type FormType = "CREATE" | "EDIT";

interface EmployeeFormProps {
  formType?: FormType;
  onSubmit: (data: EmployeeFormData, id?: any) => unknown;
  defaultValues?: EmployeeFormData;
}

const EmployeeForm = ({
  formType = "CREATE",
  defaultValues = {
    firstName: "",
    middleNames: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    contractType: "",
    startDate: "",
    currentEmployee: false,
    endDate: "",
  },
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
  } = useForm<EmployeeFormData>({ resolver: zodResolver(schema), defaultValues });
  const queryClient = useQueryClient();
  const watchCurrentEmployee = watch("currentEmployee");

  // prevents "Invalid Date" being passed when field hidden
  useEffect(() => {
    if (!watchCurrentEmployee) {
      setValue("endDate", "");
    }
  }, [watchCurrentEmployee]);

  isSubmitSuccessful && reset();

  const cancelBtn = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  console.log(errors);

  return (
    <div className={styles.EmployeeForm}>
      <h1>Add a new employee</h1>
      <p>All visible fields are required.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <div className={styles.groupHeader}>Personal Information</div>
          <div className={styles.inputElement}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className={styles.inputField}
            />
            {errors.firstName && <small>{errors.firstName.message}</small>}
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="middleNames">Middle Names (if any)</label>
            <input
              id="middleNames"
              type="text"
              {...register("middleNames")}
              className={styles.inputField}
            />
            {errors.middleNames && <small>{errors.middleNames.message}</small>}
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className={styles.inputField}
            />
            {errors.lastName && <small>{errors.lastName.message}</small>}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.groupHeader}>Contact details</div>
          <div className={styles.inputElement}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="text"
              {...register("email")}
              className={styles.inputField}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="mobileNumber">Mobile phone</label>
            <input
              id="mobileNumber"
              type="text"
              {...register("mobileNumber")}
              className={styles.inputField}
            />
            {errors.mobileNumber && <small>{errors.mobileNumber.message}</small>}
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="address">Home address</label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className={styles.inputField}
            />
            {errors.address && <small>{errors.address.message}</small>}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.groupHeader}>Employment Information</div>
          <div>
            <legend>Contract type?</legend>
            <div className={styles.radioElement}>
              <input
                type="radio"
                id="permanent"
                value="Permanent"
                defaultChecked
                {...register("contractType")}
              />
              <label htmlFor="permanent">Permanent</label>
            </div>
            <div className={styles.radioElement}>
              <input
                type="radio"
                id="contract"
                value="Contract"
                {...register("contractType")}
              />
              <label htmlFor="contract">Contract</label>
            </div>
            <div className={styles.radioElement}>
              <input
                type="radio"
                id="casual"
                value="Casual"
                {...register("contractType")}
              />
              <label htmlFor="casual">Casual</label>
            </div>
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="startDate">Start date</label>
            <input
              type="text"
              id="startDate"
              {...register("startDate")}
              placeholder="YYYY-MM-DD"
              className={styles.inputField}
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
            <div className={styles.inputElement}>
              <label htmlFor="endDate">End date</label>
              <input
                type="text"
                id="endDate"
                {...register("endDate")}
                placeholder="YYYY-MM-DD"
                className={styles.inputField}
              />
              {errors.endDate && <small>{errors.endDate.message}</small>}
            </div>
          )}
        </div>
        <div className={styles.formButtons}>
          <input type="submit" value="Save" className={styles.submitBtn} />
          <button onClick={(e) => cancelBtn(e)} className={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
