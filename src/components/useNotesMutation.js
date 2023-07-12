import { useMutation, useQueryClient } from "react-query";

const useNotesMutation = (mutationFn) => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries("notes");
  };

  return useMutation(mutationFn, {
    onSuccess,
  });
};

export default useNotesMutation;
