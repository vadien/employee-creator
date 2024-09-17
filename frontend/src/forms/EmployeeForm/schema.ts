import * as z from "zod";

const alphaRegex = new RegExp("^[A-Za-z ]+$");

export const schema = z
  .object({
    firstName: z.string().min(1).max(250).regex(alphaRegex),
    middleNames: z.string().min(1).max(250).regex(alphaRegex).optional(),
    lastName: z.string().min(1).max(250).regex(alphaRegex),
    email: z.string().email(),
    mobileNumber: z.string().min(1).max(250),
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
