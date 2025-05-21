import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiLibros = createApi({
    reducerPath: "apiLibros",
    baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/books/v1/volumes"}),

    endpoints: (builder) => ({
        receiveAll: builder.query({
            query: (search)=> ({
                url: `?q=${search}`
            })
        })
    })
})


export const apiQuotes = createApi({

    reducerPath: "apiQuotes",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.api-ninjas.com/v1/quotes"}),

    endpoints: (builder) => ({
        randomQuotes: builder.query({
            query:() => ({
                url: ""
            })
        })
    })
})

export const {useReceiveAllQuery} = apiLibros
export const {useRandomQuotesQuery} = apiQuotes

