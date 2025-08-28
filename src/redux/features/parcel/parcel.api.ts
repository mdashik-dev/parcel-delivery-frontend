import { baseApi } from "@/redux/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (data) => ({
        url: "/parcel/create-parcel",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["PARCELS"],
    }),
    cancelParcel: builder.mutation({
      query: (data) => ({
        url: `/parcel/cancel/${data.id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCELS"],
    }),
    confirmParcel: builder.mutation({
      query: (data) => ({
        url: `/parcel/confirm/${data.id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCELS"],
    }),
    updateParcelStatus: builder.mutation({
      query: (data) => ({
        url: `/parcel/update-status/${data.id}`,
        method: "PATCH",
        data: data
      }),
      invalidatesTags: ["PARCELS"],
    }),
    getAllParcels: builder.query({
      query: (params) => ({
        url: "/parcel/me",
        method: "GET",
        params
      }),
      providesTags: ["PARCELS"],
      // transformResponse: (response) => response.data,
    }),
  }),
});

export const { useCreateParcelMutation, useGetAllParcelsQuery, useConfirmParcelMutation, useUpdateParcelStatusMutation, useCancelParcelMutation } = bookingApi;
