import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { CreateParcelModal } from "./CreateParcelModal";
import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcel.api";
import ParcelTable from "./ParcelTable";

export default function Parcels() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data } = useGetAllParcelsQuery({ page: currentPage, limit });

  //   const { data } = useGetTourTypesQuery({ page: currentPage, limit });
  //   const [removeTourType] = useRemoveTourTypeMutation();

  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing...");
    // try {
    //   const res = await removeTourType(tourId).unwrap();

    //   if (res.success) {
    //     toast.success("Removed", { id: toastId });
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  console.log(data)
  const totalPage = 1;

  //* Total page 2 => [0, 0]

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">All Parcels</h1>
        <CreateParcelModal />
      </div>
      <ParcelTable
        parcels={data?.data}
        meta={data?.meta}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
