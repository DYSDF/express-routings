import { getMetadataArgsStorage } from "../metadata/builder";

export function Param(name: string): Function {
  return function (object: Object, methodName: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'param',
      object: object,
      method: methodName,
      index: index,
      name: name,
    });
  };
}
