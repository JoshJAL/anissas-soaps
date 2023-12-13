'use client';

import FormWrapper from '@/components/forms/FormWrapper';
import { useState } from 'react';
import Input from '../inputs/Input';
import TextArea from '../inputs/TextArea';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('Thanks for your message! We will get back to you as soon as possible!');
      setFormState({
        email: '',
        firstName: '',
        lastName: '',
        message: ''
      });
      setSubmitting(false);
    }, 2000);
  }

  return (
    <FormWrapper handleSubmit={(e) => handleSubmit(e)} title='Send Me an Email!' submitting={submitting}>
      <Input
        placeholder='Jane/John'
        name='firstName'
        label='First Name'
        value={formState.firstName}
        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
      />
      <Input
        placeholder='Doe'
        name='lastName'
        label='Last Name'
        value={formState.lastName}
        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
      />
      <Input
        type='email'
        placeholder='anissa@anissasoap.com'
        name='contactEmail'
        label='Email'
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
      />
      <TextArea
        placeholder='Thank you for visting our website and taking the time to message us!'
        name='message'
        label='Message'
        value={formState.message}
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
      />
    </FormWrapper>
  );
}
