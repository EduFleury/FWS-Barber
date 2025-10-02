"use client"

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    search: z.string().trim().min(1, {
      message: "digite algo para buscar"
    })
})

const Search = () =>{

  const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        search: "",
      },
    })

    const handleSubmit = (data : z.infer<typeof formSchema>) =>{
        router.push(`/barbershops?search=${data.search}`)
    }

    return(
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className=" flex items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="faça sua busca..." {...field} className=" w-full"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <SearchIcon/>
            </Button>
          </form>
        </Form>
      </>
    )
}

export default Search;