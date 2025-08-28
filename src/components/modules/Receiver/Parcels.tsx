import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Package, History, Edit } from "lucide-react";
import {
  useConfirmParcelMutation,
  useGetAllParcelsQuery,
} from "@/redux/features/parcel/parcel.api";
import { Parcel } from "@/types/parcel.type";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import StatusUpdateForm from "./StatusUpdateForm";

export default function Parcels() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: parcels } = useGetAllParcelsQuery({ page: currentPage, limit });
  const [confirmParcel] = useConfirmParcelMutation();

  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(null);

  const confirmDelivery = async (id: string) => {
    if (!id) return;
    try {
      await confirmParcel({ id }).unwrap();
      toast.success("Parcel confirmed successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to confirm parcel!");
    }
  };

  const incomingParcels = parcels?.data?.filter(
    (p: Parcel) => !p.isDelivered && !p.isCanceled
  );
  const deliveryHistory = parcels?.data?.filter((p: Parcel) => p.isDelivered);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Receiver Dashboard</h1>

      <Tabs defaultValue="incoming">
        <TabsList>
          <TabsTrigger value="incoming" className="flex items-center gap-2">
            <Package size={16} /> Incoming Parcels
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History size={16} /> Delivery History
          </TabsTrigger>
        </TabsList>

        {/* Incoming Parcels */}
        <TabsContent value="incoming" className="mt-4">
          {incomingParcels?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {incomingParcels.map((parcel: Parcel) => (
                <Card key={parcel.trackingId} className="rounded-2xl shadow-md">
                  <CardHeader>
                    <CardTitle>{parcel.trackingId}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <span className="font-semibold">Type:</span> {parcel.type}
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      {parcel.deliveryAddress}
                    </p>
                    <p>
                      <span className="font-semibold">Weight:</span>{" "}
                      {parcel.weight} kg
                    </p>
                    <p>
                      <span className="font-semibold">Fee:</span> {parcel.fee}{" "}
                      BDT
                    </p>
                    <p className="text-yellow-600 font-medium mt-1">
                      Status: {parcel.currentStatus}
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                      <Button
                        onClick={() => confirmDelivery(parcel._id)}
                        className="w-full flex items-center gap-2"
                      >
                        <CheckCircle size={16} /> Confirm Delivery
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full flex items-center gap-2"
                          >
                            <Edit size={16} /> Update Status
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                          <DialogHeader>
                            <DialogTitle>
                              Update Status for {parcel.trackingId}
                            </DialogTitle>
                          </DialogHeader>
                          <StatusUpdateForm parcel={parcel} />
                          <DialogClose asChild>
                            <Button className="mt-4 w-full" variant="ghost">
                              Cancel
                            </Button>
                          </DialogClose>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No incoming parcels right now.</p>
          )}
        </TabsContent>

        {/* Delivery History */}
        <TabsContent value="history" className="mt-4">
          {deliveryHistory?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {deliveryHistory.map((parcel: Parcel) => (
                <Card key={parcel.trackingId} className="rounded-2xl shadow-md">
                  <CardHeader>
                    <CardTitle>{parcel.trackingId}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <span className="font-semibold">Type:</span> {parcel.type}
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      {parcel.deliveryAddress}
                    </p>
                    <p>
                      <span className="font-semibold">Weight:</span>{" "}
                      {parcel.weight} kg
                    </p>
                    <p>
                      <span className="font-semibold">Fee:</span> {parcel.fee}{" "}
                      BDT
                    </p>
                    <p className="text-green-600 font-medium mt-1">
                      Delivered ✅
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No parcels delivered yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
