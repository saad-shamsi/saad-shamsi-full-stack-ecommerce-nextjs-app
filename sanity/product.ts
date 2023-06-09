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
      type: "image",
    }),
    defineField({
      name: "gender",
      title: "Gender Categoty",
      type: "reference",
      to: [
        {
          type: "gender",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Product Categoty",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});
