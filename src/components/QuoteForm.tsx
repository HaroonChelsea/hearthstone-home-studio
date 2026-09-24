import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function QuoteForm({ email }: { email: string }) {
  return (
    <form id="quote-form" data-email={email}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="quote-name">Name</FieldLabel>
          <Input id="quote-name" name="name" autoComplete="name" required />
        </Field>
        <div className="grid gap-7 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="quote-email">Email</FieldLabel>
            <Input id="quote-email" name="email" type="email" autoComplete="email" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="quote-phone">Phone</FieldLabel>
            <Input id="quote-phone" name="phone" type="tel" autoComplete="tel" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="quote-message">Message</FieldLabel>
          <Textarea
            id="quote-message"
            name="message"
            rows={4}
            placeholder="Tell us about the space and what you'd like to change."
            required
          />
        </Field>
        <Button type="submit" size="lg" className="h-14 w-full sm:w-auto sm:self-start sm:px-10">
          Send request
        </Button>
      </FieldGroup>
    </form>
  )
}
