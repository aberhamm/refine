"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",slug:"react-toastify",authors:"joseph_mawa",tags:["react","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-toastify",source:"@site/blog/2023-06-01-react-toastify.md",title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:12.935,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",slug:"react-toastify",authors:"joseph_mawa",tags:["react","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide to Using the useLayoutEffect Hook in React",permalink:"/blog/uselayouteffect-vs-useeffect"},nextItem:{title:"Next.js 13.4's Server Actions and Data Fetching",permalink:"/blog/next-js-server-actions-and-data-fetching"},relatedPosts:[{title:"React-admin vs refine - Which React Framework is Best for B2B Apps?",description:"We'll compare the architectural structures of two web development frameworks - refine and React-admin.",permalink:"/blog/react-admin-vs-refine",formattedDate:"August 12, 2023",authors:[{name:"Ali Emir",title:"Software Developer",imageURL:"https://github.com/aliemir.png",key:"ali_emir"}],readingTime:37.28,date:"2023-08-12T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.55,date:"2023-07-02T00:00:00.000Z"},{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",permalink:"/blog/react-props",formattedDate:"November 16, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:10.95,date:"2022-11-16T00:00:00.000Z"}],authorPosts:[{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"January 30, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:7.94,date:"2023-01-30T00:00:00.000Z"},{title:"Comparing the best headless CMS solutions",description:"We compared best headless CMS solutions -  Strapi, Hasura, and Hygraph. We'll highlight their pros and cons.",permalink:"/blog/best-headless-cms",formattedDate:"February 8, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.8,date:"2023-02-08T00:00:00.000Z"},{title:"Building React admin panel with NextUI and refine",description:"We will see how  to build a React admin panel using refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.88,date:"2023-09-20T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is refine",id:"what-is-refine",level:2},{value:"How to create a refine app",id:"how-to-create-a-refine-app",level:2},{value:"What is react-toastify",id:"what-is-react-toastify",level:2},{value:"Notification providers in refine",id:"notification-providers-in-refine",level:2},{value:"The <code>open</code> method",id:"the-open-method",level:3},{value:"The <code>close</code> method",id:"the-close-method",level:3},{value:"The <code>useNotification</code> hook",id:"the-usenotification-hook",level:3},{value:"Create a notification provider with react-toastify",id:"create-a-notification-provider-with-react-toastify",level:2},{value:"Step 1 \u2014 Install react-toastify",id:"step-1--install-react-toastify",level:3},{value:"Step 2 \u2014 Set up the notification provider",id:"step-2--set-up-the-notification-provider",level:3},{value:"Step 3 \u2014 Create custom Undoable notification component",id:"step-3--create-custom-undoable-notification-component",level:3},{value:"Step 4 \u2014 Preview notification",id:"step-4--preview-notification",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Live CodeSandbox Example",id:"live-codesandbox-example",level:2}],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var f;const m={toc:d};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"React and its derivative frameworks, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),", make building data-intensive front-end applications a breeze. When dealing with data-intensive applications such as admin panels, dashboards, and internal tools, it is necessary to set up a robust and effective notification system."),(0,i.kt)("p",null,"An effective notification system ensures timely notification whenever changes happen in the database. It keeps users informed about changes in the database, especially when dealing with distributed systems."),(0,i.kt)("p",null,"Any refine project that uses a supported design system or component libraries, such as Material UI, Chakra UI, and Ant Design, comes with a customizable built-in notification provider. However, you can also build a custom notification system from the ground up or use one of the react toast libraries."),(0,i.kt)("p",null,"In the react ecosystem, there are several notification packages to choose from. React-toastify is one of the popular toast packages you can use to integrate a custom notification system in a React or refine project. In this article, you will create a custom notification provider in a refine application using react-toastify."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/react-toastify-min.gif",alt:"react toastify"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"What we'll cover in this article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-refine"},"What is refine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-react-toastify"},"What is react-toastify")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#notification-providers-in-refine"},"Notification providers in refine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-notification-provider-with-react-toastify"},"Create a notification provider with react-toastify"))),(0,i.kt)("h2",{id:"what-is-refine"},"What is refine"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," is a free, open-source, MIT-licensed React-based framework. refine is a feature-packed library. It ships with features for user authentication, routing, internalization, and networking out of the box."),(0,i.kt)("p",null,"The built-in features make refine a suitable package for building data-intensive front-end applications such as dashboards, admin panels, storefronts, and internal tools."),(0,i.kt)("p",null,"Additionally, the feature-rich refine ecosystem makes it easy to bootstrap a refine application and integrate popular design systems and component libraries such as Material UI, Chakra UI, and Ant design in your refine project."),(0,i.kt)("p",null,"If you are not interested in the design systems and component libraries highlighted above, you can bootstrap a headless refine application."),(0,i.kt)("h2",{id:"how-to-create-a-refine-app"},"How to create a refine app"),(0,i.kt)("p",null,"When looking to start using refine, you can bootstrap a refine application using the refine command line tool or the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new"),"\xa0platform. The refine.dev platform makes it easy to create a new refine project with all the necessary configurations in your browser."),(0,i.kt)("p",null,"Follow the steps below to bootstrap a new refine application using the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new"),"\xa0platform."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://refine.new/"},"refine.new"),"\xa0platform and log in using your GitHub or Google account.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'After logging into the refine.new platform, create a new refine project by following the steps or clicking the "Create New Project" button if you\'re on the ',(0,i.kt)("inlineCode",{parentName:"li"},"/projects")," page. Be sure to use Vite. Select Headless as your UI framework, REST API as a back-end service, and no authentication provider.  ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After creating a project in the previous step, build and download it to your local machine as a compressed Gzipped project. You need to give your project an appropriate name.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After downloading and extracting the compressed Gzipped project, open it in a text editor of your choice. Run one of the commands below to install the project dependencies.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After successfully installing the project dependencies described in the previous step, run the command below on the terminal to preview the project. It will launch the development server on localhost on port 5173.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,i.kt)("p",null,"Your project should look like the image below."),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/blog-post-list-page.png",alt:"react toastify"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The refine.new platform is one way of creating a refine application. You can also use the refine command line tool."),(0,i.kt)("h2",{id:"what-is-react-toastify"},"What is react-toastify"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-toastify"},"React-toastify")," is a free, open-source, MIT-licensed toast package you can use to provide temporary, unobtrusive, and auto-expiring notifications in your React or refine application. You can use it with react or react-based frameworks like refine. React-toastify is a simple but powerful package."),(0,i.kt)("p",null,"The main building blocks of react-toastify you will interact with most are the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToastContainer")," component and the ",(0,i.kt)("inlineCode",{parentName:"p"},"toast")," object. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ToastContainer")," component accepts several props for positioning the toast, specifying the theme,  type of notification, and several other configuration options."),(0,i.kt)("p",null,"The code below shows some props you can pass to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToastContainer")," component. For complete documentation of its props, read the react-toastify documentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<ToastContainer\n    position="top-right"\n    autoClose={5000}\n    hideProgressBar={false}\n    newestOnTop={false}\n    closeOnClick\n    rtl={false}\n    pauseOnFocusLoss\n    draggable\n    pauseOnHover\n    theme="light"\n/>\n')),(0,i.kt)("p",null,"You can trigger a notification by invoking the ",(0,i.kt)("inlineCode",{parentName:"p"},"toast")," function. It takes the message and configuration object as arguments. Invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"toast")," with the arguments below will display a notification with the specified message at the top left."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'toast("Successfully updated blog post", {\n    position: "top-left",\n    autoClose: 5000,\n    hideProgressBar: false,\n    closeOnClick: true,\n    pauseOnHover: true,\n    draggable: true,\n    progress: undefined,\n    theme: "light",\n});\n')),(0,i.kt)("p",null,"Some of the properties of the configuration object above are similar to the props we passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToastContainer"),". The options you specify using the ",(0,i.kt)("inlineCode",{parentName:"p"},"toast")," function supersede those you pass as props to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToastContainer"),"."),(0,i.kt)("h2",{id:"notification-providers-in-refine"},"Notification providers in refine"),(0,i.kt)("p",null,"As hinted above, refine offers out-of-the-box support for several design systems and UI libraries such as Material UI, Ant design, Mantine, and Chakra UI. If you use any of these design systems or component libraries, the refine command line tool or the refine.dev platform will create a project with an out-of-the-box notification setup."),(0,i.kt)("p",null,"For a built-in notification provider, you need to import the notification provider and pass it as a prop to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { notificationProvider } from "@refinedev/chakra";\n\nreturn (\n  <Refine\n      //...\n      notificationProvider={notificationProvider}\n  />\n);\n')),(0,i.kt)("p",null,"The refine notification feature is customizable. You can also pass a custom notification implementation as the value of the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/notification-provider/"},(0,i.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," prop if the built-in notification provider of a design system or UI library doesn't meet your needs."),(0,i.kt)("p",null,"In refine, a notification provider is an object with two properties. These properties are ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"close"),", whose values are functions with the shapes below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'interface NotificationProvider {\n    open: (params: OpenNotificationParams) => void;\n    close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n    key?: string;\n    message: string;\n    type: "success" | "error" | "progress";\n    description?: string;\n    cancelMutation?: () => void;\n    undoableTimeout?: number;\n  }\n\nconst notificationProvider:NotificationProvider = {\n    open: () => {},\n    close: () => {},\n};\n')),(0,i.kt)("p",null,"You don't need to declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," interface because you can import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"refine/core"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { NotificationProvider } from "@refinedev/core";\n')),(0,i.kt)("p",null,"In the sub-sections below, we will explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," methods of the notification provider to understand how they work."),(0,i.kt)("h3",{id:"the-open-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"open")," method"),(0,i.kt)("p",null,"refine invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method of the notification provider when it wants to display a toast after the user performs an operation that requires notification, such as updating or deleting a record."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method takes an object with the shape below as an argument. As the code below illustrates, the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenNotificationParams")," interface has several properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'interface OpenNotificationParams {\n    key?: string;\n    message: string;\n    type: "success" | "error" | "progress";\n    description?: string;\n    cancelMutation?: () => void;\n    undoableTimeout?: number;\n}\n')),(0,i.kt)("p",null,"Though the object passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method has several properties, it has two required properties, ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),". The other properties are optional."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," property is the message to display on the notification. On the other hand, the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property describes the type of the notification. A refine notification can be of type ",(0,i.kt)("inlineCode",{parentName:"p"},'"success"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"error"'),"  or ",(0,i.kt)("inlineCode",{parentName:"p"},'"progress"'),"."),(0,i.kt)("p",null,'The screenshot below shows a success notification with the message "Successfully edited Blog Posts" that refine displays after successfully editing a blog post.'),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/success-toast.png",alt:"react toastify"})),(0,i.kt)("br",null),(0,i.kt)("p",null,'Similarly, the screenshot below shows an error message with the text "Oops failed to update blog post" that refine displays after failing to update a record.'),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-01-react-toastify/error-toast.png",alt:"react toastify"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"the-close-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"close")," method"),(0,i.kt)("p",null,"Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method, refine invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," method when closing a notification. It takes the notification key as an argument. You can then use the notification key to close the notification."),(0,i.kt)("h3",{id:"the-usenotification-hook"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"useNotification")," hook"),(0,i.kt)("p",null,"The section above describes the contents of a notification provider. You need the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/useNotification/"},(0,i.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook to trigger a notification from within a component. The ",(0,i.kt)("inlineCode",{parentName:"p"},"useNotification")," hook returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," methods of the notification provider highlighted above."),(0,i.kt)("p",null,"You can then invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method to display the notification and the ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," method to close it. The code below illustrates the ",(0,i.kt)("inlineCode",{parentName:"p"},"useNotification")," hook at a very basic level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@refinedev/core";\n\nconst { open, close } = useNotification();\n\n// open notification\nopen?.({\n    key: "notification-key",\n    type: "success",\n    message: "Successfully updated Blog Post",\n    description: "This is a success message",\n});\n\n// close notification\nclose?.("notification-key");\n')),(0,i.kt)("h2",{id:"create-a-notification-provider-with-react-toastify"},"Create a notification provider with react-toastify"),(0,i.kt)("p",null,"In one of the sections above, we created a refine application using the refine.new platform. In this section, you will learn to create a custom notification provider using react-toastify. Follow the steps below."),(0,i.kt)("h3",{id:"step-1--install-react-toastify"},"Step 1 \u2014 Install react-toastify"),(0,i.kt)("p",null,"Our goal in this article is to create a custom notification system using react-toastify. Open the refine project you created above in your favorite text editor, and depending on your package manager, use one of the commands below to install react-toastify from the NPM package registry.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install react-toastify\n")),(0,i.kt)("h3",{id:"step-2--set-up-the-notification-provider"},"Step 2 \u2014 Set up the notification provider"),(0,i.kt)("p",null,"As explained above, the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/components/refine-config/"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component is one of the main components of a refine application. You will almost always use it to configure the settings for your application."),(0,i.kt)("p",null,"Let's start by creating a dedicated file for our notification provider. Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory, create a new directory and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"providers"),". Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"providers")," directory, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider.tsx")," file. Copy and paste the code below into it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/notifications/notificationProvider.tsx"',title:'"src/notifications/notificationProvider.tsx"'},'import React from "react";\nimport { NotificationProvider } from "@refinedev/core";\nimport { toast } from "react-toastify";\n\nexport const notificationProvider: NotificationProvider = {\n  open: ({ key, message, type, undoableTimeout, cancelMutation }) => {\n    if (toast.isActive(key as React.ReactText)) {\n      toast.update(key as React.ReactText, {\n        render: message,\n        type: "default",\n      });\n\n      return;\n    }\n\n    toast(message, {\n      toastId: key,\n      type: "default",\n    });\n  },\n\n  close: (key: any) => toast.dismiss(key),\n};\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toast.isActive")," function takes the notification key as an argument. It returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the notification is active and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,"In the code above, we first checked whether the notification is active using ",(0,i.kt)("inlineCode",{parentName:"p"},"toast.isActive"),". If there is an active toast with the specified key, we update it instead of creating a new one. If there is no active notification with the specified key, we create a new toast."),(0,i.kt)("p",null,"Similarly, you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"toast.dismiss")," function to dismiss an open notification. The ",(0,i.kt)("inlineCode",{parentName:"p"},"toast.dismiss")," function takes the notification key as an argument. The code above is a simple notification provider setup to get us up and running. We will add more functionality later."),(0,i.kt)("p",null,"We need to import the above notification provider into the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and pass it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," prop. Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," file to include the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'...\n//highlight-start\nimport { ToastContainer } from "react-toastify";\nimport { notificationProvider } from "./providers/notificationProvider";\nimport "react-toastify/dist/ReactToastify.min.css";\n//highlight-end\n\n\nfunction App() {\n  ...\n  return (\n    <BrowserRouter>\n        <Refine\n          ...\n          //highlight-next-line\n          notificationProvider={notificationProvider}\n          i18nProvider={i18nProvider}\n          ...\n        >\n          <Routes>\n            <Route\n              element={\n                <Layout>\n                  <Outlet />\n                  //highlight-next-line\n                  <ToastContainer />\n                </Layout>\n              }\n            >\n            ...\n            </Route>\n          </Routes>\n          <UnsavedChangesNotifier />\n        </Refine>\n    </BrowserRouter>\n  );\n}\n')),(0,i.kt)("p",null,"Your notification provider setup is now complete. When you edit or create a new blog post, refine will display a notification."),(0,i.kt)("h3",{id:"step-3--create-custom-undoable-notification-component"},"Step 3 \u2014 Create custom Undoable notification component"),(0,i.kt)("p",null,"You can apply mutations or updates in refine in three modes. These three modes are the pessimistic, optimistic, and undoable modes. You can set the notification mode of your refine application using the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," prop of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'const App: React.FC = () => {\n  return (\n    <Refine\n        ...\n        options={{ mutationMode: "optimistic" }}\n    />\n    );\n};\n')),(0,i.kt)("p",null,"In the pessimistic mutation mode, refine applies mutation immediately. It then updates the UI and redirects after mutating successfully. The pessimistic mode is the default."),(0,i.kt)("p",null,"Optimistic mode is where refine applies the mutation locally and immediately updates UI and redirects irrespective of whether the mutation is successful or not. If the mutation fails, it updates the UI with an appropriate notification message."),(0,i.kt)("p",null,"With the undoable mutation mode, refine applies the mutation locally and immediately redirects and updates the UI as if the mutation is successful. It then waits for a customizable timeout before applying the mutation. During the timeout, you can cancel the mutation and revert the UI."),(0,i.kt)("p",null,"Therefore, when working with refine in the undoable mutation mode, you display a notification informing the user of the time left and a button to cancel the mutation. We need a custom component to display the countdown and button for canceling the mutation."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/component")," directory, create a new directory and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable-notification"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable-notification")," directory you have just created, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.tsx")," file. Copy and paste the code below into it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/component/undoable-notification/index.tsx"',title:'"src/component/undoable-notification/index.tsx"'},"type UndoableNotification = {\n  message: string;\n  cancelMutation?: () => void;\n  closeToast?: () => void;\n};\n\nexport const UndoableNotification: React.FC<UndoableNotification> = ({\n  closeToast,\n  cancelMutation,\n  message,\n}) => {\n  return (\n    <div>\n      <p>{message}</p>\n      <button\n        onClick={() => {\n          cancelMutation?.();\n          closeToast?.();\n        }}\n      >\n        Undo\n      </button>\n    </div>\n  );\n};\n")),(0,i.kt)("p",null,"In the component above, we display a message to indicate the time left and a button to cancel the mutation and close the notification."),(0,i.kt)("p",null,"When the mutation mode is undoable, refine will invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," function and sets the notification type to ",(0,i.kt)("inlineCode",{parentName:"p"},'"progress"'),". It will also set the timeout as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," property and the ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelMutation")," function for canceling the mutation within the timeout."),(0,i.kt)("p",null,"Every second, refine will decrease the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"undoableTimeout")," by 1 until its value reaches 0."),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"UndoableNotification")," component you created above into the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/providers/notificationProvider.tsx")," file. Add the following changes to the notification provider. Pay attention to the ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," method because its body has changed.  It will display a custom component when the refine mutation mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/providers/notificationProvider.tsx"',title:'"src/providers/notificationProvider.tsx"'},'import React from "react";\nimport { NotificationProvider } from "@refinedev/core";\nimport { toast } from "react-toastify";\n//highlight-next-line\nimport { UndoableNotification } from "../components/undoable-notification";\n\nexport const notificationProvider: NotificationProvider = {\n  open: ({ key, message, type, undoableTimeout, cancelMutation }) => {\n    //highlight-start\n    if (type === "progress") {\n      if (toast.isActive(key as React.ReactText)) {\n        toast.update(key as React.ReactText, {\n          progress: undoableTimeout && (undoableTimeout / 10) * 2,\n          render: (\n            <UndoableNotification\n              message={message}\n              cancelMutation={cancelMutation}\n            />\n          ),\n          type: "default",\n        });\n\n        return;\n      }\n\n      toast(\n        <UndoableNotification\n          message={message}\n          cancelMutation={cancelMutation}\n        />,\n        {\n          toastId: key,\n          updateId: key,\n          closeOnClick: false,\n          closeButton: false,\n          autoClose: false,\n          progress: undoableTimeout && (undoableTimeout / 10) * 2,\n        }\n      );\n\n      return;\n    }\n\n    if (toast.isActive(key as React.ReactText)) {\n      toast.update(key as React.ReactText, {\n        render: message,\n        closeButton: true,\n        autoClose: 5000,\n        type,\n      });\n\n      return;\n    }\n\n    toast(message, {\n      toastId: key,\n      type,\n    });\n    //highlight-end\n  },\n  close: (key) => toast.dismiss(key),\n};\n')),(0,i.kt)("h3",{id:"step-4--preview-notification"},"Step 4 \u2014 Preview notification"),(0,i.kt)("p",null,"You can preview the notification by editing a record. refine will make updates and display a notification. You can also change the mutation mode of the application to ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," prop of the refine component to display the custom component above."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Having a notification system is inevitable when building complex distributed systems. It notifies users when an event or changes occur in the database."),(0,i.kt)("p",null,"refine comes with a robust and customizable notification system when you use one of the supported UI or design systems like Material UI, Chakra UI, and Mantine."),(0,i.kt)("p",null,"refine gives you the flexibility to build a custom notification provider using a notification library like react-toastify if the built-in notification system of the supported UI or design system doesn't meet your needs."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live CodeSandbox Example"),(0,i.kt)(u,{path:"blog-react-toastify",mdxType:"CodeSandboxExample"}),(0,i.kt)("hr",null))}h.isMDXComponent=!0}}]);