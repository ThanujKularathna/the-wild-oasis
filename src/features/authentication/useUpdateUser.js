import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("usera account updted");
      // queryClient.setQueryData("user", user);

      queryClient.invalidateQueries({ queryKey: ["user"] }); // invalid karanwa meken after that fetch the data again
    },
    onError: (error) => toast.error(error.message),
  });
  return { updateUser, isUpdating };
}
