import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '781800d2497f4459b8bc3f325f29de81',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '姜帅的小站',
  domain: 'https://shzyxg.notion.site/781800d2497f4459b8bc3f325f29de81?pvs=4',
  author: '姜帅',

  // open graph metadata (optional)
  description: 'Hi，远方的朋友，你好 欢迎来访',

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
         title: '博客',
         pageId: '3e509616a3f24dc19593e624e3868c76'
       },
       {
         title: '电影',
         pageId: '5fc32e552022492c8fc2012c2c499385'
       },
       {
         title: '电视',
         pageId: 'c04956523a25405db7bb9763dbf2ff3b '
       },
       {
         title: '导航',
        url: 'http://nav.jiangshuai.com.cn?ref=jiangshuai.com.cn'
       }
     ]
})
  
    //   url: 'https://www.linkedin.com/in/hanmil-lee-828a57187/
    // title: '阅读',
    //pageId: '57a0e4f7a10141148835dbe196327063'

