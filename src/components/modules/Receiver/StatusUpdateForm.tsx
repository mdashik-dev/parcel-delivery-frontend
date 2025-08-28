import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Parcel } from "@/types/parcel.type";
import { toast } from "sonner";
import { useUpdateParcelStatusMutation } from "@/redux/features/parcel/parcel.api";

function StatusUpdateForm({ parcel }: { parcel: Parcel }) {
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  const [updateParcelStatus] = useUpdateParcelStatusMutation();

  const handleSubmit = async () => {
    console.log(parcel);
    if (!status) return;
    try {
      await updateParcelStatus({
        id: parcel._id,
        note,
        status,
        location: parcel.deliveryAddress,
      }).unwrap();
      toast.success("Parcel status updated successfully!");
      setStatus("");
      setNote("");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to confirm parcel!");
    }
  };

  return (
    <div className="space-y-4">
      <Select onValueChange={setStatus}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select new status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Requested">Requested</SelectItem>
          <SelectItem value="Approved">Approved</SelectItem>
          <SelectItem value="Dispatched">Dispatched</SelectItem>
          <SelectItem value="In Transit">In Transit</SelectItem>
          <SelectItem value="Delivered">Delivered</SelectItem>
          <SelectItem value="Canceled">Canceled</SelectItem>
        </SelectContent>
      </Select>

      {status === "Issue Reported" && (
        <textarea
          placeholder="Add a note"
          className="border rounded p-2 w-full"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      )}

      <Button onClick={handleSubmit} className="w-full">
        Update Status
      </Button>
    </div>
  );
}

export default StatusUpdateForm;
