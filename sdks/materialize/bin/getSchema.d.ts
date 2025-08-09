import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSchema(args?: GetSchemaArgs, opts?: pulumi.InvokeOptions): Promise<GetSchemaResult>;
/**
 * A collection of arguments for invoking getSchema.
 */
export interface GetSchemaArgs {
    databaseName?: string;
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getSchema.
 */
export interface GetSchemaResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemas: outputs.GetSchemaSchema[];
}
export declare function getSchemaOutput(args?: GetSchemaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSchemaResult>;
/**
 * A collection of arguments for invoking getSchema.
 */
export interface GetSchemaOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
