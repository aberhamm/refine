"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},44805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},l=void 0,d={unversionedId:"migration-guide/auth-provider",id:"migration-guide/auth-provider",title:"Migrating Auth Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/auth-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/auth-provider",permalink:"/docs/migration-guide/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/auth-provider.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1702284931,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{title:"Migrating Auth Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Auth Provider"},sidebar:"mainSidebar",previous:{title:"3.x.x to 4.x.x",permalink:"/docs/migration-guide/3x-to-4x"},next:{title:"Migrating Router Provider",permalink:"/docs/migration-guide/router-provider"}},u={},p=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Naming changes",id:"naming-changes",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>login</code>",id:"login",level:3},{value:"<code>logout</code>",id:"logout",level:3},{value:"<code>register</code>",id:"register",level:3},{value:"<code>forgotPassword</code>",id:"forgotpassword",level:3},{value:"<code>updatePassword</code>",id:"updatepassword",level:3},{value:"<code>check</code>",id:"check",level:3},{value:"<code>onError</code>",id:"onerror",level:3},{value:"<code>getPermissions</code>",id:"getpermissions",level:3},{value:"<code>getIdentity</code>",id:"getidentity",level:3},{value:"Auth hooks",id:"auth-hooks",level:2},{value:"Backward compatibility",id:"backward-compatibility",level:2}],c={toc:p};function m(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,r.kt)("p",null,"Our motivation for modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," prop in ",(0,r.kt)("strong",{parentName:"p"},"refine v4")," was to improve its flexibility and customization options, allowing it to handle a wider range of use cases without becoming overly complicated."),(0,r.kt)("p",null,"We aimed to create a more standardized interface for the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," methods that would improve transparency and enable easier debugging for developers."),(0,r.kt)("p",null,"Previously, developers were required to resolve the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," methods on success and reject them on failure. However, this approach had limitations, as rejected promises are typically associated with errors or unusual scenarios. Some errors, such as incorrect login credentials, aren\u2019t actually considered failures and need to be communicated to the user. This behavior often confused developers and hindered the debugging process."),(0,r.kt)("p",null,"Now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise that includes an object with a success key. This key indicates whether the operation was successful or not, and in case of failure, an optional error key containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object can be used to notify users."),(0,r.kt)("p",null,"Furthermore, the auth hooks no longer have default redirection paths, which had previously been a source of confusion for some developers. Instead, developers can now have more control over the redirection after a successful operation by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," methods' return object"),(0,r.kt)("h2",{id:"naming-changes"},"Naming changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthPovider")," interface was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthBindings"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { AuthBindings } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: AuthBindings = {/* ... */}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"getIdentity"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkError")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onError"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const authProvider = {\n-     getUserIdentity,\n+     getIdentity,\n-     useCheckError,\n+     useOnError,\n-     checkAuth,\n+     check,\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," hook was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { useAuthenticated } from "@refinedev/core";\n+ import { useIsAuthenticated } from "@refinedev/core";\n')))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"login"},(0,r.kt)("inlineCode",{parentName:"h3"},"login")),(0,r.kt)("p",null,"Promises must now be resolved in all cases when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    login: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n            localStorage.setItem("auth", JSON.stringify(user));\n-           return Promise.resolve();\n+           return {\n+               success: true,\n+               redirectTo: "/",\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               message: "Login Error",\n+               name: "Invalid email or password",\n+           }\n+       };\n    },\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n")),(0,r.kt)("h3",{id:"logout"},(0,r.kt)("inlineCode",{parentName:"h3"},"logout")),(0,r.kt)("p",null,"Promises must now be resolved in all cases when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    logout: async ({ email, password }) => {\n        localStorage.removeItem("auth");\n-       return Promise.resolve();\n+       return {\n+          success: true,\n+          redirectTo: "/login",\n+       };\n    },\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n")),(0,r.kt)("h3",{id:"register"},(0,r.kt)("inlineCode",{parentName:"h3"},"register")),(0,r.kt)("p",null,"Promises must now be resolved in all cases when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRegister")," no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    register: async ({ email, password }) => {\n        const user = mockUsers.find((item) => item.email === email);\n\n        if (user) {\n-           return Promise.reject();\n+           return {\n+               success: false,\n+               error: {\n+                   name: "Register Error"",\n+                   message: "User already exists",\n+               },\n+           };\n        }\n\n        mockUsers.push({ email });\n\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/",\n+       };\n    },\n}\n')),(0,r.kt)("h3",{id:"forgotpassword"},(0,r.kt)("inlineCode",{parentName:"h3"},"forgotPassword")),(0,r.kt)("p",null,"Promises must now be resolved in all cases when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    forgotPassword: async ({ password }) => {\n        // send password reset link to the user\'s email address here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       };\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n")),(0,r.kt)("h3",{id:"updatepassword"},(0,r.kt)("inlineCode",{parentName:"h3"},"updatePassword")),(0,r.kt)("p",null,"Promises must now be resolved in all cases when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," method, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthActionResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    updatePassword: async ({ password }) => {\n        // update the user\'s password here\n\n        // if request is successful\n-       return Promise.resolve();\n+       return {\n+           success: true,\n+           redirectTo: "/login",\n+       });\n\n        // if request is not successful\n-       return Promise.reject();\n+       return {\n+           success: false,\n+           error: {\n+               name: "Forgot Password Error",\n+               message: "Email address does not exist",\n+           },\n+       };\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n};\n")),(0,r.kt)("h3",{id:"check"},(0,r.kt)("inlineCode",{parentName:"h3"},"check")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),". It now requires promises to be resolved in all cases, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Authenticated>")," component no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method's return object. The component doesn't call the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method by default either, and you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout: true")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkAuth: async () => {\n+   check: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n-           return Promise.resolve();\n+           return {\n+               authenticated: true,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {\n+           authenticated: false,\n+           redirectTo: "/login",\n+           logout: true,\n+           error: {\n+               message: "Check failed",\n+               name: "User not found",\n+           }\n+       };\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CheckResponse = {\n  authenticated: boolean;\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n")),(0,r.kt)("h3",{id:"onerror"},(0,r.kt)("inlineCode",{parentName:"h3"},"onError")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkError")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," was changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onError"),". It now requires promises to be resolved in all cases, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"OnErrorResponse"),". When resolving the promise, you must always include a ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," key, and in the case of a failure, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," key."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOnError")," component no longer has default redirection, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectTo")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," method's return object. The component doesn't call the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method by default either, so you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout: true")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," method's return object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n-   checkError: async (error) => {\n+   onError: async (error) => {\n        if (error.status === 401 || error.status === 403) {\n-           return Promise.reject();\n+           return {\n+               redirectTo: "/login",\n+               logout: true,\n+               error: error,\n+           };\n        }\n\n-       return Promise.reject();\n+       return {};\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n  redirectTo?: string;\n  logout?: boolean;\n  error?: Error;\n};\n")),(0,r.kt)("h3",{id:"getpermissions"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPermissions")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getPermissions")," method now requires promises to be resolved in all cases, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"PermissionResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider = {\n    getPermissions: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { roles } = JSON.parse(user);\n\n            return roles;\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type PermissionResponse = unknown;\n")),(0,r.kt)("h3",{id:"getidentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"getIdentity")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method was renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"getIdentity"),", which requires promises to be resolved in all cases, with a return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityResponse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const authProvider: AuthProvider = {\n-   getUserIdentity: async () => {\n+   getIdentity: async () => {\n        const user = localStorage.getItem("auth");\n\n        if (user) {\n            const { email, roles } = JSON.parse(user);\n\n            return { email, roles };\n        }\n\n-        return Promise.reject();\n+        return null;\n    },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type IdentityResponse = unknown;\n")),(0,r.kt)("h2",{id:"auth-hooks"},"Auth hooks"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"codemod")," for migration, the ",(0,r.kt)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," prop was added to the auth hooks for backward compatibility. You need to remove this prop if you want to upgrade to the new auth provider."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"useLogin({\n-       v3LegacyAuthProviderCompatible: true,\n})\n"))),(0,r.kt)("p",null,"Unlike the previous version, ",(0,r.kt)("strong",{parentName:"p"},"refine@4")," requires all auth methods to resolve promises. Therefore, if you used auth hooks in your applications before, they need to be updated accordingly."),(0,r.kt)("p",null,"To better show the differences between the usage of auth hooks between the two versions, let's create two wrapper components that render children according to the authentication status:"),(0,r.kt)("p",null,"Auth Provider v3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useAuthenticated } from "@pankod/refine-core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n  const { isSuccess, isLoading, isError } = useAuthenticated();\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (isError) {\n    return null;\n  }\n\n  if (isSuccess) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n')),(0,r.kt)("p",null,"Auth Provider v4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useIsAuthenticated } from "@refinedev/core";\n\nexport const Authenticated: React.FC = ({ children }) => {\n  const { isLoading, data } = useIsAuthenticated();\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (data.error) {\n    return null;\n  }\n\n  if (data.authenticated) {\n    return <>{children}</>;\n  }\n\n  return null;\n};\n')),(0,r.kt)("p",null,"Though auth hooks should be familiar, they need to updated according to the new system."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider#hooks-and-components"},"Please refer to the hooks documentation for more information.")),(0,r.kt)("h2",{id:"backward-compatibility"},"Backward compatibility"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," still supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," for backward compatibility. We changed its name to ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyAuthProvider")," and it will be removed in the next major version. If you want to continue using the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," you can use it as ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyAuthProvider")," in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- import { AuthProvider } from "@refinedev/core";\n+ import { LegacyAuthProvider } from "@refinedev/core";\n\n- const authProvider: AuthProvider = {/* ... */}\n+ const authProvider: LegacyAuthProvider = {/* ... */}\n\nconst App = () => {\n    return (\n        <Refine\n-           authProvider={authProvider}\n+           legacyAuthProvider={authProvider}\n        >\n            <AppLayout />\n        </Refine>\n    );\n};\n\n')),(0,r.kt)("p",null,"Additionally, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"v3LegacyAuthProviderCompatible: true")," to your auth hooks in order to continue using ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider@v3")," in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useLogin } from "@refinedev/core";\n\nconst login = useLogin({\n  // highlight-next-line\n  v3LegacyAuthProviderCompatible: true,\n});\n')))}m.isMDXComponent=!0}}]);