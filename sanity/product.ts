// import { title } from "process";
import { defineType, defineField } from "sanity";
export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "product",
      title: "Product",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "product",
        maxLength: 100,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "Aarray",
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "reference",
      to: {
        type: "gender",
      },
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: {
        type: "category",
      },
    }),
  ],
});
