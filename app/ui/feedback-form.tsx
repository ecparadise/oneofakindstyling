"use client"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';
import { sendMail } from "../api/send-mail"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from 'react-toastify';

export default function FeedbackForm() {
  const [submitLoading, setIsSubmitLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().nonempty("Please enter your name"),
    email: z.email("Please enter a valid email address"),
    feedback: z.string().nonempty("Please enter feedback"),
    isAnonymous: z.boolean().optional()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
      isAnonymous: false
    },
  })

  const onSubmit = async (data: any) => {
    setIsSubmitLoading(true);
    const { name, feedback, email, isAnonymous } = data;
    const response: any = await sendMail({
      text: `Name: ${name}\nFeedback: ${feedback}\nEmail: ${email}
      ${isAnonymous ? '\nUser opted to display feedback anonymously.' : ''}`,
      email
    });
    if (response?.messageId) {
      toast.success('Your feedback has been submitted!')
      form.reset();
    } else {
      toast.error('There was an error submitting your feedback. Please try again later.')
    }
    setIsSubmitLoading(false)
  }
  return (<form id="form-rhf-demo" className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
    <FieldSet>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input {...field} id="name" type="text" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>)}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input {...field} id="email" type="email" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>)}
        />
        <Controller
          name="isAnonymous"
          control={form.control}
          render={({ field }) => (
            <>
              <Field>
                <div className="flex gap-2">
                  <Checkbox
                    id="anonymous-checkbox"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FieldLabel
                    htmlFor="anonymous-checkbox"
                    className="font-normal"
                  >
                    Display my feedback anonymously
                  </FieldLabel>
                </div>
                <FieldDescription>Your name will be used internally only, if I choose to post your testimony I will not share your name.</FieldDescription>
              </Field>

            </>)}
        />
        <Controller
          name="feedback"
          control={form.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
              <Textarea {...field} id="feedback" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>)} />
        <Field orientation="horizontal">
          <Button disabled={submitLoading} type="submit">
            {submitLoading && <Spinner />}
            Submit
          </Button>
          <Button disabled={submitLoading} variant="outline" type="button" onClick={() => form.reset()}>
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>)
}
