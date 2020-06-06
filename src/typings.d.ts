/* SystemJS module definition */
declare var module: NodeModule;
// Default setting for json file read on angular component 
declare module "*.json" {
  const value: any;
  export default value;
}
interface NodeModule {
  id: string;
}
