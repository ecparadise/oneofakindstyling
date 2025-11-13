"use client"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';

export default function FeedbackForm() {
  const formSchema = z.object({
    name: z.string().optional(),
    feedback: z.string().nonempty("Please enter feedback")
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      feedback: "",
    },
  })

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  }
  return (<form id="form-rhf-demo" className="w-full max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
    <FieldSet>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input {...field} id="name" type="text" />
              <FieldDescription>Leave blank if you prefer to stay anonymous!</FieldDescription>
            </Field>)}
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
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button" onClick={() => form.reset()}>
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>)
}