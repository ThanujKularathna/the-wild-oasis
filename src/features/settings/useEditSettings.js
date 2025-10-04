import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting succesfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] }); // invalid karanwa meken after that fetch the data again
    },
    onError: (error) => toast.error(error.message),
  });
  return { isUpdating, updateSetting };
}
