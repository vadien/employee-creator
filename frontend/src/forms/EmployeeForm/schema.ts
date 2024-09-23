import * as z from "zod";

const alphaRegex = new RegExp("^[A-Za-z ]+$");
const mobRegex = new RegExp("^(04)");

export const schema = z
  .object({
    firstName: z.string().min(1).max(250).regex(alphaRegex),
    middleNames: z
      .string()
      .min(1)
      .max(250)
      .regex(alphaRegex)
      .optional()
      .or(z.literal("")),
    lastName: z.string().min(1).max(250).regex(alphaRegex),
    email: z.string().email(),
    mobileNumber: z
      .string()
      .length(10, { message: "Must be exactly 10 digits" })
      .regex(mobRegex, { message: "Must be a valid Australian mobile number" }),
    address: z.string(),
    contractType: z.string(),
    startDate: z.date(),
    currentEmployee: z.boolean(),
    endDate: z.date().optional(),
  })
  .refine(
    ({ currentEmployee, endDate }) => {
      if (!currentEmployee && !endDate) {
        return false;
      }
      return true;
    },
    { message: "If not a current employee, specify end date." }
  );

export type EmployeeFormData = z.infer<typeof schema>;
