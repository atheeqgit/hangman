/// <reference types="vite/client" />
// declare module "react/jsx-runtime" {
//   export default any;
// }

declare module "react/jsx-runtime" {
  const content: string;
  export default content;
}
