import supabase from "./supabase";

export async function login({ email, password }) {
  console.log("password", password);
  console.log("email", email);

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
