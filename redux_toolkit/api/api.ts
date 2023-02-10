import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { FormRequestData, FormResponseData } from "@/interfaces/api/forms"

export const moraApi = createApi({
    reducerPath: "moramora/api",
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: build => ({
        submitDataForm: build.mutation<FormResponseData, FormRequestData>({
            query: (data) => ({
                url: "/forms",
                method: "POST",
                body: data
            }),
        })
    })
})

export const { useSubmitDataFormMutation } = moraApi

