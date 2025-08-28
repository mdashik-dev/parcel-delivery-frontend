import { baseApi } from "@/redux/baseApi";
import { IResponse, ISendOtp, IVerifyOtp } from "@/types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // login: builder.mutation({
        //   query: (userInfo) => ({
        //     url: "/user/get-all-senders",
        //     method: "POST",
        //     data: userInfo,
        //   }),
        // }),
        getReceivers: builder.query({
            query: () => ({
                url: "/user/get-all-receivers",
                method: "GET",
            }),
            providesTags: ["RECEIVERS"],
        }),
    }),
});

export const {
    useGetReceiversQuery
} = userApi;
