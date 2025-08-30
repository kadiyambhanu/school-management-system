'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  contact: z.string().min(10, 'Contact must be at least 10 digits').regex(/^[0-9]+$/, 'Contact must be a number'),
  email_id: z.string().email('Invalid email address'),
  image: z.any().optional(),
});

type FormData = z.infer<typeof schema>;

export default function SchoolForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      let imageUrl = null;
      if (data.image && data.image.length > 0) {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const res = await fetch('/api/schools/upload', {
          method: 'POST',
          body: formData,
        });
        const json = await res.json();
        if (json.imageUrl) {
          imageUrl = json.imageUrl;
        }
      }

      const payload = {
        ...data,
        contact: Number(data.contact),
        image: imageUrl,
      };

      const response = await fetch('/api/schools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('School added successfully');
      } else {
        alert('Failed to add school');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 space-y-4">
      <div>
        <label htmlFor="name" className="block font-semibold">Name</label>
        <input id="name" {...register('name')} className="w-full border p-2 rounded" />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block font-semibold">Address</label>
        <input id="address" {...register('address')} className="w-full border p-2 rounded" />
        {errors.address && <p className="text-red-600">{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block font-semibold">City</label>
        <input id="city" {...register('city')} className="w-full border p-2 rounded" />
        {errors.city && <p className="text-red-600">{errors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="state" className="block font-semibold">State</label>
        <input id="state" {...register('state')} className="w-full border p-2 rounded" />
        {errors.state && <p className="text-red-600">{errors.state.message}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="block font-semibold">Contact</label>
        <input id="contact" {...register('contact')} className="w-full border p-2 rounded" />
        {errors.contact && <p className="text-red-600">{errors.contact.message}</p>}
      </div>

      <div>
        <label htmlFor="email_id" className="block font-semibold">Email</label>
        <input id="email_id" {...register('email_id')} className="w-full border p-2 rounded" />
        {errors.email_id && <p className="text-red-600">{errors.email_id.message}</p>}
      </div>

      <div>
        <label htmlFor="image" className="block font-semibold">Image</label>
        <input id="image" type="file" accept="image/*" {...register('image')} className="w-full" />
      </div>

      <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">
        {isSubmitting ? 'Submitting...' : 'Add School'}
      </button>
    </form>
  );
}
