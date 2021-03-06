import { getMetadataArgsStorage } from "../metadata/builder";
import { IBodyOptions } from "./body";

/**
 * Takes partial data of the request body.
 * Must be applied on a controller action parameter.
 */
export function BodyParam(name: string, options?: IBodyOptions): Function {
  return function (object: Object, method_name: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'body-param',
      object: object,
      method: method_name,
      index: index,
      name: name,
      explicit_type: options ? options.type : undefined,
    });
  };
}
