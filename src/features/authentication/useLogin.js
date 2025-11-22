import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueriesData("user", user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
