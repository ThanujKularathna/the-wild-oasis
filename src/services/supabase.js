import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nvjdxrlkdbxwmjnyukmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52amR4cmxrZGJ4d21qbnl1a211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NzQ5NDIsImV4cCI6MjA3MjQ1MDk0Mn0.edRqVyIf_fs7c-dr8SaBgKqtzMLQl5hFKv2u-_yn2r4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
