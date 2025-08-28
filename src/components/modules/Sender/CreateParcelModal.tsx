import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateParcelMutation } from "@/redux/features/parcel/parcel.api";
import { useGetReceiversQuery } from "@/redux/features/users/user.api";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const parcelTypes = ["Fragile", "Document", "Electronics", "Clothing", "Food"];

export function CreateParcelModal() {
  const [open, setOpen] = useState(false);
  const { data: receivers, isLoading } = useGetReceiversQuery(undefined);
  const [addParcel] = useCreateParcelMutation();
  const user = useSelector(
    (state: RootState) =>
      state.baseApi.queries["userInfo(undefined)"]?.data?.data
  );

  const form = useForm({
    defaultValues: {
      senderId: user?._id || "",
      receiverId: "",
      type: "",
      weight: 0,
      deliveryAddress: "",
      currentStatus: "Requested",
    },
  });
  useEffect(() => {
    if (user?._id) {
      form.setValue("senderId", user?._id);
    }
  }, [user, form]);

  const onSubmit = async (data: any) => {
    let loadingToast;
    try {
      loadingToast = toast.loading("Creating parcel...");

      const res = await addParcel(data).unwrap();

      if (res.success) {
        toast.success("Parcel Created Successfully", {
          id: loadingToast,
        });
        setOpen(false);
      }
    } catch (err: any) {
      if (!err?.data?.success) {
        err?.data?.errorSources?.forEach((err) => {
          toast.error(`${err.path}: ${err.message}`, {
            id: loadingToast,
          });
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Parcel</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Parcel</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            id="create-parcel"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="w-full grid grid-cols-2 gap-4">
              {/* Sender */}
              <div className="flex flex-col space-y-2">
                <input
                  type="hidden"
                  {...form.register("senderId")}
                  value={user?._id || ""}
                />
                <FormLabel>Sender</FormLabel>
                <FormControl>
                  <Input value={user?.name || ""} disabled />
                </FormControl>
              </div>

              {/* Receiver */}
              <FormField
                control={form.control}
                name="receiverId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Receiver" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {receivers?.data?.map((u) => (
                          <SelectItem key={u._id} value={u._id}>
                            {u.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Parcel Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Parcel Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {parcelTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Weight */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Delivery Address */}
            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Uposhohor, Rajshahi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Current Status */}
            <FormField
              control={form.control}
              name="currentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="create-parcel">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
