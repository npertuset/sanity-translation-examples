// Import baseLanguage just to show an example with customizing the slug source
// option
import { baseLanguage } from '../languages'

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,
  // We need to define preview if the fields we
  // use as preview of this document in lists etc
  // is a translated field. The fields we name here
  // will be used for previews with the value of the
  // base language.
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      title: 'Date',
      type: 'date',
      name: 'date',
      localize: false
    },
    {
      type: 'string',
      name: 'titlev2',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        // How you could manually specify a translated field, should you have
        // to.
        source: `title.${baseLanguage.name}`
      },
      localize: false
    },
    {
      type: 'openGraph',
      name: 'openGraph'
    },
    {
      type: 'image',
      name: 'image',
      localize: false,
      options: {
        hotspot: true
      }
    },
    {
      type: 'richText',
      name: 'body'
    },
    {
      type: 'richText',
      name: 'excerpt'
    },
    {
      type: 'reference',
      name: 'author',
      to: [{ type: 'author' }]
    },
    
  ]
}
