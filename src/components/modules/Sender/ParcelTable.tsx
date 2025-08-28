import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { X } from "lucide-react";
import { useCancelParcelMutation } from "@/redux/features/parcel/parcel.api";
import { toast } from "sonner";

interface Parcel {
  _id: string;
  trackingId: string;
  type: string;
  weight: number;
  deliveryAddress: string;
  currentStatus: string;
  fee: number;
  createdAt: string;
}

interface Meta {
  page: number;
  totalPage: number;
}

interface ParcelTableProps {
  parcels: Parcel[];
  meta: Meta;
}

export default function ParcelTable({
  parcels,
  currentPage,
  setCurrentPage,
  meta,
}: ParcelTableProps) {
  const [cancelParcel, { isLoading, isError, error }] =
    useCancelParcelMutation();
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < meta?.totalPage) setCurrentPage((prev) => prev + 1);
  };

  const handleCancel = async (id: string) => {
    if (!id) return;

    try {
      await cancelParcel({ id }).unwrap();
      toast.success("Parcel cancelled successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel parcel!");
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Receiver</TableHead>
            <TableHead>Tracking ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Weight (kg)</TableHead>
            <TableHead>Delivery Address</TableHead>
            <TableHead>Status Logs</TableHead>
            <TableHead>Fee (BDT)</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {parcels?.map((parcel) => (
            <TableRow key={parcel._id}>
              <TableCell>{parcel?.receiverId?.name}</TableCell>
              <TableCell>{parcel.trackingId}</TableCell>
              <TableCell>{parcel.type}</TableCell>
              <TableCell>{parcel.weight}</TableCell>
              <TableCell>{parcel.deliveryAddress}</TableCell>

              <TableCell>
                <div className="flex flex-col gap-1">
                  {parcel?.statusLogs?.map((log, idx) => (
                    <div
                      key={idx}
                      className="text-xs p-1 rounded bg-gray-100 dark:bg-gray-800"
                    >
                      <span className="font-medium">{log.status}</span> <br />
                      <span className="text-gray-500">
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                      {log.note && (
                        <p className="italic text-gray-600">Note: {log.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </TableCell>

              <TableCell>{parcel.fee}</TableCell>
              <TableCell>
                {new Date(parcel.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <Button size="sm" onClick={() => handleCancel(parcel._id)}>
                  {isLoading ? (
                    "Cancelling..."
                  ) : (
                    <>
                      Cancel
                      <X />
                    </>
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="flex items-center px-2">
          Page {currentPage} of {meta?.totalPage}
        </span>
        <Button onClick={handleNext} disabled={currentPage === meta?.totalPage}>
          Next
        </Button>
      </div>
    </div>
  );
}
