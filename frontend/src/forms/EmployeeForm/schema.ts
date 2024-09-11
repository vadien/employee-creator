import * as z from "zod";

export const schema = z.object({
  firstName: z.string().min(1).max(250),
  middleNames: z.string().min(1).max(250).optional(),
  lastName: z.string().min(1).max(250),
  email: z.string().email(),
  mobileNumber: z.string().min(1).max(250),
  address: z.string(),
  contractType: z.string(),
  startDate: z.date(),
  currentEmployee: z.boolean(),
});

export type EmployeeFormData = z.infer<typeof schema>;
