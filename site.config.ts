import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '5fc32e552022492c8fc2012c2c499385',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '姜帅的电影',
  domain: 'https://shzyxg.notion.site/5fc32e552022492c8fc2012c2c499385?v=c8f265aaaebf4c3fb5a8e98d4f63c5f8&pvs=4',
  author: '姜帅',

  // open graph metadata (optional)
  description: 'Hi，我是arvin',

  // social usernames (optional)
  
  
  twitter: 'shzyxg',
  github: 'shzyxg',
  // linkedin: '',
  // instagram: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
 //  navigationStyle: 'default'
 navigationStyle: 'custom',
     navigationLinks: [
       {
         title: '关于',
         pageId: '434c4af265874080885b7f6a2b09e286'
       },
       {
         title: '联系',
         pageId: 'c37cb61fcd054182b5dfd51c014b1f3e'
       }
     ]
})

