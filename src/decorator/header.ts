import { getMetadataArgsStorage } from "../metadata/builder";

/**
 * Sets response header.
 * Must be applied on a controller action.
 */
export function Header(name: string, value: string): Function {
  return function (object: Object, method_name: string) {
    getMetadataArgsStorage().response_handlers.push({
      type: 'header',
      target: object.constructor,
      method: method_name,
      value: name,
      secondary_value: value,
    });
  };
}
