import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  console.log(numDays, "num daysss");

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter((stay) => stay.status === "checked-out");

  console.log(confirmedStays, "confiremd");
  console.log(stays, "stays");

  return { isLoading, stays, confirmedStays, numDays };
}
