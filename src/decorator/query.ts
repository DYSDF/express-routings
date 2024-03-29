import { getMetadataArgsStorage } from "../metadata/builder";

export function Query(name: string): Function {
  return function (object: Object, method_name: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'param',
      object: object,
      method: method_name,
      index: index,
      name: name,
    });
  };
}
