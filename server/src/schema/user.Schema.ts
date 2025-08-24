import z from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, { error: "Username must be atleast 3 characters" }),
  email: z.email({ error: "Email is not valid" }),
  password: z
    .string().min(8,{error:""})
    .regex(/[a-z]/, {
      error: "Password must be atleast one lowercase character",
    })
    .regex(/[0-9]/, { error: "Password must be atleast one number" })
    .regex(/[A-Z]/, { error: "Password must be atleast uppercase character" })
    .regex(/[!@#$%&*?]/, {
      error: "Pasword must be atleast one special character",
    }),
});

export type signupInput=z.infer<typeof signupSchema>

export const signInSchema=z.object({
    email:z.email({error:"Invalid email address"}),
    password:z.string().min(8,"Password must be atleast 8 characters")
})

export type signinInput=z.infer<typeof signupSchema>
