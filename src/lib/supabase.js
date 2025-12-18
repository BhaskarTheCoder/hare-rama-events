import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to submit contact form
export const submitContactForm = async (formData) => {
  const { data, error } = await supabase
    .from('Contact Information')
    .insert([
      {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        event_details: formData.event_details,
        consent: formData.consent,
        submitted_at: formData.submitted_at
      }
    ])
    .select();

  if (error) {
    console.error('Error submitting form:', error);
    throw error;
  }

  return data;
};

